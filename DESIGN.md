# AIVantageWorks — Design System

**Direction: "Control room."** An AI engineering studio. Precise, quietly alive, with dark "control room" bookends around bright, readable pages:
agents visibly working, a human visibly in control. Feels like the tools engineers trust
(terminal, logs, status lights), explained in plain language for business owners.

**The one thing to remember:** *AI does the work; you approve what matters.*
Every page shows that loop somewhere (agent log, approval step, ground rules).

Avoid: purple/blue gradients, glowing orbs, sparkle emoji, stock robots, fake dashboards
with invented numbers, client logos or testimonials we don't have.

## Color — light pages, dark bookends
Pages are light. The header, each page's hero, and the closing CTA band use the
`.theme-dark` class, which re-scopes the same tokens to dark values (globals.css).

| Token | Light | Dark (`.theme-dark`) | Use |
|---|---|---|---|
| bg | `#ffffff` | `#0a0b0d` | background |
| surface | `#f5f6f7` | `#111317` | cards, alternating sections |
| raised | `#eceef1` | `#181b20` | hover |
| line | `#e2e5e9` | `#24282f` | borders |
| text | `#0e1013` | `#f2f3f5` | primary text |
| muted | `#4b5260` | `#9aa1ac` | secondary text |
| faint | `#6b7280` | `#7d8590` | labels, captions |
| signal | `#c6f432` | same | lime fill: primary buttons, dots |
| signal-ink | `#4d7c0f` | `#c6f432` | lime used as text/icons (readable on each) |
| on-signal | `#0a0b0d` | same | text on lime buttons |
| amber-ink | `#b45309` | `#f5b544` | "waiting for you" / human-approval state |

Rules: one lime button per view. Never put `signal` (bright lime) as text on light
backgrounds — use `signal-ink`. Amber only means "a person decides here".

## Typography
- Display / headings: **Schibsted Grotesk** 600–700, tracking -0.03em
- Body / UI: **Geist** 400–500, 16–18px, line-height 1.6
- Mono (labels, logs, step numbers, status): **Geist Mono**, 12–13px, uppercase labels +0.08em

Scale: h1 `clamp(2.75rem, 7vw, 5.5rem)` line-height 0.98; page h1 `clamp(2.5rem, 5vw, 4rem)`;
h2 `clamp(2rem, 4vw, 3rem)`; h3 1.25–1.5rem.

## Layout & spacing
- Max width 1200px; gutters 20px mobile / 24px desktop
- Sections 96px desktop / 64px mobile, separated by 1px `line` borders
- Radius: controls 8px, cards 12px
- Faint 64px grid texture behind heroes only (≤4% opacity), masked to fade out
- No drop shadows; depth comes from surface steps and borders. One lime glow allowed
  behind the hero agent log.

## Components
- **Agent log** (home hero): mono terminal panel that types out a workflow
  (read → draft → *waiting for your approval* → sent). Static for reduced motion.
- **Page header**: mono eyebrow, big grotesk h1, one-paragraph lead.
- **Cards**: surface bg, line border, hover → raised + lighter border.
- **Status pills**: Live (lime), Early access (amber), Service (outline).
- **CTA band**: closes every page — "Tell us the one task your team dreads."
- **Buttons**: primary = lime fill, black text; secondary = line outline, text color.

## Pages
`/` overview · `/services` · `/products` · `/about` · `/contact`. Shared header + footer.
No personal names on the site; the studio speaks as "we".

## Voice
Plain, specific, no hype. Never invent client results or metrics.

## Motion
Agent log typing + blinking cursor; 150ms hover transitions. All motion off under
`prefers-reduced-motion`.
