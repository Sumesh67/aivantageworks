import type { Metadata } from "next";
import { ClosingBand, PageHero, Sq } from "@/components/ui";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI products built and run by AIVantageWorks: Site Shield, Trip Agent, InviteBeam, CreateAndColor, Interesting Places and Facts, and our AEO audit tool.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Things we&apos;ve built
            <Sq />
          </>
        }
        lead="Every product here was designed, built and run by our studio. It's the same work we bring to your business."
      />
      <section className="block" style={{ paddingTop: 72 }}>
        <div className="wrap">
          {PRODUCTS.map((p) => {
            const external = p.href.startsWith("http");
            return (
              <article className="entry" key={p.name}>
                <div>
                  <h2>{p.name}</h2>
                  <p className="who">
                    {p.kind} · {p.status}
                  </p>
                </div>
                <div>
                  <p className="body">{p.body}</p>
                  <div className="actions">
                    <a
                      className="textlink"
                      href={p.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {p.cta} →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <ClosingBand />
    </>
  );
}
