"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="logo">
      <i aria-hidden="true" />
      AIVantageWorks
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const links = NAV.filter((n) => n.href !== "/contact");
  return (
    <header className="site-header">
      <div className="wrap">
        <Logo />
        <nav className="site-nav" aria-label="Main">
          {links.map((n) => (
            <Link key={n.href} href={n.href} aria-current={pathname.startsWith(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <Link className="talk" href="/contact">
            Book a free call
          </Link>
        </nav>
      </div>
      <nav className="mobile-nav" aria-label="Main mobile">
        {links.map((n) => (
          <Link key={n.href} href={n.href} aria-current={pathname.startsWith(n.href) ? "page" : undefined}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
