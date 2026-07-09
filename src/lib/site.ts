import { site } from "./content";

export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_ORIGIN || site.url).replace(/\/$/, "");
