# Flow Library — the lifecycle emails Aria ships

> The actual substance of what YoboLabs delivers. These are the **reusable, on-brand flow
> templates** Aria builds and ships to Klaviyo — the source of the revenue that backs the 3×
> guarantee, the "ship 1 flow" of every trial, and the gaps the Growth Audit measures.
> **Voice:** Aria (`os/company/brand-voice.md`). **Tie:** ICP wedge flows (`os/company/icp.md`).

## How to use this library
- Each flow file = trigger, timing, email-by-email copy (subject variants + body), category
  adaptations, and what to A/B test + log.
- **Copy is a starting template, not a finished send.** Aria personalizes from the brand's store
  data + brand DNA; the merchant approves every send.
- **Plain-text-friendly** — renders the same on web/email and (later) WhatsApp/SMS.
- **No fabricated results.** Any number in copy is the merchant's real data or `[PLACEHOLDER]`.

## The core flows (priority order)

| Flow | Trigger | Why it matters | Wedge for |
|---|---|---|---|
| **[Win-Back](win-back.md)** | no purchase in N days | the universal wedge — recovers lapsed revenue fast | every brand; Beauty/Kids esp. |
| **[Abandoned Cart](abandoned-cart.md)** | cart created, no checkout | recovers revenue you're losing nightly | Apparel, all |
| **[Welcome Series](welcome-series.md)** | new subscriber | converts subscribers to first order, sets brand | all (esp. high ad spend) |
| **[Replenishment / Reorder](replenishment.md)** | predicted run-out | turns one-time buyers into repeat revenue | F&B/supplements, Beauty |

> Next to add as needed: Browse Abandonment, Post-Purchase / cross-sell, Back-in-Stock,
> Subscription save/winback. Use `growth-audit-builder` to spot which a given brand is missing.

## The flow-naming rule (from brand voice)
Functional names only — **Win-Back, Abandoned Cart, Welcome Series** — never abstract creative
names. Creative naming lives in subject lines + hero copy.

## How flows connect to the funnels
- **Activation:** the trial ships **one** flow (default **Win-Back** — the universal wedge,
  production-ready for all brand types) so the merchant sees real revenue inside the trial.
- **Customer success:** the weekly recap reports flow revenue → drives retention + the 3× progress.
- **Guarantee:** flow revenue (7-day Shopify-matched) is what counts toward 3× of fees.
- **Audit:** the audit quantifies the gap from missing/weak versions of these flows.

## What to log back (per flow)
Open/click/placed-order rate · revenue per recipient · winning subject + offer · best timing/delay
· which category variant performs. Log to the flow file + `os/funnels/03-customer-success.md`.
