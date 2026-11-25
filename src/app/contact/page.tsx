import type { Metadata } from "next";
import { Cta, PageHero, Sq } from "@/components/ui";
import { CONTACT_EMAIL, REVIEW_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free AI workflow review. Tell us the one task your team dreads every week and we'll come back with how we'd automate it.",
  alternates: { canonical: "/contact" },
};

const ASKS: [string, string][] = [
  ["Your business", "What you do and roughly how big the team is."],
  ["The painful task", "The one job that eats the most time each week."],
  ["Your tools", "Email, CRM, spreadsheets, booking system: whatever you use today."],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Get a free workflow review
            <Sq />
          </>
        }
        lead="Tell us the one task your team dreads every week. We'll come back with how we'd take it off your plate. Free, and no obligation."
      />
      <section className="block">
        <div className="wrap contactgrid">
          <div>
            <h2 className="h2">What to include</h2>
            <ol className="steps" style={{ gridTemplateColumns: "1fr", marginTop: 32 }}>
              {ASKS.map(([title, body]) => (
                <li key={title}>
                  <b>{title}</b>
                  <span>{body}</span>
                </li>
              ))}
            </ol>
            <p className="lede" style={{ fontSize: 17 }}>
              Not sure what to automate? Describe a normal week. That&apos;s enough to start.
            </p>
          </div>
          <div className="mailcard">
            <h2>Email us</h2>
            <p>The button opens an email with these questions already filled in.</p>
            <Cta href={REVIEW_MAILTO}>Start your review</Cta>
            <p className="alt">
              Prefer your own email app? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
