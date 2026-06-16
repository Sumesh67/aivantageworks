import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIVantageWorks — AI Apps for Real Life",
  description:
    "AIVantageWorks is a solo AI app studio building simple, free, genuinely useful tools. Home of StackStreak (savings & streaks), CreateNColor (AI coloring pages for kids), and Inviteable (beautiful digital invitations).",
  keywords: [
    "AI apps",
    "StackStreak",
    "CreateNColor",
    "Inviteable",
    "savings app",
    "coloring page generator",
    "digital invitations",
    "free AI tools",
    "AIVantageWorks",
  ],
  openGraph: {
    title: "AIVantageWorks — AI Apps for Real Life",
    description:
      "Free AI-powered tools that solve real problems. StackStreak for savings streaks, CreateNColor for kids' coloring pages, Inviteable for beautiful digital invitations.",
    url: "https://aivantageworks.com",
    siteName: "AIVantageWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVantageWorks — AI Apps for Real Life",
    description:
      "Free AI-powered tools that solve real problems. StackStreak + CreateNColor + Inviteable.",
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
