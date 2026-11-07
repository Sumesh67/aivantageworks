import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Product, ProductStatus } from "@/lib/site";
import { REVIEW_MAILTO } from "@/lib/site";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-[1200px] px-5 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-faint">
      <span className="size-1.5 bg-signal" aria-hidden />
      {children}
    </p>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-[-0.03em]">
      {children}
    </h2>
  );
}

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-ink";

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = `inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3 font-medium text-on-signal transition-colors hover:bg-signal-hover ${focus}`;
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-medium transition-colors hover:border-muted hover:bg-surface ${focus}`}
    >
      {children}
    </Link>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
}) {
  return (
    <section className="theme-dark relative overflow-hidden border-b border-line bg-bg">
      <div className="grid-texture absolute inset-0" aria-hidden />
      <Container className="relative pt-20 pb-16 lg:pt-28 lg:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] font-semibold tracking-[-0.03em]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
      </Container>
    </section>
  );
}

const statusStyle: Record<ProductStatus, string> = {
  Live: "bg-signal-dim text-signal-ink",
  "Early access": "bg-amber/10 text-amber-ink",
  Service: "border border-line text-muted",
};

export function ProductCard({ p }: { p: Product }) {
  const external = p.href.startsWith("http");
  const inner = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-faint">{p.kind}</span>
        <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${statusStyle[p.status]}`}>
          {p.status}
        </span>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em]">{p.name}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-muted">{p.body}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-signal-ink">
        {p.cta}
        {external ? (
          <ArrowUpRight className="size-4" aria-hidden />
        ) : (
          <ArrowRight className="size-4" aria-hidden />
        )}
      </span>
    </>
  );
  const cls = `group flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-faint hover:bg-raised ${focus}`;
  return external ? (
    <a href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={p.href} className={cls}>
      {inner}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="theme-dark border-t border-line bg-bg">
      <Container className="py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-14 text-center sm:px-12">
          <div className="grid-texture absolute inset-0" aria-hidden />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-faint">
              Free workflow review
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.03em]">
              Tell us the one task your team dreads every week.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              We&apos;ll come back with how we&apos;d automate it — free, no obligation.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton href={REVIEW_MAILTO}>
                Get a free workflow review <ArrowRight className="size-4" aria-hidden />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
