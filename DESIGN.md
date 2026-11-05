# AIVantageWorks — Design System

Direction: **"Workshop notebook."** An AI studio that ships real things, not a slide deck.
Warm paper, ink-black type, one vermilion signal color. Editorial serif headlines for trust,
a clean sans for reading, mono labels for the "engineering" texture. Avoid the generic AI
look (purple gradients, glowing orbs, sparkle emoji).

## Color
| Token | Hex | Use |
|---|---|---|
| paper | `#f7f5f0` | page background |
| card | `#ffffff` | cards, diagram |
| ink | `#16161a` | text, dark sections |
| muted | `#5c5a55` | secondary text (6.4:1 on paper) |
| line | `#e2ddd2` | borders, dividers |
| signal | `#c2410c` | the one primary button per view, key highlights (white text 5.2:1) |
| signal-hover | `#9a3412` | |
| signal-tint | `#fbeee6` | small highlights, "live" pills |
| leaf | `#2f6b4f` | "Live" / success states |

Rule: signal is used sparingly — one primary CTA per screen, plus small accents.

## Typography
- Display / headings: **Newsreader** (serif), 500–600, tight tracking (-0.02em)
- Body: **Geist**, 16–18px, line-height 1.6
- Labels / eyebrows / step numbers: **Geist Mono**, 12–13px, uppercase, +0.08em tracking

Scale: h1 `clamp(2.75rem, 6vw, 4.75rem)`, h2 `clamp(2rem, 4vw, 3rem)`, h3 1.25rem.

## Layout & spacing
- Max width 1160px, 24px gutters (mobile 20px)
- 8px base; section padding 96px desktop / 64px mobile
- Radius: controls 8px, cards 14px
- Borders over shadows. One soft shadow only on the hero diagram.

## Components
- **Workflow diagram** (hero): steps as rows (trigger → AI step → human approval → output), mono labels, a vermilion "you approve" step. Shows the promise: AI does the busywork, people stay in control.
- **Product cards**: status pill (Live / Early access / Service), name, one-line, CTA link.
- **Buttons**: primary = signal fill; secondary = ink outline.

## Voice
Plain, specific, no hype. Never invent client results, logos, testimonials or metrics.
Say what we do and how; let the shipped products be the proof.

## Motion
Minimal: 150ms color/translate on hover. Respect `prefers-reduced-motion`.
