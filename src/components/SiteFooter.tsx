import Link from "next/link";
import { CONTACT_EMAIL, PRODUCTS, SERVICES } from "@/lib/site";

export function SiteFooter() {
  const products = PRODUCTS.filter((p) => p.href.startsWith("http"));
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <Link href="/" className="logo">
              <i aria-hidden="true" />
              AIVantageWorks
            </Link>
            <p>A small AI studio. We build our own AI products and help small businesses put the same tools to work.</p>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Products</h2>
            <ul>
              {products.map((p) => (
                <li key={p.name}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <Link href="/contact">Book a free call</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <a href="/.well-known/security.txt">Report a security issue</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">© {new Date().getFullYear()} AIVantageWorks</div>
      </div>
    </footer>
  );
}
