# AIVantageWorks — Design System

**Direction: "A confident page from a small studio."** Big, honest sentences on one deep
colour, set in one strong typeface, with room to breathe. The writing is the design.
Replaced the earlier "control room" direction on 2026-11-25 (owner: it felt robotic).
Method: gstack design-consultation (research → one thing → proposal → preview → review).
Preview of record: `docs/design-preview.html`.

## The one thing
**Real people, practical help.** Every page should read like a small team talking to a
business owner, not a machine or an agency deck.

## Research (2026-11-25)
thoughtbot, 37signals, Linear, IDEO. Without photos (owner's choice), the professional
sites that work (37signals, Linear) win on conviction: large confident type, one colour,
space, no decoration. Our departures: (1) no hero image, the sentence is the hero;
(2) services and products as editorial indexes, not cards.

## Colour (light pages, navy bookends)
| Token | Value | Use |
|---|---|---|
| navy | `#0e1a33` | header, home poster, page title bands, score card, closing band |
| navy-soft / navy-dim | `#9aa8c2` / `#7f8ca6` | text on navy (7.2:1 / 5.1:1) |
| white / paper | `#ffffff` / `#f7f7f5` | page / alternating sections |
| ink | `#0e1a33` | text, strong rules |
| muted / soft | `#4f5a6e` / `#6b7486` | secondary text (6.5:1) / labels (4.7:1) |
| line | `#e3e4e6` | hairlines |
| signal | `#ff6a3d` | **fill or mark only**: main button, the square, bullets, status dots |
| signal-ink | `#c2410c` | orange as text on light: links, hover (5.2:1) |
No green, no lime, no gradients, no pastel blocks. All pairs checked ≥ 4.5:1.

## Type
- **Schibsted Grotesk** 500–700: headlines, tight tracking (-0.03 to -0.04em). Shared with Site Shield.
- **Source Sans 3** 400/600: body, 18px / 1.6.
- No monospace labels, no uppercase kickers, no "01 /" numbering.
Scale: poster h1 `clamp(3rem, 7vw, 5.6rem)`; page h1 `clamp(2.5rem, 5.4vw, 4.4rem)`;
section h2 `clamp(2.1rem, 4vw, 3.2rem)`; statement `clamp(1.8rem, 3.4vw, 2.9rem)`, two-tone.

## Signature
The logo's **orange square** ends key headlines in place of a full stop (screen readers
get a real full stop), and marks list items and statuses. Use it sparingly: one per heading.

## Layout
- Max width 1180px; gutters 20px mobile / 40px desktop; sections 112px (80px mobile).
- Rhythm: navy poster → white index → white case study → paper statement → white table → navy close.
- Shapes: buttons 6px radius, score card 8px. **No cards, no rounded bands, no shadows.**
  Structure comes from hairlines (strong ink rule at the top of each list).
- One primary (orange) action per view; secondary actions are underlined text links.

## Components (src/components/ui.tsx, globals.css)
Poster · PageHero (navy title band) · services index · case study with score card ·
two-tone statement + beliefs · products table · `.entry` long-form rows · `.marks` lists ·
ClosingBand · four-column footer.

## Voice
Plain sentences from "we" to "you". No hype words, no fragments. Only real, dated proof
(e.g. our own site C 76 → A 98, 23 Nov 2026). Never invent client results, durations or
promises.

## Never
Terminal/agent-log visuals · monospace kickers · numbered labels · neon on black ·
pastel colour blocks · pill buttons · speech-bubble decoration · card grids · icons in
circles · gradients · stock imagery · invented testimonials or metrics.
