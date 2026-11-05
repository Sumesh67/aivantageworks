import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

const CONTACT_EMAIL = "sumesh.pawar007@gmail.com";
const BOOK_CALL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Free AI workflow review",
)}&body=${encodeURIComponent(
  "Hi Sumesh,\n\nOur business: \nThe task that eats the most time each week: \nTools we use today: \n",
)}`;

const services = [
  {
    tag: "01 · Consult",
    title: "AI workflow review",
    body: "We sit with you and your team, map how work actually moves, and find the tasks where AI saves real hours. You get a short, plain-English plan ranked by effort and payback.",
    points: ["Process mapping", "Tool & data check", "Prioritised roadmap"],
  },
  {
    tag: "02 · Build",
    title: "Automations & integrations",
    body: "We connect the tools you already use — email, forms, spreadsheets, CRM, calendar — and add AI where it helps: sorting, drafting, extracting, summarising.",
    points: ["Lead intake & follow-up", "Inbox triage", "Docs → data"],
  },
  {
    tag: "03 · Build",
    title: "Custom AI agents & tools",
    body: "When off-the-shelf doesn't fit, we build small, focused AI tools and agents for your business — with a human approval step wherever the stakes are real.",
    points: ["Internal assistants", "Customer-facing helpers", "Approval flows"],
  },
  {
    tag: "04 · Grow",
    title: "AI search visibility audit",
    body: "Customers now ask ChatGPT and other AI assistants who to call. We check what those answers say about your business, document the evidence, and fix what's wrong or missing.",
    points: ["Evidence-based report", "Fix list", "No ranking promises"],
  },
];

const ideas = [
  ["New lead arrives", "AI qualifies it, drafts a reply, books a call"],
  ["Customer emails pile up", "Sorted by urgency, answers drafted for review"],
  ["Invoices & PDFs", "Key fields pulled straight into your sheet or system"],
  ["Monday reporting", "Numbers gathered and summarised automatically"],
  ["Same questions, every day", "An assistant trained on your own FAQs and policies"],
  ["Reviews & social posts", "Responses and content drafted in your voice"],
];

const steps = [
  ["Map", "A free call, then a working session to see how your team really spends its week."],
  ["Pick", "Choose one workflow with a clear payback. Small first, so you see results fast."],
  ["Build", "We build it on your tools, test it on real work, and keep you in the loop."],
  ["Hand over", "Docs, training, and a simple way to adjust it. You own it — no lock-in."],
];

const principles = [
  "A person approves anything that goes to a customer or moves money.",
  "We use the tools you already pay for before suggesting new ones.",
  "Honest numbers: we measure time saved, not vanity metrics.",
  "Your data stays yours. We tell you exactly where it goes.",
];

type Status = "Live" | "Early access" | "Service";
const products: {
  name: string;
  status: Status;
  kind: string;
  body: string;
  href?: string;
  cta?: string;
}[] = [
  {
    name: "AEO Audit",
    status: "Service",
    kind: "AI search visibility",
    body: "Our in-house audit tool for local businesses: records what AI assistants say about a business, side by side with the evidence, and turns it into a clear fix list.",
    href: BOOK_CALL,
    cta: "Ask about an audit",
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

const statusStyle: Record<Status, string> = {
  Live: "bg-leaf-tint text-leaf",
  "Early access": "bg-signal-tint text-signal-hover",
  Service: "bg-ink text-paper",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">{children}</p>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3 font-medium text-white transition-colors hover:bg-signal-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
    >
      {children}
    </a>
  );
}

function WorkflowDiagram() {
  const rows = [
    { label: "Trigger", text: "New enquiry from website form", tone: "plain" },
    { label: "AI", text: "Reads it, checks your calendar & price list", tone: "plain" },
    { label: "AI", text: "Drafts a reply with a quote and 3 time slots", tone: "plain" },
    { label: "You", text: "Approve or tweak — one tap", tone: "signal" },
    { label: "Done", text: "Reply sent · CRM updated · follow-up set", tone: "leaf" },
  ] as const;
  return (
    <figure
      aria-label="Example AI workflow: a website enquiry is read and drafted by AI, approved by a person, then sent"
      className="rounded-[14px] border border-line bg-card p-5 shadow-[0_20px_50px_-24px_rgba(22,22,26,0.25)] sm:p-6"
    >
      <figcaption className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-[0.08em] text-muted">
        <span>
          workflow<span className="hidden sm:inline"> / enquiry-to-booking</span>
        </span>
        <span className="flex items-center gap-1.5 text-leaf">
          <span className="size-1.5 rounded-full bg-leaf" aria-hidden /> running
        </span>
      </figcaption>
      <ol className="relative space-y-3">
        <span aria-hidden className="absolute top-4 bottom-4 left-[2.1rem] w-px bg-line" />
        {rows.map((r, i) => (
          <li key={i} className="relative flex items-center gap-3">
            <span
              className={`z-10 w-[4.2rem] shrink-0 rounded-md border px-2 py-1 text-center font-mono text-[11px] uppercase tracking-wider ${
                r.tone === "signal"
                  ? "border-signal bg-signal text-white"
                  : r.tone === "leaf"
                    ? "border-leaf bg-leaf-tint text-leaf"
                    : "border-line bg-paper text-muted"
              }`}
            >
              {r.label}
            </span>
            <span
              className={`flex-1 rounded-md border px-3 py-2.5 text-sm ${
                r.tone === "signal" ? "border-signal/40 bg-signal-tint" : "border-line"
              }`}
            >
              {r.text}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-4 border-t border-line pt-3 text-xs text-muted">
        Example of a typical first build. AI does the busywork; a person stays in control.
      </p>
    </figure>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a href="#top" className="font-serif text-xl font-semibold tracking-tight">
            AIVantage<span className="text-signal">Works</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a href="#services" className="hover:text-ink">Services</a>
            <a href="#process" className="hover:text-ink">How we work</a>
            <a href="#products" className="hover:text-ink">Products</a>
            <a href="#about" className="hover:text-ink">About</a>
          </div>
          <a
            href={BOOK_CALL}
            className="rounded-lg border border-ink px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            Book a call
          </a>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto grid max-w-[1160px] items-center gap-12 px-5 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-24 lg:pb-28">
          <div>
            <Eyebrow>AI automation studio · Chicago</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.02] font-medium tracking-[-0.02em]">
              Put AI to work in your business,{" "}
              <em className="text-signal">not in a slide deck.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We find the repetitive work slowing your team down, then build the
              automations, agents and workflows that handle it — with people approving
              what matters. We ship our own AI products too, so we build what actually
              works.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href={BOOK_CALL}>
                Get a free workflow review <ArrowRight className="size-4" aria-hidden />
              </PrimaryButton>
              <a href="#products" className="inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline">
                See what we&apos;ve built
              </a>
            </div>
          </div>
          <WorkflowDiagram />
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-6 lg:py-24">
            <div className="max-w-2xl">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-medium tracking-[-0.02em]">
                From &ldquo;we should use AI&rdquo; to a workflow your team uses every day.
              </h2>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2">
              {services.map((s) => (
                <article key={s.title} className="flex flex-col bg-card p-7 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.08em] text-signal">{s.tag}</p>
                  <h3 className="mt-3 font-serif text-2xl font-medium">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="rounded-md border border-line px-2.5 py-1 text-sm">
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IDEAS */}
        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-6 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-paper/60">
                  Common starting points
                </p>
                <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-medium tracking-[-0.02em]">
                  The work nobody hired you to do.
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-paper/75">
                  Most businesses don&apos;t need a big &ldquo;AI transformation.&rdquo; They need
                  three or four boring tasks to quietly take care of themselves.
                </p>
              </div>
              <ul className="divide-y divide-paper/15 border-y border-paper/15">
                {ideas.map(([before, after]) => (
                  <li key={before} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto_1.4fr] sm:items-center sm:gap-4">
                    <span className="font-medium">{before}</span>
                    <ArrowRight className="hidden size-4 text-signal sm:block" aria-hidden />
                    <span className="text-paper/75">{after}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="scroll-mt-20">
          <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-6 lg:py-24">
            <div className="max-w-2xl">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-medium tracking-[-0.02em]">
                Start small. Prove it. Then grow.
              </h2>
            </div>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([title, body], i) => (
                <li key={title} className="border-t-2 border-ink pt-5">
                  <p className="font-mono text-sm text-signal">0{i + 1}</p>
                  <h3 className="mt-2 font-serif text-2xl font-medium">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-14 rounded-[14px] border border-line bg-card p-7 sm:p-8">
              <h3 className="font-serif text-xl font-medium">Ground rules we build by</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {principles.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-muted">
                    <Check className="mt-1 size-4 shrink-0 text-leaf" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-6 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <Eyebrow>Built by AIVantageWorks</Eyebrow>
                <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-medium tracking-[-0.02em]">
                  We don&apos;t just advise on AI. We ship it.
                </h2>
              </div>
              <p className="max-w-sm text-muted">
                Every product here was designed, built and run by us — the same skills we
                bring to your business.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <article
                  key={p.name}
                  className="flex flex-col rounded-[14px] border border-line bg-card p-6 transition-colors hover:border-ink/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                      {p.kind}
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle[p.status]}`}>
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-medium">{p.name}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{p.body}</p>
                  {p.href ? (
                    <a
                      href={p.href}
                      {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="mt-5 inline-flex items-center gap-1 font-medium text-signal hover:text-signal-hover"
                    >
                      {p.cta} <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  ) : (
                    <p className="mt-5 text-sm text-muted">Launching soon</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 border-t border-line bg-card">
          <div className="mx-auto grid max-w-[1160px] gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-16 lg:py-24">
            <div
              aria-hidden
              className="flex size-24 items-center justify-center rounded-full bg-ink font-serif text-3xl text-paper"
            >
              SP
            </div>
            <div className="max-w-2xl">
              <Eyebrow>Who you&apos;ll work with</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-medium tracking-[-0.02em]">
                Hi, I&apos;m Sumesh.
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  I build AI products end to end — agents, apps, and content pipelines —
                  and AIVantageWorks is where that work lives. Now I help businesses do
                  the same thing for their own day-to-day work.
                </p>
                <p>
                  You talk to the person who builds your system, not an account manager.
                  No jargon, no six-month roadmap: we pick one thing, make it work, and go
                  from there.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-[1160px] px-5 py-20 text-center sm:px-6 lg:py-24">
            <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-tight font-medium tracking-[-0.02em]">
              Tell us the one task your team dreads every week.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-paper/75">
              We&apos;ll come back with how we&apos;d automate it — free, no obligation.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton href={BOOK_CALL}>
                Get a free workflow review <ArrowRight className="size-4" aria-hidden />
              </PrimaryButton>
            </div>
            <p className="mt-4 text-sm text-paper/60">
              or email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 hover:text-paper">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:px-6">
          <p>© {new Date().getFullYear()} AIVantageWorks · Chicago</p>
          <div className="flex flex-wrap gap-5">
            <a href="https://trip.aivantageworks.com/" className="hover:text-ink">Trip Agent</a>
            <a href="https://www.invitebeam.com/" className="hover:text-ink">InviteBeam</a>
            <a href="https://createandcolor.aivantageworks.com/" className="hover:text-ink">CreateAndColor</a>
            <a href="https://dailyfacts.aivantageworks.com/" className="hover:text-ink">Interesting Places</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
