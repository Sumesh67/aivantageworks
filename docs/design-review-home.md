# Design Review: Home page services

Method: /plan-design-review (7 passes, applied manually, as in trip-agent/docs/design-review.md)
on 2026-11-19. Target: `src/app/page.tsx`. System: `DESIGN.md` ("control room"), kept as-is.
Trigger: "services are not highlighting on the home page."

## Step 0
Initial rating for the services section: **4/10.** Five identical `text-sm` cards on a pale
surface, about 240px wide each at desktop, with the same weight as the ideas and process
sections. No service was visible in the first screen.

## Decisions
| ID | Pass | Decision |
|---|---|---|
| H1 | 1 Info arch | Hero secondary button → "Explore our services" (was Products). Hero lead names the full range (automation, security, AI search). |
| H2 | 1 Info arch | "What we do" index of all five services in the hero, each deep-linking to its panel (`/#service-<slug>`). |
| H3 | 4 Template look | Replace the identical card row with a **service explorer**: numbered list (tabs) + one large panel. One visual anchor instead of five equal cards. |
| H4 | 3 Journey | Each panel shows the brand loop: who it's for → what you get → an **example run** with the amber "YOU" approval step. |
| H5 | 2 States | All panels server-rendered; inactive ones `hidden`. No-JS and crawlers get every service. Default state = first service. |
| H6 | 6 Mobile + a11y | Below `lg`, the list becomes a scrollable pill row (44px touch targets). WAI-ARIA tabs: arrow keys, Home/End, roving tabindex, `aria-controls`. |
| H8 | 1 Info arch | (Follow-up: "highlight the services") Hero text index → **service strip**: 5 icon tiles at the bottom of the dark hero. h1 max 5.5 → 4.75rem and tighter hero spacing so the strip sits in the first screen at 1440×900. On phones the hero agent log is hidden so the strip comes right after the buttons. DESIGN.md updated. |
| H7 | 5 Design system | No new tokens. Lime only as the active rail and text-ink; one lime button per view kept (panel uses text links). Amber only on the "YOU" step. |

## Pass scores (services on home)
| Pass | Before → After |
|---|---|
| 1 Info architecture | 4 → 8 |
| 2 Interaction states | 5 → 8 |
| 3 Journey | 4 → 8 |
| 4 Template look | 3 → 8 |
| 5 Design system | 8 → 8 |
| 6 Mobile + a11y | 6 → 8 |
| 7 Open decisions | see below |

## Verification
- `tsc`, `eslint`, `next build` pass.
- Headless Chrome screenshots at 1440px and 500px reviewed.
- Deep link `/#service-website-security` selects the right panel (checked via the DOM).
- Not yet done: a real-device check at 390px. Headless Chrome can't go below about 500px.

## Example runs are illustrative
Example runs describe the shape of the work, not client results. They contain no invented metrics (DESIGN.md: "Never invent client results").

## Open decisions
- The process section is still a 4-column numbered grid (a template pattern). Leave it, or merge it into the explorer's example runs?

## NOT in scope
The /services page, products, about, contact. Mockups (no mockup tool installed).
