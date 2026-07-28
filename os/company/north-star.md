# North Star & Unit Economics

> The numbers everything else is accountable to. If these change, update here first.

## The goal

**$100,000 in net-new US MRR by July 31 2026, with CAC payback under ~1 month.**

- Start: $0 MRR / 0 paying customers · Window: June 1 – July 31 2026 (61 days)
- Motion: product-led free trial (self-serve), sales-assist for warm/larger accounts
- Status: **hard commitment on the $100k MRR number.** The path is ours to optimize.

> **Why MRR, not a customer count.** "200 customers @ $500" was shorthand for $100k MRR. The
> real target is the revenue. The number of customers depends on **blended ACV** — and a
> higher ACV means fewer logos to win in 61 days, which is *easier*, not harder. So ACV mix
> is itself a lever on feasibility.

## What the goal implies

| Metric | Value |
|---|---|
| New MRR at goal | $100,000 |
| ARR run-rate at goal | $1,200,000 |
| Acquisition budget envelope | ~$60,000 |
| Gross-profit payback (at ~70% margin) | < 1 month — healthy, scalable |

## Customers needed = $100k ÷ blended ACV (the key sensitivity)

| Blended ACV | Customers for $100k MRR | Trials @ 30% conv. | Trials/day (over 61d) |
|---|---|---|---|
| $499 | ~200 | ~667 | ~11 |
| $750 | ~134 | ~447 | ~7 |
| $1,000 | ~100 | ~333 | ~5.5 |
| $1,499 | ~67 | ~223 | ~3.7 |

**Working planning scenario: ~$750 blended ACV → ~134 customers → ~447 trials (~7/day).**
(A realistic mix: most land on Growth Marketer, sales-assist pulls a share into Senior/Head of Growth.)
Tune this the moment real ACV data arrives — it moves every downstream number.

## The metrics tree (one number, decomposed)

```
$100,000 NEW MRR
  = Customers  ×  Blended ACV
        │              │
        │              └── pricing mix + sales-assist into higher tiers (a real lever)
        │
  = (Trials started × Trial→Paid %) × Blended ACV
        │                  │
        │                  └── the #1 conversion lever (product-led). See activation playbook.
        │
  = (Warm trials)+(Outbound trials)+(Paid trials)+(Referral trials)
       ~$0 CAC      labor CAC        highest CAC    ~$0 CAC, compounds
```

Then retention & expansion protect and grow the base:
```
Net MRR growth = New MRR − Churned MRR + Expansion MRR
```

## CAC discipline (the durable rule)

The real constraint isn't a flat dollar — it's **payback under ~1 month of gross profit.**
At ~70% margin that means **CAC ceiling ≈ 0.7 × ACV**:

| Tier | Monthly | CAC ceiling (≈0.7×) |
|---|---|---|
| Growth Marketer | $499 | ~$350 |
| Senior Growth Marketer | $1,499 | ~$1,050 |
| Head of Growth | $2,999 | ~$2,100 |

Higher tiers *justify* higher CAC — which is why sales-assist on Senior/Head of Growth stays
profitable. Keep **blended CAC ≤ ~$450** (well inside the $60k envelope at ~134 customers);
self-serve Growth Marketer customers should come in near ~$300 and below.

## Working assumptions (tune as real data arrives)

| Assumption | Working value | Confidence |
|---|---|---|
| Trial→paid conversion | 30% | Estimate — **validate in Wave 1, make-or-break** |
| Blended ACV | ~$750 | Planning estimate — depends on tier mix + sales-assist |
| Qualified visitor→trial start | 5% | Estimate |
| Trial activation (connect both + first plan + approve flow) | 65% | Estimate |
| Warm-list contribution | ~30 customers @ ~$0 CAC | Front-loaded in Wave 1 |

## On-pace tracking — measured in MRR

Each week, state **on-pace / off-pace** with the MRR number, and which lever is binding:
1. **Trial volume** (thin top of funnel) → push lead-gen channels
2. **Trial→paid %** (funnel leaks) → fix activation (highest leverage)
3. **Blended ACV** (mix too low) → sales-assist into Senior/Head of Growth; reprice
4. **CAC** (payback > 1 month) → reallocate to lowest-CAC channel

### Cumulative pace checkpoints (net-new MRR)

| Date | Cumulative MRR target |
|---|---|
| June 15 | $20,000 |
| June 30 | $45,000 |
| July 15 | $72,000 |
| July 31 | $100,000 |

> Replace planning numbers with actuals weekly in `os/ops/operating-cadence.md` (and a
> `metrics-dashboard.md` once the CRM/analytics tool is chosen).
