# Funnel 3 — Customer Success

**Owns:** paid → retained, healthy, referring.
**Primary metric:** logo retention + gross revenue retention (targets ≥ 90% in first 60d).
**Why it matters to the 200:** churn is a leak in the bucket. At a 0→200 sprint, early
churn both shrinks the count *and* poisons referrals/word-of-mouth you need for cheap
growth. Retention protects CAC.

## The thesis

A customer stays when YoboLabs is **visibly producing repeat revenue with near-zero effort
from them.** Aria's always-on cadence (daily updates, weekly recaps, monthly plans) is the
retention engine — but only if the value is real and *felt*. Silent months kill renewals.

## Health model (define "healthy" so you can act before churn)

| Signal | Healthy | At-risk |
|---|---|---|
| Flows live & running | ≥ 3 | 0–1 |
| Aria-attributed revenue trend | up / flat | down 2+ weeks |
| Approvals / engagement | responds to plans | ghosting approvals |
| Sends actually going out | weekly+ | stalled |
| Support sentiment | positive/neutral | complaints, "is this working?" |

> **TODO:** turn this into a numeric health score once Klaviyo revenue data is wired
> (`os/integrations/map.md`). Until then, review the list manually weekly.

## Plays

1. **Make value undeniable and weekly.** The weekly revenue recap (hero number) is the most
   important retention artifact. It must show real, attributed lift. (Aria voice.)
2. **Never go silent.** Every customer hears from Aria on cadence — daily/weekly/monthly. A
   quiet account is a churning account.
3. **First 30 days = the renewal.** Front-load wins. The trial got them to pay; the first
   month decides if they stay. Ensure ≥ 3 flows live and a visible win in month 1.
4. **Proactive saves.** When a health signal goes at-risk, Aria (or sales-assist) reaches
   out *before* the customer complains — diagnose, fix, show a plan.
5. **Make the 3× guarantee a retention asset, not just a sales line.** Track progress toward
   it and report it ("you're at 2.1× — here's the plan to 3×").
6. **Capture proof.** Every happy customer → testimonial + case-study number + referral ask.
   This feeds lead-gen's cheapest channel (referral/partnerships).

## Onboarding → ongoing handoff
- Activation hands off the moment of conversion. CS owns: confirm ≥ 3 flows live, set the
  recap cadence, set expectations, schedule the first month-end plan review.

## Assets Claude can generate
- Weekly revenue recap template (hero number, 3 things that moved, next week's plan)
- At-risk save playbook + outreach copy (Aria voice)
- 30/60/90 customer health review template
- Testimonial / case-study request sequence
- Monthly plan-review narrative

## What to log back here
- Churn reasons (verbatim) — feeds ICP (off-ICP churns) and activation
- Logo + gross revenue retention by cohort
- Which health signals best predict churn (build the score from these)
- Testimonials/case-study numbers captured (asset library)

## Current → To-be
| | Current | To-be |
|---|---|---|
| Retention measured | n/a | logo + GRR by cohort |
| Health scoring | manual list | numeric score from Klaviyo data |
| Proof captured | none | testimonial + number per happy customer |
