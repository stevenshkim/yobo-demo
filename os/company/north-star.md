# North Star & Unit Economics

> The numbers everything else is accountable to. If these change, update here first.

## The goal

**200 net-new US paying customers @ ≥ $500/mo, ≤ $300 blended CAC, by July 31 2026.**

- Start: 0 paying customers · Window: June 1 – July 31 2026 (61 days)
- Pricing floor: **$500/mo** (a customer below $500 does not count toward the 200)
- Motion: **product-led free trial** (self-serve, sales-assist for warm/large)
- Status: **hard commitment**

## What the goal implies

| Metric | Value |
|---|---|
| New MRR at goal | $100,000 |
| ARR run-rate at goal | $1,200,000 |
| Max total acquisition spend | $60,000 (200 × $300) |
| Required pace | ~3.3 new paying logos / day |
| Gross-profit payback (at ~70% margin) | < 1 month — healthy, scalable if CAC holds |

## The metrics tree (one number, decomposed)

```
200 PAYING CUSTOMERS
  = Trials started  ×  Trial→Paid conversion %
        │                     │
        │                     └── the #1 lever (product-led). See activation playbook.
        │
  = (Warm-list trials) + (Outbound trials) + (Paid trials) + (Referral trials)
        │                     │                  │               │
      ~$0 CAC            labor CAC          highest CAC      ~$0 CAC, compounds
```

Then retention & expansion protect and grow the base:
```
Net MRR growth = New MRR − Churned MRR + Expansion MRR
```
(Customer Success funnel keeps churn low; Revenue Expansion pushes NRR > 100%.)

## Working assumptions (tune these as real data arrives)

| Assumption | Working value | Source / confidence |
|---|---|---|
| Trial→paid conversion | 30% | Estimate — **validate in Wave 1, this is the make-or-break number** |
| Qualified visitor→trial start | 5% | Estimate (connecting Shopify+Klaviyo is real friction) |
| Trial activation (connect both + first plan + approve flow) | 65% | Estimate — activated trials convert far better than non-activated |
| Trials needed for 200 @ 30% | ~667 (~11/day) | Derived |
| Warm-list contribution | 30–50 customers @ ~$0 CAC | Front-loaded in Wave 1 |
| Blended CAC ceiling | $300 | Hard constraint |

## CAC budget allocation (illustrative, ≤ $60k)

| Channel | Customers | CAC target | Spend | Notes |
|---|---|---|---|---|
| Warm list / audience | 40 | ~$0 | ~$2k (tooling) | First, fastest, cheapest |
| Outbound (email + LinkedIn) | 70 | ~$150 (labor) | ~$10k | Scales with the winning sequence |
| Referral / partnerships | 30 | ~$50 | ~$1.5k | Compounds off happy Wave-1 customers |
| Paid (retargeting + intent) | 60 | ≤ $600 | ~$36k | Tolerated high because cheap channels subsidize blend |
| **Blended** | **200** | **≤ $300** | **~$50k** | Headroom under the $60k ceiling |

> These are planning numbers, not results. Replace with actuals weekly in
> `os/ops/operating-cadence.md` and `os/ops/metrics-dashboard.md` (to be created).

## On-pace tracking

Each week, state **on-pace / off-pace** with the number, and which of the three levers is
the binding constraint:
1. **Trial volume** (not enough top of funnel) → push lead-gen channels
2. **Trial→paid %** (funnel leaks) → fix activation (highest leverage)
3. **CAC** (too expensive) → reallocate to lowest-CAC channel

Cumulative pace checkpoints (linear; reality front-loads warm list):
| Date | Cumulative target |
|---|---|
| June 15 | 40 |
| June 30 | 90 |
| July 15 | 145 |
| July 31 | 200 |
