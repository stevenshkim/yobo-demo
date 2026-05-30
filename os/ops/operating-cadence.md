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
Cumulative paying customers: ___ / 200   (checkpoint target: ___)  → ON / OFF pace
New paying this week: ___
Trials started: ___ (warm __ / outbound __ / referral __ / paid __)
Trial→paid % (latest cohort): ___%
Activation rate (connected both + approved flow): ___%
CAC blended: $___   (warm $__ / outbound $__ / referral $__ / paid $__)
Churned customers: ___    NRR: ___%
Binding constraint this week: [volume / conversion / CAC]
This week's one big lever: __________
```

## When off-pace — the playbook (don't panic, diagnose)

| Constraint | Symptom | First move |
|---|---|---|
| Volume | trials < target | scale lowest-CAC working channel; escalate outbound; open paid retargeting |
| Conversion | trials fine, paying low | activation sprint (funnel 02) — fix the biggest drop-off step |
| CAC | converting but > $300 | shift mix to warm/referral/outbound; pause losing ad sets; tighten targeting |

## Decision log (newest first — append, never delete)

> Format: `YYYY-MM-DD — Decision — Why — Expected effect — (later) Actual result`

- **2026-05-30 — Built the GTM OS foundation in-repo (CLAUDE.md + os/ + skills).** — Org had
  inconsistent output from missing shared context. — Expected: consistent, compounding,
  goal-tied output across the 4 funnels. — Result: _pending._
- **2026-05-30 — Set the build direction:** operating layer (not product backend),
  product-led trial motion, 200 as hard commitment, this repo as the single brain. — Per CEO
  decisions. — Result: _pending._
- _Next: pick CRM + analytics tool (CAC attribution) — see `os/integrations/map.md`._
- _Next: confirm $500 pricing floor vs. $499 Core tier — see `os/company/offer-and-positioning.md`._

## Learnings log (what made us smarter — append)

> Format: `YYYY-MM-DD — Source → distilled → encoded where → measured result`

- _empty — add your first via `os/learning/README.md`._
