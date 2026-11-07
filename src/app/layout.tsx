import type { Metadata } from "next";
import { Geist, Geist_Mono, Schibsted_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const display = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  weight: ["600", "700"],
});

const title = "AIVantageWorks — AI automation & workflows for businesses";

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
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
