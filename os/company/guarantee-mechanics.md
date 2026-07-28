# The 3× Guarantee — Mechanics (DRAFT for Legal)

> **STATUS: DRAFT — NOT LEGALLY CLEARED. Do not use the "3×" claim in ads, landing pages, or
> contracts until Legal signs off on this page.** Until then, use softer real-data proof from
> `os/company/proof-library.md`.

## The model (decided with Steven): 3× of **fees paid**, not a revenue baseline

The guarantee is a **return on what the customer pays us** — clean, tier-scaling, and easy to
understand: *for every $1 a customer pays YoboLabs, Aria drives at least $3 back in
attributable email revenue, within the first 90 days — or they don't pay until she does.*

This is simpler and stronger than a past-revenue baseline: no disputes about "what was the
baseline," it scales with every tier automatically, and the customer's downside is ~zero.

---

## 1. The claim, stated precisely (proposed)

> "Aria will drive at least **3× your YoboLabs fees back in attributable email revenue within
> 90 days — or you don't pay until she does.**"

Public phrasing note: the honest, substantiable version is **"3× your fees back in revenue,"**
not the ambiguous "3× your revenue." Use the fees-based phrasing wherever the claim appears.

## 2. The math (3× of fees paid)

Attributable email revenue must reach **3× the fees paid to date**, checked monthly, across
the first 90 days:

| Tier | Monthly fee | Month 1 (3× M1 fee) | Month 2 (3× cumulative) | 90-day total (3× of 3 mo) |
|---|---|---|---|---|
| Growth Marketer | $499 | $1,497 | $2,994 | **$4,491** |
| Senior Growth Marketer | $1,499 | $4,497 | $8,994 | **$13,491** |
| Head of Growth | $2,999 | $8,997 | $17,994 | **$26,991** |

> **Why this is safe for YoboLabs (and reinforces ICP):** an in-ICP brand ($1–20M revenue,
> 10k–500k list) where email drives even ~20% of revenue clears $1,497/mo of email revenue
> easily — so for the right customer the bar is low and the guarantee rarely pays out. A brand
> that *can't* hit it is usually off-ICP (tiny list) — which is exactly why the eligibility
> floor below matters. The guarantee enforces ICP discipline.

## 3. Attribution ("measured how") — 7-day, Shopify-matched

- **Metric = email-driven Shopify revenue on a 7-day window.** Any Shopify order placed by an
  email recipient **within 7 days of an Aria email send** is credited to the guarantee.
  Recipient → Shopify transaction match (not platform last-click).
- **Why this model:** it ties the guarantee to *actual store revenue in Shopify* — the number
  the customer already trusts — rather than Klaviyo's self-reported last-click. Harder to
  dispute, more conservative, more credible.
- Shown in every weekly/monthly recap so the customer always sees their multiple
  ("you're at 2.1× your fees — here's the plan to 3×").
- **Dev/product note:** requires matching Klaviyo send events to Shopify orders on a 7-day
  attribution window (recipient email + order timestamp). Part of the attribution layer
  (`os/integrations/map.md` → Klaviyo + Shopify).

## 4. Window & checkpoints

- **Window: first 90 days** from first flow live (not from signup — protects against slow
  onboarders eating the clock during setup).
- **Checked monthly.** At each monthly checkpoint, cumulative attributable revenue should be
  ≥ 3× cumulative fees paid (table above). Progress is visible continuously, not just at day 90.

## 5. Remedy — "free until it hits" (agreed with Steven)

**Mechanic (decided): charge-then-auto-credit.** Bill the customer normally each month. At each
monthly checkpoint, if cumulative attributable (7-day Shopify-matched) revenue is **below 3×
cumulative fees**, **auto-credit the next month free** and Aria keeps working until the
cumulative 3× is met. Normal billing resumes the month after the threshold is back on track.

In effect: *you only ever pay for a month once Aria has returned 3× that month's fee in
revenue.* Simple to run in Stripe (charge → conditional credit), and the customer's net
outcome is the same as deferring: they never pay for a month that didn't return 3×.

## 6. Eligibility (makes it fair + defensible)

The guarantee applies only if the customer:
1. Connects Shopify + Klaviyo with required scopes within 7 days of starting paid.
2. **Approves at least [N] flows** Aria proposes within [14] days (we can't deliver if nothing ships).
3. Keeps approved flows **live and sending** (doesn't pause/disable them).
4. Maintains their list (no mass deletion / cold-list imports that wreck deliverability).
5. Meets the **store-size floor** (any one of): **≥ $500K annual sales**, **≥ $42,000 monthly
   sales**, or **≥ 1,000 orders/month.** Below this, email can't realistically return 3× — this
   floor is the ICP guardrail that keeps the guarantee safe (and matches the ICP order minimum).
6. Is on a qualifying paid tier (all tiers — the math scales cleanly).

## 7. Exclusions (out of our control)

- Customer-caused deliverability collapse (spam complaints, bought lists, domain issues).
- Major store disruptions (out of stock, site down, business paused).
- Force majeure / platform outages (Klaviyo or Shopify downtime).

## 8. What Legal must clear before we publish the claim

- **Substantiation (FTC):** keep per-customer fee + attributed-revenue records on file as the basis.
- The word **"guaranteed,"** the 3×-of-fees definition, and the "free until it hits" remedy must
  appear in the Terms of Service / order form.
- Billing mechanic (defer vs credit) compliant with billing + consumer-protection rules.
- Clear, accessible disclosure of eligibility conditions wherever the claim appears.

---

## How this plugs into the funnels

- **BOFU / pricing:** the headline risk-reversal once cleared — "3× your fees back or you don't
  pay" (`os/campaigns/bofu-pricing-and-conversion.md`).
- **Activation:** eligibility (connect + approve N flows) *is* the activation checklist
  (`os/funnels/02-activation.md`).
- **Customer success:** progress to 3× is shown weekly — a retention asset, not just a sales line
  (`os/funnels/03-customer-success.md`).

> **TODO before use:** Legal sign-off (later) · fill `[N]` flows for eligibility.
> **Decided:** 3×-of-fees · 7-day Shopify-matched attribution · charge-then-auto-credit ·
> store-size floor ($500K/yr or $42K/mo or 1,000 orders/mo) · all tiers.
