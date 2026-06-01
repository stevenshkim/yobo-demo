# Operating Cadence & Decision Log

> The rhythm that keeps the org consistent and on-pace, plus the running record of decisions
> and results. This is where "are we on track for 200?" gets answered every week.

## The rhythm

### Daily (5 min, async — Slack)
- Trials started yesterday (by channel) · new paying customers · any at-risk customer.
- One line: today's single highest-leverage action against the binding constraint.

### Weekly (the pace review — 30 min)
1. Update actuals in `os/ops/metrics-dashboard.md` *(create from the template below)*.
2. **State on-pace / off-pace vs. the checkpoint** (`os/funnels/00-funnel-model.md`).
3. Identify the **binding constraint**: trial volume, trial→paid %, or CAC.
4. Pick the week's one big lever to move it. Assign it.
5. Log the decision below.

### Monthly (end of June, end of July)
- Full funnel review: conversion by stage + CAC by channel + retention by cohort.
- What did we learn that should change a playbook? (encode it — `os/learning/`).
- Re-forecast the path to 200 and reallocate budget.

## Weekly metrics snapshot (template — copy into metrics-dashboard.md)

```
Week of: ____
Cumulative net-new MRR: $___ / $100k   (checkpoint target: $___)  → ON / OFF pace
New MRR this week: $___    (new customers: ___ )
Blended ACV so far: $___   (Growth Marketer __ / Senior __ / Head of Growth __)
Trials started: ___ (warm __ / outbound __ / referral __ / paid __)
Trial→paid % (latest cohort): ___%
Activation rate (connected both + approved flow): ___%
CAC blended: $___ (payback __ mo)   (warm $__ / outbound $__ / referral $__ / paid $__)
Churned MRR: $___    NRR: ___%
Binding constraint this week: [volume / conversion / ACV mix / CAC]
This week's one big lever: __________
```

## When off-pace — the playbook (don't panic, diagnose)

| Constraint | Symptom | First move |
|---|---|---|
| Volume | trials < target | scale lowest-CAC working channel; escalate outbound; open paid retargeting |
| Conversion | trials fine, paying low | activation sprint (funnel 02) — fix the biggest drop-off step |
| ACV mix | converting but MRR/customer low | sales-assist into Senior/Head of Growth; revisit pricing/packaging (funnel 04) |
| CAC | converting but payback > ~1 mo | shift mix to warm/referral/outbound; pause losing ad sets; tighten targeting |

## Decision log (newest first — append, never delete)

> Format: `YYYY-MM-DD — Decision — Why — Expected effect — (later) Actual result`

- **2026-05-30 — Built the GTM OS foundation in-repo (CLAUDE.md + os/ + skills).** — Org had
  inconsistent output from missing shared context. — Expected: consistent, compounding,
  goal-tied output across the 4 funnels. — Result: _pending._
- **2026-05-30 — Set the build direction:** operating layer (not product backend),
  product-led trial motion, 200 as hard commitment, this repo as the single brain. — Per CEO
  decisions. — Result: _pending._
- **2026-05-30 — Mirrored the OS to Notion** under 🇺🇸 YOBO US Expansion Hub → "🧠 YoboLabs
  GTM Operating System" (14 child docs). — So the non-technical team can read/reference it;
  repo stays source of truth. — Result: _pending._
- **2026-05-31 — Reframed the north-star metric: $100k net-new MRR** (was "200 customers @
  $500"). — Per CEO: 200@$500 was shorthand; the real target is the revenue, and customer
  count is a function of blended ACV (higher ACV = fewer logos = more feasible). — Effect:
  all OS math now keyed to MRR + a ~$750 blended-ACV working scenario (~134 customers). —
  Result: _pending._
- **2026-05-31 — Pricing tiers + naming LOCKED:** Growth Marketer $499 / Senior Growth
  Marketer $1,499 / Head of Growth $2,999. — Per CEO (chose the seniority naming). — Effect:
  anchors price against the salary of the hire Aria replaces; powers the BOFU framing. —
  Result: _pending._ Self-serve sub-$499 entry point still open.
- **2026-05-31 — Built Wave-1 warm-list activation sequence + BOFU pricing/conversion
  playbook** (`os/campaigns/`). Motion: free Growth Audit → trial → results-first → price
  reveal as "keep the teammate." — Result: _pending._
- **2026-06-01 — Paid ad creative written** (`os/campaigns/paid-ad-creative.md`): ready-to-run
  Meta copy per segment (hook/primary/headline/visual), Google Search ad copy, LinkedIn copy for
  the $5–20M segment, an angle matrix, and a kill/scale testing plan. CTA = free Growth Audit.
- **2026-06-01 — Flow library built** (`os/flows/`): the actual lifecycle emails Aria ships —
  Win-Back (the universal wedge / default trial flow), Abandoned Cart, Welcome Series,
  Replenishment — full copy templates in Aria voice with per-category variants, subject variants,
  offer discipline, and A/B/log guidance. This is the delivered substance behind the guarantee.
- **2026-06-01 — Operational glue added:** **sales-assist playbook** (warm + $5–20M Head-of-Growth
  accounts) and the **first-2-weeks execution calendar** (who does what, Tuesday start). The OS now
  spans strategy → channels → conversion → retention → the day-by-day schedule to run it.
- **2026-06-01 — Depth pass:** added the **audit landing-page copy** (the conversion destination),
  **deliverability playbook** (A4 prep), **attribution & CRM spec** (A1 dev spec), **metrics
  dashboard** template, and **activation onboarding/drop-off nudges**. Plus 3 new skills:
  `growth-audit-builder`, `weekly-recap-writer`, `content-script-writer`. Fixed funnel-metrics-review
  skill to the $100k MRR goal.
- **2026-06-01 — Full picture completed** (pre-holiday sprint): added **paid ads engine**,
  **channel partnerships**, **CS weekly-recap + saves**, **expansion/upsell** templates
  (`os/campaigns/`), plus **`os/DECISIONS-NEEDED.md`** (consolidated unblock list) and
  **`os/TEAM-KICKOFF.md`** (Tuesday start-here). All 6 acquisition/retention channels now drafted.
  Everything committed to GitHub + mirrored to Notion. Remaining = decisions/inputs/dev/tools in
  DECISIONS-NEEDED. (CEO: "get the full picture done before the team's back Tuesday; QC later.")
- **2026-06-01 — Wave-2 cold outbound built** (`os/campaigns/wave-2-cold-outbound.md`): 4
  segment sequences (community Beauty, F&B/supplements, Apparel high-ad-spend, Kids), each
  4 emails + 2 LinkedIn, signal-based openers, CTA = free Growth Audit. **Gated on deliverability
  setup (A4) before any cold volume.**
- **2026-06-01 — Content engine built** (`os/campaigns/content-engine.md`): two-tier account
  architecture (Tier-1 safe / Tier-2 AI influencers), the lane network (community × category,
  6 lanes prioritized), 5 pillars, production line, hook library, **8 ready-to-shoot scripts**,
  cadence + engagement loop, and brand-safety/FTC guardrails. CTA throughout = free Growth Audit.
- **2026-06-01 — ICP upgraded to a 9-dimension scorecard (CEO input)** (`os/company/icp.md`):
  founder origin/community · customer community/language · category · revenue/size · purchase
  frequency (6+ ideal, 2+ power) · AOV · reviews (4+/5) · repurchase rate · ad spend. Does two
  jobs — **predicts success/guarantee-safety** (freq/repurchase/reviews/AOV) and **predicts
  virality** (founder+customer community × category → matched AI-influencer content lanes).
  Added target-list criteria + priority segments + per-segment message angles.
- **2026-06-01 — 5 build decisions (CEO):** (1) CRM built, needs optimize + connect; (2) Win-Back
  generation must be production-ready for all brand types (the universal trial wedge); (3)
  deliverability not yet planned — needs a prep pass; (4) **content account strategy** — Tier-1
  brand/founder accounts stay safe (educational + light promo), Tier-2 AI educational accounts /
  AI influencers do the heavy promotion (diversified vs ban risk across all 6 platforms); (5)
  store-size filter read automatically from Shopify on sync.
- **2026-06-01 — Full GTM build plan created** (`os/gtm-build-plan.md`): the acquisition-engine
  inventory — foundation (attribution/CRM, audit, trial, deliverability, creative), targeting
  (ICP segmentation), channels (warm, outreach, content mass-production, posting/engagement,
  paid, partnerships), retention/expansion — with current→to-be, owners, KPIs, risks, and waves.
- **2026-06-01 — 3× guarantee FULLY SPEC'D (CEO):** 3× of **fees paid** (not a revenue
  baseline). Per-tier 90-day guarantee: $499→$4,491 / $1,499→$13,491 / $2,999→$26,991.
  **Attribution:** email-driven Shopify revenue on a **7-day window** (orders within 7 days of
  send, matched to recipients) — not last-click. **Remedy:** charge-then-auto-credit (free
  month whenever cumulative 3× isn't met). **Eligibility floor:** ≥ $500K/yr or ≥ $42K/mo or
  ≥ 1,000 orders/mo. Tiers: all. Open: Legal sign-off (later) · N-flows for eligibility.
  Full spec: `os/company/guarantee-mechanics.md`.
- **2026-05-31 — Closed 3 of 4 open items on the campaigns:**
  (#2) drafted **3× guarantee mechanics** for Legal (`os/company/guarantee-mechanics.md`);
  (#3) **verified salary anchor** — mid growth marketer ~$96–130k, Head of Growth ~$180–243k
  (sources: Glassdoor/Salary.com/Robert Half) → $499 ≈ 1/20th of the hire;
  (#4) **proposed trial design** — 14 days from first-flow-live, no card to start, 1 flow free
  and stays live, gate the rest (`os/funnels/02-activation.md`).
  Still open: (#1) real result numbers — parked in `os/company/proof-library.md` pending
  Steven's data; (#2) Legal sign-off; confirm trial-design choices.
- **2026-06-01 — Review packet created** (`os/REVIEW-INDEX.md`): single index with every doc +
  GitHub + Notion link, ordered as a guided review for the team before execution. Also swept the
  OS for stray old-tier names (Starter/Growth/Scale) → all now Growth Marketer/Senior/Head of Growth.
- **2026-06-01 — Pricing RESOLVED (CEO):** OS tiers are **canonical** — Growth Marketer $499 /
  Senior Growth Marketer $1,499 / Head of Growth $2,999. The old US landing-page copy
  ($97 / $297) is superseded — **action: update the live landing page to match these tiers.**
  (Closes the earlier $97/$297 reconciliation flag and the $500-floor question — the goal is
  $100k MRR, no per-customer floor.)
- _Next: pick CRM + analytics tool (CAC attribution) — see `os/integrations/map.md`._

## Learnings log (what made us smarter — append)

> Format: `YYYY-MM-DD — Source → distilled → encoded where → measured result`

- _empty — add your first via `os/learning/README.md`._
