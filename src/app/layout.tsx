import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const title = "AIVantageWorks — AI automation & workflows for small businesses";
const description =
  "AIVantageWorks is an AI studio. We help businesses find the busywork AI can take off their plate, then build the automations, agents and workflows to do it — with people approving what matters. We also build our own AI products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aivantageworks.com"),
  title,
  description,
  keywords: [
    "AI automation consulting",
    "AI workflow automation",
    "AI agents for small business",
    "AI consultant",
    "answer engine optimization",
    "AEO audit",
    "AIVantageWorks",
  ],
  openGraph: {
    title,
    description,
    url: "https://aivantageworks.com",
    siteName: "AIVantageWorks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
