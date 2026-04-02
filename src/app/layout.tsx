import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIVantageWorks — AI Apps for Real Life",
  description:
    "AIVantageWorks is a solo AI app studio building simple, free, genuinely useful tools. Home of StackStreak (savings & streaks) and CreateNColor (AI coloring pages for kids).",
  keywords: [
    "AI apps",
    "StackStreak",
    "CreateNColor",
    "savings app",
    "coloring page generator",
    "free AI tools",
    "AIVantageWorks",
  ],
  openGraph: {
    title: "AIVantageWorks — AI Apps for Real Life",
    description:
      "Free AI-powered tools that solve real problems. StackStreak for savings streaks, CreateNColor for kids' coloring pages.",
    url: "https://aivantageworks.com",
    siteName: "AIVantageWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVantageWorks — AI Apps for Real Life",
    description:
      "Free AI-powered tools that solve real problems. StackStreak + CreateNColor.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
