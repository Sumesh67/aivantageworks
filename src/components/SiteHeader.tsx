"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-[-0.02em]">
      <span className="grid size-6 place-items-center rounded-md bg-signal" aria-hidden>
        <span className="size-2 rounded-sm bg-on-signal" />
      </span>
      AIVantageWorks
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="theme-dark sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 text-sm md:flex">
          {NAV.filter((n) => n.href !== "/contact").map((n) => {
            const active = pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  active ? "bg-raised text-text" : "text-muted hover:text-text"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="rounded-lg bg-signal px-4 py-2 text-sm font-medium text-on-signal transition-colors hover:bg-signal-hover"
        >
          Book a call
        </Link>
      </div>
      {/* Mobile nav */}
      <nav
        aria-label="Main mobile"
        className="flex gap-1 overflow-x-auto border-t border-line px-3 py-2 text-sm md:hidden"
      >
        {NAV.map((n) => {
          const active = pathname.startsWith(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 rounded-md px-3 py-1.5 ${
                active ? "bg-raised text-text" : "text-muted"
              }`}
            >
              {n.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
