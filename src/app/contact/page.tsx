import type { Metadata } from "next";
import { ArrowRight, Mail } from "lucide-react";
import { Container, PageHeader, PrimaryButton } from "@/components/ui";
import { CONTACT_EMAIL, REVIEW_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free AI workflow review. Tell us the one task your team dreads every week and we'll come back with how we'd automate it.",
  alternates: { canonical: "/contact" },
};

const asks = [
  ["Your business", "What you do and roughly how big the team is."],
  ["The painful task", "The one job that eats the most time each week."],
  ["Your tools", "Email, CRM, spreadsheets, booking system — whatever you use today."],
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free workflow review."
        lead="Tell us the one task your team dreads every week. We'll come back with how we'd automate it — free, no obligation."
      />
      <Container className="grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
            What to include
          </h2>
          <ol className="mt-6 divide-y divide-line border-y border-line">
            {asks.map(([title, body], i) => (
              <li key={title} className="flex gap-5 py-5">
                <span className="font-mono text-sm text-signal">0{i + 1}</span>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="mt-1 text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-faint">
            Not sure what to automate? Just describe a normal week — that&apos;s enough to start.
          </p>
        </div>
        <div className="h-fit rounded-xl border border-line bg-surface p-7">
          <span className="grid size-10 place-items-center rounded-lg bg-signal-dim text-signal">
            <Mail className="size-5" aria-hidden />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em]">Email us</h2>
          <p className="mt-2 leading-relaxed text-muted">
            The button opens an email with these questions already filled in.
          </p>
          <div className="mt-6">
            <PrimaryButton href={REVIEW_MAILTO}>
              Start your review <ArrowRight className="size-4" aria-hidden />
            </PrimaryButton>
          </div>
          <p className="mt-6 border-t border-line pt-4 text-sm text-faint">
            Prefer your own email app?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted underline underline-offset-4 hover:text-text">
              Write to us directly
            </a>
            .
          </p>
        </div>
      </Container>
    </>
  );
}
