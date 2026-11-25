import type { Metadata } from "next";
import { ClosingBand, PageHero, Sq } from "@/components/ui";
import { PRINCIPLES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AIVantageWorks is a small AI studio that builds its own AI products and helps businesses put AI to work in their daily operations.",
  alternates: { canonical: "/about" },
};

const BELIEFS: [string, string][] = [
  [
    "Builders, not slide-makers.",
    "We ship AI products of our own: agents, apps and media pipelines. The advice we give comes from what has actually worked in production.",
  ],
  ["Small and direct.", "You work with the people who build your system, not an account manager. Fewer meetings, faster answers."],
  [
    "Boring wins first.",
    "The best first project is usually an unglamorous task that eats hours every week. We start there, prove it, then grow.",
  ],
  [
    "A person stays in charge.",
    "AI is great at reading, sorting, drafting and summarising. It shouldn't be making promises to your customers on its own.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            A small AI studio that builds real things
            <Sq />
          </>
        }
        lead="AIVantageWorks started as a place to build our own AI products. Now we help businesses use the same tools and know-how in their day-to-day work."
      />

      <section className="block">
        <div className="wrap">
          <p className="big">
            AI does the work. People stay in charge
            <Sq />
            <span> Every system we build keeps a person in the loop where it counts.</span>
          </p>
          <ul className="beliefs">
            {BELIEFS.map(([title, body]) => (
              <li key={title}>
                <b>{title}</b>
                <span>{body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block paper">
        <div className="wrap">
          <div className="head">
            <h2>Ground rules we build by</h2>
            <p>The same four rules apply to every project, large or small.</p>
          </div>
          <ul className="marks">
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
