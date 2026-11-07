import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container, CtaBand, Eyebrow, H2, PageHeader } from "@/components/ui";
import { PRINCIPLES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AIVantageWorks is a small AI studio that builds its own AI products and helps businesses put AI to work in their daily operations.",
  alternates: { canonical: "/about" },
};

const beliefs = [
  [
    "Builders, not slide-makers",
    "We ship AI products of our own — agents, apps and media pipelines. The advice we give comes from what has actually worked in production.",
  ],
  [
    "Small and direct",
    "You work with the people who build your system, not an account manager. Fewer meetings, faster answers.",
  ],
  [
    "Boring wins first",
    "The best first project is usually an unglamorous task that eats hours every week. We start there, prove it, then grow.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A small AI studio that builds real things."
        lead="AIVantageWorks started as a place to build our own AI products. Now we help businesses use the same tools and know-how in their day-to-day work."
      />

      <Container className="py-20 lg:py-28">
        <div className="grid gap-4 md:grid-cols-3">
          {beliefs.map(([title, body], i) => (
            <div key={title} className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-sm text-signal-ink">0{i + 1}</p>
              <h2 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em]">{title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="border-t border-line bg-surface">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr] lg:py-28">
          <div>
            <Eyebrow>What we believe about AI</Eyebrow>
            <H2>AI does the work. People stay in charge.</H2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              AI is great at reading, sorting, drafting and summarising. It shouldn&apos;t be
              making promises to your customers on its own. Every system we build keeps a
              person in the loop where it counts.
            </p>
          </div>
          <ul className="space-y-4">
            {PRINCIPLES.map((p) => (
              <li key={p} className="flex gap-4 rounded-xl border border-line bg-bg p-5 leading-relaxed">
                <Check className="mt-1 size-4 shrink-0 text-signal-ink" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
