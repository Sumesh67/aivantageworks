import type { Metadata } from "next";
import { CtaBand, Container, PageHeader, ProductCard } from "@/components/ui";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI products built by AIVantageWorks: AEO Audit, Trip Agent, InviteBeam, CreateAndColor, and Interesting Places and Facts.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="We don't just advise on AI. We ship it."
        lead="Every product here was designed, built and run by our studio — agents, apps and AI media. It's the same work we bring to your business."
      />
      <Container className="py-16 lg:py-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
