import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AgentLog } from "@/components/AgentLog";
import {
  Container,
  CtaBand,
  Eyebrow,
  H2,
  PrimaryButton,
  ProductCard,
  SecondaryButton,
} from "@/components/ui";
import { IDEAS, PRODUCTS, REVIEW_MAILTO, SERVICES, STEPS } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="theme-dark relative overflow-hidden border-b border-line bg-bg">
        <div className="grid-texture absolute inset-0" aria-hidden />
        <Container className="relative grid items-center gap-14 pt-16 pb-20 lg:grid-cols-[1.15fr_1fr] lg:pt-28 lg:pb-28">
          <div>
            <Eyebrow>AI automation studio</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] font-bold tracking-[-0.04em]">
              AI that does the work.
              <br />
              <span className="text-signal-ink">You approve what matters.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              We find the repetitive work slowing your team down, then build the automations,
              agents and workflows that handle it. We ship our own AI products too — so we
              build what actually works.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryButton href={REVIEW_MAILTO}>
                Get a free workflow review <ArrowRight className="size-4" aria-hidden />
              </PrimaryButton>
              <SecondaryButton href="/products">See what we&apos;ve built</SecondaryButton>
            </div>
          </div>
          <AgentLog />
        </Container>
      </section>

      {/* SERVICES PREVIEW */}
      <section>
        <Container className="py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>What we do</Eyebrow>
              <H2>From &ldquo;we should use AI&rdquo; to a workflow your team uses every day.</H2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1 text-sm font-medium text-signal-ink hover:underline">
              All services <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="group flex flex-col bg-surface p-6 transition-colors hover:bg-raised"
              >
                <span className="font-mono text-xs text-faint">
                  0{i + 1} / {s.tag}
                </span>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.summary}</p>
                <ArrowRight
                  className="mt-6 size-4 text-faint transition-all group-hover:translate-x-1 group-hover:text-signal-ink"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* IDEAS */}
      <section className="border-y border-line bg-surface">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr] lg:py-28">
          <div>
            <Eyebrow>Common starting points</Eyebrow>
            <H2>The work nobody hired you to do.</H2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Most businesses don&apos;t need a big &ldquo;AI transformation.&rdquo; They need
              three or four boring tasks to quietly take care of themselves.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {IDEAS.map(([before, after]) => (
              <li
                key={before}
                className="grid gap-1 py-4 sm:grid-cols-[1fr_auto_1.4fr] sm:items-center sm:gap-5"
              >
                <span className="font-medium">{before}</span>
                <span className="hidden font-mono text-xs text-signal-ink sm:block" aria-hidden>
                  ──→
                </span>
                <span className="text-muted">{after}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* PROCESS */}
      <section>
        <Container className="py-20 lg:py-28">
          <div className="max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <H2>Start small. Prove it. Then grow.</H2>
          </div>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([title, body], i) => (
              <li key={title} className="border-t border-line pt-5">
                <p className="font-mono text-sm text-signal-ink">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="border-t border-line">
        <Container className="py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Built by AIVantageWorks</Eyebrow>
              <H2>We don&apos;t just advise on AI. We ship it.</H2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-1 text-sm font-medium text-signal-ink hover:underline">
              All products <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PRODUCTS.slice(1, 4).map((p) => (
              <ProductCard key={p.name} p={p} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
