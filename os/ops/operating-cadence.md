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
Blended ACV so far: $___   (Starter __ / Growth __ / Scale __)
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
| ACV mix | converting but MRR/customer low | sales-assist into Growth/Scale; revisit pricing/packaging (funnel 04) |
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
- **2026-06-01 — 3× guarantee model DECIDED (CEO):** 3× of **fees paid** (not a revenue
  baseline). Aria drives ≥ 3× the customer's fees in attributable email revenue within 90 days,
  or **free until it hits**, checked monthly. Per-tier: $499→$4,491 / $1,499→$13,491 /
  $2,999→$26,991 over 90 days. Mechanics + billing options in `os/company/guarantee-mechanics.md`.
  Still needs: Legal sign-off · N-flows + list floor · billing mechanic (defer vs credit).
- **2026-05-31 — Closed 3 of 4 open items on the campaigns:**
  (#2) drafted **3× guarantee mechanics** for Legal (`os/company/guarantee-mechanics.md`);
  (#3) **verified salary anchor** — mid growth marketer ~$96–130k, Head of Growth ~$180–243k
  (sources: Glassdoor/Salary.com/Robert Half) → $499 ≈ 1/20th of the hire;
  (#4) **proposed trial design** — 14 days from first-flow-live, no card to start, 1 flow free
  and stays live, gate the rest (`os/funnels/02-activation.md`).
  Still open: (#1) real result numbers — parked in `os/company/proof-library.md` pending
  Steven's data; (#2) Legal sign-off; confirm trial-design choices.
- **2026-05-30 — Flag raised: pricing inconsistency.** Existing US landing copy in Notion
  says Starter $97 / Growth $297, which contradicts the $499/$1,499/$2,999 tiers. Must
  reconcile. — Surfaced to Steven.
- _Next: pick CRM + analytics tool (CAC attribution) — see `os/integrations/map.md`._
- _Next: confirm $500 pricing floor vs. $499 Core tier — see `os/company/offer-and-positioning.md`._

## Learnings log (what made us smarter — append)

> Format: `YYYY-MM-DD — Source → distilled → encoded where → measured result`

- _empty — add your first via `os/learning/README.md`._
