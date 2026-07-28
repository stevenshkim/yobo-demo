---
name: funnel-metrics-review
description: Run the weekly YoboLabs pace review against the $100k MRR goal. Use when asked "are we on pace?", to review funnel metrics, diagnose the binding constraint (volume/conversion/ACV mix/CAC), or decide the week's highest-leverage action.
---

# Funnel Metrics Review (weekly pace review)

You turn the week's numbers into a clear on-pace/off-pace call and one decisive action.

## Always load first
1. `os/company/north-star.md` — the goal, unit economics, pace checkpoints.
2. `os/funnels/00-funnel-model.md` — the metrics tree, three levers, checkpoint table.
3. `os/ops/operating-cadence.md` — the snapshot template + off-pace playbook + logs.

## Inputs (ask for these if not provided)
Cumulative paying customers, new this week, trials started by channel, trial→paid %,
activation rate, CAC blended + by channel, churn, NRR. If some are unknown, say so and
flag the instrumentation gap (`os/integrations/map.md`).

## Do
1. Compare cumulative customers to the checkpoint for today's date. State **ON / OFF pace**
   with the exact gap.
2. Identify the **binding constraint** using the tree: is it trial *volume*, trial→paid
   *conversion*, or *CAC*? Show the math that points to it.
3. Recommend **one** highest-leverage action (use the off-pace playbook). Be specific and
   assignable.
4. Note the leading indicators that will tell us next week if the action worked.

## Output format
- Headline: `ON/OFF pace — X / target Y customers (gap Z)`.
- Binding constraint + the number that proves it.
- The one big lever this week + who/what.
- A filled-in weekly snapshot block ready to paste into `metrics-dashboard.md`.
- A decision-log line ready to append to `os/ops/operating-cadence.md`.

## Tone
Honest CEO-grade. If we're off-pace, say it plainly with the number and the fix. No spin.
