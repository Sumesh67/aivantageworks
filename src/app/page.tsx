import Link from "next/link";
import { ArrowRight, Blocks, MessageSquareText, ScanSearch, ShieldCheck, Workflow } from "lucide-react";
import { AgentLog } from "@/components/AgentLog";
import { ServiceExplorer } from "@/components/ServiceExplorer";
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

const SERVICE_ICONS: Record<string, typeof ArrowRight> = {
  "workflow-review": ScanSearch,
  automations: Workflow,
  agents: Blocks,
  "ai-search-visibility": MessageSquareText,
  "website-security": ShieldCheck,
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="theme-dark relative overflow-hidden border-b border-line bg-bg">
        <div className="grid-texture absolute inset-0" aria-hidden />
        <Container className="relative grid items-center gap-14 pt-12 pb-10 lg:grid-cols-[1.15fr_1fr] lg:pt-14 lg:pb-12">
          <div>
            <Eyebrow>AI automation studio</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] font-bold tracking-[-0.04em]">
              AI that does the work.
              <br />
              <span className="text-signal-ink">You approve what matters.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              We find the repetitive work slowing your team down and build the automations and
              agents that handle it. We also check that your website is secure and shows up
              when customers ask AI. We ship our own AI products too, so we build what works.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton href={REVIEW_MAILTO}>
                Get a free workflow review <ArrowRight className="size-4" aria-hidden />
              </PrimaryButton>
              <SecondaryButton href="/#services">Explore our services</SecondaryButton>
            </div>
          </div>
          {/* On phones the service strip comes first; each service panel below has its own example run. */}
          <div className="hidden lg:block">
            <AgentLog />
          </div>
        </Container>

        {/* Service strip: every service visible from the first screen */}
        <Container className="relative pb-14 lg:pb-20">
          <nav aria-label="Our services">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-faint">
              <span className="size-1.5 bg-signal" aria-hidden />
              What we do · 5 services
            </p>
            <ul className="mt-4 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {SERVICES.map((s, i) => {
                const Icon = SERVICE_ICONS[s.slug] ?? ArrowRight;
                return (
                  <li key={s.slug} className="flex sm:last:odd:col-span-2 lg:last:odd:col-span-1">
                    <a
                      href={`#service-${s.slug}`}
                      className="group relative flex w-full flex-col bg-surface p-5 transition-colors hover:bg-raised focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-signal-ink"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-signal transition-transform group-hover:scale-x-100"
                      />
                      <span className="flex items-center justify-between">
                        <span className="grid size-10 place-items-center rounded-lg border border-line bg-bg text-signal-ink transition-colors group-hover:border-signal/40">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <span className="font-mono text-xs text-faint">
                          0{i + 1} / {s.tag}
                        </span>
                      </span>
                      <span className="mt-5 font-display text-lg leading-snug font-semibold tracking-[-0.02em] text-text">
                        {s.title}
                      </span>
                      <span className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{s.summary}</span>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-signal-ink">
                        See how it works
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20">
        <Container className="py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Services</Eyebrow>
              <H2>Five ways we put AI to work in your business.</H2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Pick one to see what you get and how a typical run looks. Every build keeps a
                person in charge of what matters.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1 text-sm font-medium text-signal-ink hover:underline">
              Compare all services <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <ServiceExplorer services={SERVICES} />
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
            {PRODUCTS.filter((p) => p.href.startsWith("http")).slice(0, 3).map((p) => (
              <ProductCard key={p.name} p={p} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
