import Link from "next/link";
import { ClosingBand, Cta, Sq } from "@/components/ui";
import { PRODUCTS, SERVICES } from "@/lib/site";

const BELIEFS: [string, string][] = [
  ["Builders, not slide-makers.", "We run AI products of our own, so our advice comes from what has worked in practice."],
  ["Small and direct.", "You work with the people who build your system, not an account manager."],
  ["Boring wins first.", "The best first project is usually an unglamorous task that eats hours every week."],
  ["A person stays in charge.", "AI shouldn't make promises to your customers on its own. Someone approves what matters."],
];

export default function Home() {
  const ownProducts = PRODUCTS.filter((p) => p.href.startsWith("http"));
  return (
    <>
      <section className="poster">
        <div className="wrap">
          <h1>
            Practical AI for small businesses
            <Sq />
          </h1>
          <p className="cont">
            We&apos;re a small studio. <b>We find the work that eats your week</b> and set up AI to take it off your plate.
          </p>
          <Cta href="/contact">Book a free call</Cta>
          <div className="proof">
            <span>Things we&apos;ve built:</span>
            {ownProducts.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="head">
            <h2>What we do</h2>
            <p>Five ways to start. Most clients begin with the review and pick one thing to build from it.</p>
          </div>
          <ul className="index">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`}>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block ruled">
        <div className="wrap casegrid">
          <div>
            <h2 className="h2">
              Proof, starting with our own website
              <Sq />
            </h2>
            <p className="lede">
              Before offering website security checks, we ran one on ourselves. It scored a C: browsers weren&apos;t given
              basic protection rules, and fake emails could be sent in our name.
            </p>
            <ul className="marks">
              <li>Added the missing browser protections in one change</li>
              <li>Turned on email spoofing protection</li>
              <li>Published a private way to report security problems</li>
            </ul>
            <a className="textlink" href="https://shield.aivantageworks.com/" target="_blank" rel="noopener noreferrer">
              Run the same check on your site →
            </a>
          </div>
          <figure className="scores" aria-label="Score went from C, 76 out of 100, to A, 98 out of 100">
            <div className="score before">
              <b>C</b>
              <span>76 / 100</span>
              <small>Before</small>
            </div>
            <div className="arrowline" aria-hidden="true" />
            <div className="score after">
              <b>A</b>
              <span>98 / 100</span>
              <small>After</small>
            </div>
            <figcaption>aivantageworks.com · checked with Site Shield · 23 Nov 2026</figcaption>
          </figure>
        </div>
      </section>

      <section className="block paper">
        <div className="wrap">
          <p className="big">
            We start small
            <Sq />
            <span>
              {" "}
              One conversation, one task, and one fix you can see working, built on the tools you already use. Then we hand
              it over, and you own it.
            </span>
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

      <section className="block">
        <div className="wrap">
          <div className="head">
            <h2>Our own products</h2>
            <p>We build and run these ourselves, so we know what it takes to make AI useful day to day.</p>
          </div>
          <table className="products">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">What it does</th>
                <th scope="col">Status</th>
                <th scope="col">
                  <span className="sr-only">Link</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ownProducts.map((p) => (
                <tr key={p.name}>
                  <td className="name">{p.name}</td>
                  <td className="desc">{p.short}</td>
                  <td className="status">{p.status}</td>
                  <td className="link">
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {p.cta} →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
