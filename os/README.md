# YoboLabs GTM OS — Master Plan

**Owner:** Steven (CEO) · **Created:** 2026-05-30 · **Horizon:** June–July 2026
**Goal:** $100,000 net-new US MRR by July 31 2026, CAC payback < ~1 month
(~134 customers @ ~$750 blended ACV — count varies with pricing mix).

This is the plan for the operating system itself: what it is, why it exists, how to use it,
the 60-day roadmap, and an honest read on feasibility. Strategy specifics live in the
linked files; this is the map.

---

## 1. Why this exists

You (Steven) named the real problem: **"a lot of inconsistencies without the right context
across the org."** Different people (and Claude, every fresh session) start cold, guess at
ICP/voice/priorities, and produce work that doesn't compound. Output ≠ outcomes.

The fix is not more tools. It's a **single shared brain** — context + playbooks + reusable
skills — that humans and Claude both read before they work, and write back to after they
learn. That's this OS. It turns "ask Claude to do a thing" into "ask Claude to do a thing
*the YoboLabs way, against the goal, in our voice, using what we learned last week.*"

**The compounding mechanism:** every session that ends with a learning committed to the OS
makes the next session better. The repo is the memory. (See `CLAUDE.md` §6.)

---

## 2. What got built (this session)

A working foundation you can use and extend immediately:

- **`CLAUDE.md`** — the brain. Auto-loads every session. Goal, identity, the 4 funnels,
  operating principles, the get-smarter loop, guardrails.
- **`os/company/`** — north-star + unit economics, ICP, offer & positioning, brand voice.
- **`os/funnels/`** — the connected 4-funnel metrics tree + one deep playbook per funnel,
  each with current→to-be numbers, plays, and the assets Claude can generate on demand.
- **`os/integrations/map.md`** — current-state → to-be-state for every tool, the connection
  diagram, and what's missing (Klaviyo API, CRM, WhatsApp).
- **`os/learning/`** — the pipeline that turns YouTube/books/material into reusable skills.
- **`os/ops/operating-cadence.md`** — the daily/weekly/monthly rhythm + decision log.
- **`.claude/skills/`** — reusable skills (ICP research, cold-outbound writer, funnel
  metrics review, ad-creative brief, landing-page teardown) for consistent output.

## 3. How to use it (three modes)

**A. Do a task, consistently.** "Claude, write 3 cold-email variants for our Beauty ICP."
Claude loads ICP + voice + lead-gen playbook + the cold-outbound skill, then produces
on-brand, on-target copy — the same way every time, for anyone on the team.

**B. Plan against the goal.** "Are we on pace for 200? What has to be true this week?"
Claude reads the funnel model, compares to actuals you've logged, and tells you the gap
and the highest-leverage move.

**C. Teach the system.** "Here's a transcript of a great GTM talk — make us smarter."
Claude distills it and promotes the durable parts into a skill or playbook (see
`os/learning/README.md`).

---

## 4. The 60-day roadmap to 200

Detailed math in `os/funnels/00-funnel-model.md`. Sequenced so the cheapest, fastest
customers come first and paid scales only once the funnel converts.

### Pre-launch (now → June 1) — *make the funnel real*
- Lock ICP, offer, pricing floor ($500), and the trial definition (`os/company/`).
- Instrument the funnel: every stage measurable, CAC attributable by channel
  (`os/integrations/map.md` → analytics + CRM gap).
- Stand up the warm-list activation sequence (your existing audience is the cheapest 40–60
  customers — go here first).
- Ship the product-led trial path the dev team is finishing (connect → plan → value).

### Wave 1 (June 1–15) — *warm + outbound, prove trial→paid*
- Activate the warm list (broadcast + sequence). Target the first 30–50 paying.
- Turn on outbound (cold email + LinkedIn) to US Shopify brands using the ICP triggers.
- **Gate:** measure real trial→paid %. If < 20%, fix activation before spending on paid.

### Wave 2 (June 15 – July 10) — *scale the channel that converts*
- Pour paid budget into the single best-converting channel (likely retargeting + high-intent
  demand capture), holding blended CAC ≤ $300.
- Scale outbound volume with the winning sequence.
- Layer partnerships/referrals from Wave-1 happy customers (lowest-CAC compounding loop).

### Wave 3 (July 10–31) — *close the gap*
- Pace daily against the 200 target; reallocate spend to the lowest-CAC channel each week.
- Sales-assist the warm/high-intent trials that stalled.
- Tighten activation (the highest-leverage lever — see §5).

---

## 5. Feasibility — the honest CEO read

$100k MRR is a **hard commitment**, so we build to maximize it. As CEO you also need the
real math, not optimism:

**The bar is high — but ACV mix changes it a lot.** $0 → $100k MRR in 61 days. The number of
logos depends on blended ACV: ~200 @ $499 (≈3.3 logos/day) but only **~134 @ $750 (≈2.2/day)**
or **~100 @ $1,000 (≈1.6/day)**. Pushing blended ACV up — via the Senior/Head of Growth tiers and
sales-assist — is therefore one of the cheapest ways to make the goal reachable. Hitting it
still requires a *product-led* motion (which you have, near-live) **plus** a warm audience to
convert fast **plus** paid/sales-assist that keeps CAC payback under ~1 month.

**Where it's won or lost: activation.** With a product-led trial, the single biggest lever
is **trial→paid conversion**, because it multiplies the value of every dollar of lead-gen.

(Trials needed for the working ~134-customer / ~$750-ACV scenario:)

| Trial→paid | Trials needed | Trials/day |
|---|---|---|
| 20% | ~670 | ~11 |
| 30% | ~447 | ~7 |
| 40% | ~335 | ~5.5 |

The difference between 20% and 40% is *halving* how much top-of-funnel (and CAC) you need.
**So the first build priority after the warm-list wave is making the trial reliably hit
its "aha" moment** (connect Shopify+Klaviyo → see a credible plan → approve first flow).

**CAC reality.** The budget envelope is ~$60k against $100k MRR. Warm-list and referral
customers come in near $0 CAC and subsidize paid. The real discipline is **payback < ~1
month** (CAC ≈ 0.7 × ACV), so Senior/Head of Growth customers justify higher CAC and keep
sales-assist profitable. Blended target ≤ ~$450; self-serve Growth Marketer near ~$300.

**Base case vs the commitment.** A first-time 0→1 GTM engine in 60 days more commonly lands
**$25k–$60k MRR**. We treat $100k as the target and drive to it; we report pace weekly and,
if off-pace, the OS tells you exactly which lever (activation %, trial volume, ACV mix, or
CAC) is the constraint — so the decision to push, reallocate, reprice, or extend is made on
data, not vibes. **Building the engine is the durable win; it keeps producing MRR in August
and beyond at ever-lower CAC.**

---

## 6. What's hard / limitations (so nothing surprises you)

- **Claude has no cross-session memory by default.** Solved only by the write-back loop in
  `CLAUDE.md` §6. If the team doesn't commit learnings, the system stops compounding.
- **MCP connections here are session-scoped.** Great for doing work *with* Claude; they are
  **not** the always-on production automation. That's the dev team's backend.
- **YouTube isn't natively "watchable."** We ingest transcripts/notes, not video. The
  pipeline in `os/learning/` handles this; pure-visual content needs a human summary first.
- **Key integrations not yet wired:** Klaviyo API, a CRM, WhatsApp. Until they are, CAC
  attribution and lifecycle automation are partly manual (`os/integrations/map.md`).
- **Compliance limits raw outbound volume.** CAN-SPAM/CASL and deliverability cap how fast
  cold channels can scale without burning domains. Plan warming in.
- **The product is "near-live," not proven at scale.** Trial→paid is an assumption until we
  have real cohort data — which is why Wave 1 has an explicit conversion gate before paid.

---

## 7. Next actions for Claude (pick up here next session)

1. Fill `os/company/icp.md` segment tables with your real top-3 verticals and 5 named
   design-partner brands.
2. Wire CAC attribution: decide the CRM and analytics tool (`os/integrations/map.md`),
   then add a `os/ops/metrics-dashboard.md` the team updates weekly.
3. Draft the warm-list activation sequence (Wave 1) using the lead-gen playbook + voice.
4. Build the trial "aha" checklist into the activation playbook from real onboarding data.
5. Start the learning library: drop your first GTM transcript into `os/learning/sources/`.
