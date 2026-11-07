import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container, CtaBand, Eyebrow, H2, PageHeader } from "@/components/ui";
import { PRINCIPLES, SERVICES, STEPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI workflow reviews, automations and integrations, custom AI agents, and AI search visibility audits for businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="We find the busywork. Then we build the AI that does it."
        lead="Four ways we help — from a one-off review to custom agents. Most clients start with the review, pick one workflow, and grow from there."
      />

      <Container className="py-8 lg:py-12">
        {SERVICES.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="grid scroll-mt-28 gap-8 border-b border-line py-14 last:border-b-0 lg:grid-cols-[0.8fr_1.2fr_1fr] lg:gap-12"
          >
            <div>
              <p className="font-mono text-xs text-faint">
                0{i + 1} / {s.tag}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em]">{s.title}</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-muted">{s.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li key={p} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-faint">You get</p>
              <ul className="mt-4 space-y-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-signal-ink" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </Container>

      <section className="border-t border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <div className="max-w-2xl">
            <Eyebrow>How an engagement runs</Eyebrow>
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
          <div className="mt-16 rounded-xl border border-line bg-bg p-7 sm:p-8">
            <h3 className="font-display text-xl font-semibold">Ground rules we build by</h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed text-muted">
                  <Check className="mt-1 size-4 shrink-0 text-signal-ink" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
