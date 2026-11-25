import type { Metadata } from "next";
import { Schibsted_Grotesk, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body", weight: ["400", "600"] });

const title = "AIVantageWorks — practical AI for small businesses";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: "%s · AIVantageWorks" },
  description: SITE.description,
  keywords: [
    "AI automation consulting",
    "AI workflow automation",
    "AI agents for business",
    "AI consultant",
    "answer engine optimization",
    "AEO audit",
    "AIVantageWorks",
  ],
  openGraph: {
    title,
    description: SITE.description,
    url: SITE.url,
    siteName: "AIVantageWorks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description: SITE.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
