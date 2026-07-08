import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

/** Compact breadcrumb trail themed to the Easy IPTV site. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-wide text-gray-400">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-iptv-green">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-gray-600 line-clamp-1 max-w-[220px]" : ""}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="h-3 w-3 text-gray-300" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
