import Link from "next/link";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={light ? "text-white/70" : "text-muted"}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span className={light ? "font-medium text-white" : "font-medium text-brand-dark"} aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className={light ? "hover:text-white" : "hover:text-brand"}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
