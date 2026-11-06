export const SITE = {
  url: "https://www.aivantageworks.com",
  description:
    "AIVantageWorks is an AI studio. We help businesses find the busywork AI can take off their plate, then build the automations, agents and workflows to do it — with people approving what matters. We also build our own AI products.",
};

export const CONTACT_EMAIL = "support@aivantageworks.com";

export const REVIEW_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Free AI workflow review",
)}&body=${encodeURIComponent(
  "Hi,\n\nOur business: \nThe task that eats the most time each week: \nTools we use today: \n",
)}`;

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  body: string;
  points: string[];
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "workflow-review",
    tag: "Consult",
    title: "AI workflow review",
    summary: "Find where AI saves real hours in your business.",
    body: "We sit with you and your team, map how work actually moves, and find the tasks where AI saves real hours. You get a short, plain-English plan ranked by effort and payback — useful even if you never hire us to build it.",
    points: ["Process mapping", "Tool & data check", "Prioritised roadmap"],
    deliverables: [
      "A map of your key workflows and where time goes",
      "A ranked list of automation opportunities",
      "Recommended tools — starting with what you already pay for",
    ],
  },
  {
    slug: "automations",
    tag: "Build",
    title: "Automations & integrations",
    summary: "Connect your tools and let AI handle the in-between work.",
    body: "We connect the tools you already use — email, forms, spreadsheets, CRM, calendar — and add AI where it helps: sorting, drafting, extracting, summarising. Your team keeps working the way they do; the busywork just disappears.",
    points: ["Lead intake & follow-up", "Inbox triage", "Docs → data"],
    deliverables: [
      "Working automations on your own accounts",
      "Approval steps wherever a customer or money is involved",
      "Simple docs so your team can adjust them",
    ],
  },
  {
    slug: "agents",
    tag: "Build",
    title: "Custom AI agents & tools",
    summary: "Focused AI tools built around how your business works.",
    body: "When off-the-shelf doesn't fit, we build small, focused AI tools and agents for your business — internal assistants, customer-facing helpers, approval flows — with a human check wherever the stakes are real.",
    points: ["Internal assistants", "Customer-facing helpers", "Approval flows"],
    deliverables: [
      "A custom agent or tool, deployed and tested on real work",
      "Guardrails: what it can and can't do, written down",
      "Handover and training for your team",
    ],
  },
  {
    slug: "ai-search-visibility",
    tag: "Grow",
    title: "AI search visibility audit",
    summary: "See what ChatGPT and other assistants say about you.",
    body: "Customers now ask ChatGPT and other AI assistants who to call. We check what those answers say about your business, document the evidence side by side, and fix what's wrong or missing. No ranking promises — just a clear record and a fix list.",
    points: ["Evidence-based report", "Fix list", "No ranking promises"],
    deliverables: [
      "Recorded AI answers for questions your customers actually ask",
      "Your business facts checked against what's published online",
      "A prioritised fix list",
    ],
  },
];

export const IDEAS: [string, string][] = [
  ["New lead arrives", "AI qualifies it, drafts a reply, books a call"],
  ["Customer emails pile up", "Sorted by urgency, answers drafted for review"],
  ["Invoices & PDFs", "Key fields pulled straight into your sheet or system"],
  ["Monday reporting", "Numbers gathered and summarised automatically"],
  ["Same questions, every day", "An assistant trained on your own FAQs and policies"],
  ["Reviews & social posts", "Responses and content drafted in your voice"],
];

export const STEPS: [string, string][] = [
  ["Map", "A free call, then a working session to see how your team really spends its week."],
  ["Pick", "Choose one workflow with a clear payback. Small first, so you see results fast."],
  ["Build", "We build it on your tools, test it on real work, and keep you in the loop."],
  ["Hand over", "Docs, training, and a simple way to adjust it. You own it — no lock-in."],
];

export const PRINCIPLES = [
  "A person approves anything that goes to a customer or moves money.",
  "We use the tools you already pay for before suggesting new ones.",
  "Honest numbers: we measure time saved, not vanity metrics.",
  "Your data stays yours. We tell you exactly where it goes.",
];

export type ProductStatus = "Live" | "Early access" | "Service";
export type Product = {
  name: string;
  status: ProductStatus;
  kind: string;
  body: string;
  href: string;
  cta: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "AEO Audit",
    status: "Service",
    kind: "AI search visibility",
    body: "Our in-house audit tool for local businesses: records what AI assistants say about a business, side by side with the evidence, and turns it into a clear fix list.",
    href: "/services#ai-search-visibility",
    cta: "About the audit",
  },
  {
    name: "Trip Agent",
    status: "Early access",
    kind: "AI agent",
    body: "Describe a trip in one sentence. The agent finds real flights and hotels, builds a plan around who's travelling, and books only after you approve.",
    href: "https://trip.aivantageworks.com/",
    cta: "Join early access",
  },
  {
    name: "InviteBeam",
    status: "Live",
    kind: "Web app",
    body: "Animated digital invitations with one-click RSVPs and a live guest dashboard. Free for small events, $5 for big ones.",
    href: "https://www.invitebeam.com/",
    cta: "invitebeam.com",
  },
  {
    name: "CreateAndColor",
    status: "Live",
    kind: "Web + iOS",
    body: "Turns a kid's idea into a printable coloring page in under a minute. Storybooks, party coloring books, and free teacher worksheets.",
    href: "https://createandcolor.aivantageworks.com/",
    cta: "Try it free",
  },
  {
    name: "Interesting Places and Facts",
    status: "Live",
    kind: "AI media",
    body: "A new short film every day about a remarkable, lesser-known place in India — with coordinates and the one fact that makes it special.",
    href: "https://dailyfacts.aivantageworks.com/",
    cta: "Watch today's place",
  },
];
