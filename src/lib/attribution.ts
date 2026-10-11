/**
 * Where a visitor came from, remembered across pages and visits so the quote form can
 * send it with the lead (CRM Marketing ROI attribution).
 *
 * - First touch: the first visit that carried UTM tags or an ad click id, plus the
 *   landing page and referrer of the very first visit.
 * - Last click: the most recent ad click id (Google / Meta match conversions on it).
 */

const STORAGE_KEY = "y2_attribution";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

const PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
] as const;
const CLICK_KEYS = ["gclid", "gbraid", "wbraid", "fbclid"] as const;

type Params = Partial<Record<(typeof PARAM_KEYS)[number], string>>;

type Stored = {
  firstSeen: number;
  landing_page: string;
  referrer: string;
  first?: Params & { at: number };
  lastClick?: Params & { at: number };
};

function read(): Stored | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Stored;
    if (!parsed?.firstSeen || Date.now() - parsed.firstSeen > MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function write(value: Stored) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // storage blocked (private mode) — attribution is best effort
  }
}

function externalReferrer() {
  const ref = document.referrer || "";
  try {
    return ref && new URL(ref).hostname !== window.location.hostname ? ref : "";
  } catch {
    return "";
  }
}

/** Call on every page view. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const params: Params = {};
  for (const k of PARAM_KEYS) {
    const v = url.searchParams.get(k)?.trim();
    if (v) params[k] = v.slice(0, 300);
  }
  const hasParams = Object.keys(params).length > 0;
  const hasClick = CLICK_KEYS.some((k) => params[k]);
  const now = Date.now();

  const stored: Stored = read() || {
    firstSeen: now,
    landing_page: url.pathname.slice(0, 300),
    referrer: externalReferrer().slice(0, 500),
  };
  if (hasParams && !stored.first) stored.first = { ...params, at: now };
  if (hasClick) stored.lastClick = { ...params, at: now };
  write(stored);
}

/** Flat fields for the lead payload. */
export function attributionFields(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const stored = read();
  if (!stored) return {};
  const out: Record<string, string> = {};
  const first = stored.first || {};
  for (const k of PARAM_KEYS) {
    const v = first[k];
    if (v) out[k] = v;
  }
  // Click ids come from the latest ad click; UTMs stay first-touch.
  if (stored.lastClick) {
    for (const k of CLICK_KEYS) {
      const v = stored.lastClick[k];
      if (v) out[k] = v;
      else delete out[k];
    }
  }
  if (stored.landing_page) out.landing_page = stored.landing_page;
  if (stored.referrer) out.referrer = stored.referrer;
  return out;
}
