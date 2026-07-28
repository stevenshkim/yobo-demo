# Attribution & CRM Spec (build item A1 — dev-facing)

**Why this is #1:** without it we can't measure **CAC by channel** (the binding constraint) or
compute the **3× guarantee** (7-day Shopify-matched revenue). This spec defines what to build.
**Related:** `os/integrations/map.md`, `os/company/guarantee-mechanics.md`, `os/ops/metrics-dashboard.md`.

## 1. UTM taxonomy (enforce on EVERY outbound link)
```
utm_source   = channel platform   (meta | google | linkedin | tiktok | youtube | x | email | partner | warm)
utm_medium   = type                (paid | organic | outbound | content | referral | warm-list)
utm_campaign = wave/segment        (wave1-warm | wave2-beauty | content-latina-beauty | paid-retargeting ...)
utm_content  = creative/variant    (hookA | scriptN | subjectB)
utm_term     = segment/keyword     (beauty | fnb | apparel | kids | <kw>)
```
Every channel doc (outbound, content, paid, partnerships) must tag links this way. No UTM = invisible CAC.

## 2. CRM model (optimize the existing CRM)
- **Objects:** Account (brand) · Contact · Deal/Trial · Source.
- **Pipeline stages:** Lead → Audit started → Connected (both) → Plan delivered → Flow approved (AHA)
  → Trial → **Paid** → (Expansion). Mirrors the funnel so stage-conversion + CAC are measurable.
- **Required fields:** source (UTM-derived), segment (ICP vertical), store size (from Shopify),
  tier, MRR, CAC, audit-gap $, guarantee multiple, health status.
- **Automations:** capture UTM on first touch; create/advance Deal on each funnel event; alert
  Slack on Paid + on at-risk.

## 3. The 7-day Shopify-matched attribution (the guarantee engine)
- **Input:** Klaviyo send events (recipient email + send timestamp, per Aria flow/campaign) +
  Shopify orders (customer email + order timestamp + value).
- **Match rule:** an order is **Aria-attributed** if the purchaser received an Aria email within
  the **7 days before** the order. Credit the order value.
- **Aggregate** per customer per month → compare to **3× cumulative fees** for the guarantee check
  (`guarantee-mechanics.md`): if below, auto-credit next month.
- **Store** the records (FTC substantiation). Surface the multiple in the weekly recap.

## 4. CAC computation (per channel, weekly)
```
CAC(channel) = spend(channel, incl. labor + tooling) / new paying customers(channel)
Blended CAC  = total acquisition spend / total new paying customers   (target ≤ ~$450)
Payback      = CAC / (ACV × gross margin)   (target < ~1 month)
```
Feed into `os/ops/metrics-dashboard.md` channel scoreboard.

## 5. Product analytics (funnel instrumentation)
- Pick PostHog/Mixpanel. Track events: audit_started, shopify_connected, klaviyo_connected,
  plan_delivered, flow_approved, flow_shipped, first_result, converted_paid.
- Per-step conversion + drop-off (powers the activation nudges + the leak diagnosis).

## 6. Build order
1. UTM taxonomy + capture into CRM (unblocks CAC).
2. CRM stages/fields/automations (optimize existing).
3. Product-analytics events (funnel drop-off).
4. 7-day Shopify↔Klaviyo match (guarantee + revenue attribution).

> **Owner:** dev + growth/ops. **Gates:** paid scale (need CAC), the guarantee (need the match),
> and the weekly pace review (need the numbers). P0 in `os/DECISIONS-NEEDED.md`.
