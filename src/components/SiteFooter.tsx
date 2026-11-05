import Link from "next/link";
import { NAV, PRODUCTS } from "@/lib/site";
import { Logo } from "./SiteHeader";

export function SiteFooter() {
  const external = PRODUCTS.filter((p) => p.href.startsWith("http"));
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            An AI studio. We build automations, agents and workflows for businesses — and our
            own AI products.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-faint">Studio</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-muted hover:text-text">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-faint">Products</p>
          <ul className="mt-4 space-y-2 text-sm">
            {external.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-text"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-2 px-5 py-6 font-mono text-xs text-faint sm:px-6">
          <span>© {new Date().getFullYear()} AIVantageWorks</span>
          <span>Chicago</span>
        </div>
      </div>
    </footer>
  );
}
