# The Connected 4-Funnel Model

> How the whole GTM machine fits together as one math problem. A change in any funnel
> ripples to the others — model it here before committing spend. Numbers tie to
> `os/company/north-star.md`.

## The machine, end to end

```
        LEAD GEN              ACTIVATION            CUSTOMER SUCCESS        REVENUE EXPANSION
   stranger → trial      trial → aha → paid       paid → retained         paid → more revenue
        │                      │                        │                       │
  qualified trial starts   trial→paid %            logo + net $ retention   NRR > 100%
        │                      │                        │                       │
   ┌────┴─────────────────────┴────────────────────────┴───────────────────────┴────┐
   │  $100k MRR = (Trials × Trial→Paid %) × Blended ACV                               │
   │              then protected by retention, grown by expansion                      │
   └──────────────────────────────────────────────────────────────────────────────────┘
```

The four funnels are not separate teams — they're stages of one customer journey, each with
one primary metric. Optimizing one in isolation can hurt another (e.g., loosening lead-gen
targeting raises trial volume but tanks trial→paid and retention). Always check the ripple.

## Current state → To-be state

| Stage | Metric | Current | To-be (goal) |
|---|---|---|---|
| — | Net-new MRR | $0 | **$100,000** |
| — | Blended ACV | n/a | ~$750 (working assumption; pricing-mix lever) |
| Lead gen | Qualified trial starts | ~0 | ~447 over 61 days (~7/day) at ~$750 ACV |
| Activation | Trial→paid % | unknown (no cohort yet) | ≥ 30% |
| Activation | Trial activation (connect+plan+approve) | unknown | ≥ 65% |
| Customer success | Logo retention (first 60d) | n/a | ≥ 90% |
| Customer success | Gross revenue retention | n/a | ≥ 90% |
| Expansion | Net revenue retention | n/a | > 100% |
| Blended | CAC | n/a | payback < ~1 mo (≤ ~$450 blended) |

> "Current" is mostly *unknown* by design — instrumenting these (CRM + analytics, see
> `os/integrations/map.md`) is the first job. **You can't hit 200 if you can't see the leak.**

## The math, three ways (so you can sanity-check pace)

**Forward (volume → MRR):**
`Visitors × 5% trial-start × 30% trial→paid × $750 ACV = MRR`

**Backward ($100k MRR → volume needed), at ~$750 ACV and 30% trial→paid:**
`$100k MRR ← ~134 customers ← ~447 trials ← ~8,900 qualified visitors over 61 days (~146/day)`
(At a $499-heavy mix this rises toward ~200 customers / ~667 trials; at a $1,000 mix it
falls toward ~100 / ~333. ACV mix moves all of it.)

**By channel (who supplies the ~447 trials in the working scenario):**
| Channel | Trials | → Paid @ 30% | Why |
|---|---|---|---|
| Warm list | ~90 | ~27 | High intent, converts above blend |
| Outbound | ~150 | ~45 | Targeted; converts at/above blend |
| Referral/partner | ~60 | ~18 | Warm intro, high trust |
| Paid | ~150 | ~44 | Colder; converts below blend, watch CAC |
| **Total** | **~450** | **~134** | → ~$100k MRR at ~$750 ACV |

## The four levers (and which to pull when off-pace)

1. **Trial volume** — top of funnel too thin → scale the lowest-CAC channel that's working.
2. **Trial→paid %** — funnel leaks → fix **activation** (highest leverage; halving the
   needed top-of-funnel is worth more than any ad optimization). See funnel 02.
3. **Blended ACV** — mix too low → sales-assist trials into Senior/Head of Growth; revisit pricing.
   (Higher ACV = fewer logos needed for $100k. See funnel 04.)
4. **CAC** — payback > ~1 month → shift budget to warm/referral/outbound; pause losing paid.

## Leading indicators (watch weekly, before the lagging "paying customers" number)

- Trials started this week (lead gen health)
- % of trials that connected **both** Shopify + Klaviyo within 24h (activation health)
- % of trials that approved ≥ 1 flow (the "aha" proxy)
- CAC by channel (efficiency)
- Week-2 trial→paid cohort conversion (the prediction of the lagging number)

## Pace checkpoints (cumulative net-new MRR)

| Date | MRR target | If below by 20%+ |
|---|---|---|
| Jun 15 | $20k | Warm list under-delivering → escalate outbound + open paid early |
| Jun 30 | $45k | Trial→paid is the likely leak → activation sprint |
| Jul 15 | $72k | CAC, volume, or ACV mix → reallocate budget / push higher tiers |
| Jul 31 | $100k | — |

Update actuals weekly in `os/ops/operating-cadence.md`.
