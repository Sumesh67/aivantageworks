import type { Metadata } from "next";
import { ClosingBand, PageHero, Sq } from "@/components/ui";
import { CONTACT_EMAIL, PRINCIPLES, SERVICES, STEPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI workflow reviews, automations, custom AI tools, AI search visibility, and website security for small businesses.",
  alternates: { canonical: "/services" },
};

const ask = (title: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Question about: ${title}`)}&body=${encodeURIComponent(
    "Hi,\n\nOur business: \nWhat we'd like help with: \n",
  )}`;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Five ways we help
            <Sq />
          </>
        }
        lead="Start with whichever fits. Most clients begin with the review and pick one thing to build from it."
      />

      <section className="block" style={{ paddingTop: 72 }}>
        <div className="wrap">
          {SERVICES.map((s) => (
            <article className="entry" id={s.slug} key={s.slug}>
              <div>
                <h2>{s.title}</h2>
                <p className="who">{s.forWho}</p>
              </div>
              <div>
                <p className="body">{s.body}</p>
                <h3>What you get</h3>
                <ul className="marks">
                  {s.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                {s.proof && (
                  <p className="note">
                    <b>Our own result:</b> {s.proof.text} {s.proof.date}.
                  </p>
                )}
                <div className="actions">
                  <a className="textlink" href={ask(s.title)}>
                    Ask about this →
                  </a>
                  {s.proof && (
                    <a className="textlink" href={s.proof.href} target="_blank" rel="noopener noreferrer">
                      {s.proof.cta} →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="block paper">
        <div className="wrap">
          <div className="head">
            <h2>How working with us goes</h2>
            <p>Small steps, so you see results before you commit to more.</p>
          </div>
          <ol className="steps">
            {STEPS.map(([title, body]) => (
              <li key={title}>
                <b>{title}</b>
                <span>{body}</span>
              </li>
            ))}
          </ol>
          <ul className="marks" style={{ marginTop: 56 }}>
            {PRINCIPLES.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
