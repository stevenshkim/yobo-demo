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

## 3. Attribution ("measured how")

- **Metric = Aria-attributed email revenue** = Klaviyo-attributed revenue (Klaviyo's default
  attribution window) from flows + campaigns Aria built or rebuilt.
- Shown in every weekly/monthly recap so the customer always sees their multiple
  ("you're at 2.1× your fees — here's the plan to 3×").
- **Recommend Klaviyo last-click attributed revenue** — the customer already sees it in Klaviyo,
  so it's transparent and low-dispute.

## 4. Window & checkpoints

- **Window: first 90 days** from first flow live (not from signup — protects against slow
  onboarders eating the clock during setup).
- **Checked monthly.** At each monthly checkpoint, cumulative attributable revenue should be
  ≥ 3× cumulative fees paid (table above). Progress is visible continuously, not just at day 90.

## 5. Remedy — "free until it hits" (agreed with Steven)

If at a monthly checkpoint cumulative attributable revenue is **below 3× cumulative fees**:

- **The customer doesn't pay for the next period — Aria keeps working free until the cumulative
  3× is met.** In effect: *you only pay for a month once Aria has delivered 3× that month's fee
  in attributable revenue.*
- Re-checked each month; normal billing resumes the month after the 3× threshold is back on track.

**Billing-ops choice (for finance/dev — pick one):**
| Mechanic | How it feels | Cash impact |
|---|---|---|
| **A. Defer charge** (recommend) — don't bill the next month until 3× is met | "You don't pay until it works" — cleanest claim | Delays revenue; no refunds |
| B. Charge then auto-credit — bill normally, credit/free the next month if a checkpoint is missed | Simple to run in Stripe | Brief cash in/out |

Recommend **A** for the strongest, most honest claim; B if billing simplicity wins. Either way
the customer's net outcome is identical: they never pay for a month that didn't return 3×.

## 6. Eligibility (makes it fair + defensible)

The guarantee applies only if the customer:
1. Connects Shopify + Klaviyo with required scopes within 7 days of starting paid.
2. **Approves at least [N] flows** Aria proposes within [14] days (we can't deliver if nothing ships).
3. Keeps approved flows **live and sending** (doesn't pause/disable them).
4. Maintains their list (no mass deletion / cold-list imports that wreck deliverability).
5. Meets a **minimum list size / send volume** — below it, email can't realistically hit 3×.
   *(Define the floor; this is the ICP guardrail that keeps the guarantee safe.)*
6. Is on a qualifying paid tier (recommend: all tiers — the math scales cleanly).

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

> **TODO before use:** Legal sign-off · fill `[N]` flows + the list-size floor · pick billing
> mechanic (defer vs credit) · confirm all-tiers eligibility.
