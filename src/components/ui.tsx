import Link from "next/link";

/** The logo's orange square, used as a full stop. Screen readers get a real one. */
export function Sq() {
  return (
    <>
      <span className="sq" aria-hidden="true" />
      <span className="sr-only">.</span>
    </>
  );
}

export function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  const inner = (
    <>
      {children} <span aria-hidden="true">→</span>
    </>
  );
  return href.startsWith("/") ? (
    <Link className="cta" href={href}>
      {inner}
    </Link>
  ) : (
    <a className="cta" href={href}>
      {inner}
    </a>
  );
}

/** Navy title band that opens every inner page. */
export function PageHero({ title, lead }: { title: React.ReactNode; lead?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </section>
  );
}

/** Closes every page. */
export function ClosingBand() {
  return (
    <section className="closing">
      <div className="wrap">
        <h2>Tell us the one task your team dreads.</h2>
        <p>We&apos;ll come back with how we&apos;d take it off your plate. Free, and no obligation.</p>
        <Cta href="/contact">Book a free call</Cta>
      </div>
    </section>
  );
}
