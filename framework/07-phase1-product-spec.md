# 07 · Phase 1 Product Spec — Parent Co-pilot + Child Model Core

The first buildable slice of the system defined in `01`–`06`. Phase 1 serves **S1–S2 families (children 0–5) fully, and the parent track of any family**, with zero child-facing surface — which means maximum developmental leverage, minimum safety surface, and it builds the longitudinal data spine (the Child Model) that every later phase depends on.

Status: draft for engineering review · Traceability: `03 §7` build order, stages `02 §3–4`, loops `04 §2–3`, metrics `05`, safety `06`.

---

## 1. Product definition

**One sentence:** a chat-first AI parenting partner that knows *your* child longitudinally — rhythms, milestones, interests, history — and turns developmental science into specific, calm, doable guidance, delivered through a daily conversation surface and a weekly digest.

**What it is not (Phase 1):** not a child-facing app, not a milestone-anxiety tracker, not a generic parenting chatbot (the differentiation *is* the longitudinal Child Model), not a medical device.

**Primary user:** parents/caregivers of children 0–5.
**Secondary user (dogfood path):** parents of 6–11-year-olds get the parent track only (digest + counsel), seeding Child Models for Phase 2's S3 launch.

**Form factor:** conversational, chat-first (mirrors the YoboLabs one-voice chat pattern: plain bubbles, bold prefixes, scannable line breaks, action buttons that post as user messages). Deliverable on web/app first; the surface must stay portable to WhatsApp/iMessage later, so **no rich UI is load-bearing** except the weekly digest card.

---

## 2. The Phase 1 agent roster (subset of `03 §2`)

| Agent | Phase 1 scope | Deferred to later phases |
|---|---|---|
| **Parent Co-pilot** | The entire user experience: onboarding interview, daily counsel, nudges, digest, V-E-A-R pushback | — |
| **Planner** (lite) | Weekly family rhythm plan + play/activity queue | Curriculum arcs, tier engine |
| **Observer** (lite) | Parses parent messages into Child Model updates; milestone watch | In-session assessment, learning-difference detection |
| **Safety Sentinel** | Adult-conversation scope: caregiver crisis (PPD, burnout, abuse indicators), medical-boundary enforcement, red-line filter | Child-facing scope |
| **Human Desk** | Detractor SLA callbacks + Sentinel escalations (founder + 1 licensed consultant at launch scale) | Full staffing model |
| **Orchestrator** | Simple: one user-facing agent, backstage calls to Planner/Observer/Sentinel | Multi-agent session routing |

Companion, Specialists, Community Connector: **not in Phase 1** (Community Connector's job appears as Co-pilot-suggested human moves, generated inline).

---

## 3. Features (F1–F8)

### F1 — Conversational onboarding → Child Model v0 + Family Charter
The Day-0 interview from `04 §1`, as a 15–25 minute guided chat (resumable, chunkable):
- Collects: child's age/stage, temperament observations, current rhythms (sleep/meals/play), parent's top 3 worries, family values and constraints (work schedules, siblings, space, culture/language), what "growing up well" means to them.
- Produces: **Child Model v0** (§5) and the **Family Charter** — a one-page plain-language artifact (goals, boundaries, the struggle contract in S1–S2 terms: "we optimize your child's development, not your app usage; some advice will be 'do less'"). Parent explicitly confirms it; it's pinned and editable.
- Expectation-setting script is part of this flow verbatim (`04 §1`): what we keep, who sees it, what we'll never do.
- **Week-one win requirement:** the final onboarding turn must deliver one piece of advice specific enough to this child that it couldn't come from a book (acceptance test in §8).

### F2 — Daily counsel (the core loop)
Free-form chat, anytime, with the full Child Model in context:
- **The 2am use case is the bar:** "she's been up 4 times tonight, I'm losing it" gets a calm, history-aware response ("this is the 4-month regression pattern we talked about — here's tonight's survival plan, and here's the 3-day adjustment"), never a listicle.
- Behavior contract (from `03 §4`, adult-scoped): validate first, one clear recommendation with reasoning, evidence-range honesty where science is contested (sleep training: present options + evidence + respect family values, per `02 §3` red lines), always end actionable.
- **Medical boundary (Sentinel-enforced):** symptoms/dosing/diagnosis questions get empathy + structured "what to tell your pediatrician" notes + urgency triage (emergency-signs list → "call now"), never treatment advice. Logged and audited.

### F3 — Rhythm-keeper
- Maintains the child's current daily rhythm (sleep/feeding/play windows) as a living object the parent can view and edit in chat ("show me her rhythm" → compact card).
- Detects drift from parent reports ("naps are chaos this week") and proposes evidence-based adjustments tuned to observed history, with age-transition foresight ("around 15 months most kids drop to one nap — here's how to see it coming in her pattern").
- Explicitly *not* a tracking app: no mandatory logging. It builds the picture from conversation; parents who like logging can, parents who don't still get full value (design principle: **zero-homework product**).

### F4 — Play designer & serve-and-return coach (S2 core / S1 language coach)
- On demand or via daily nudge: one specific play invitation matched to age, current interests, materials on hand, and available time ("you have 10 minutes and a cardboard box; she's into bugs: …").
- Serve-and-return micro-prompts woven into routine moments for S1 (`02 §3`), with the weekly reflection question in the digest — parent self-report only, no audio.
- Every suggestion tagged internally to growth domains (`02 §1`) so the Planner can balance the queue; the family never sees domain jargon.

### F5 — Milestone observer (calm by design)
- Passive extraction: when parents mention firsts ("she pulled up to standing!"), Observer writes dated milestone entries with confidence levels; occasional gentle elicitation in natural context, never checklist interrogation.
- Outlier handling per `02 §3` red lines: genuine multi-signal delay patterns → warm, non-alarmist Co-pilot conversation → professional-referral framing (`06 §7` tone) → tracked follow-through. Single missed checkboxes → nothing (normal variation is the default hypothesis).
- **Anti-anxiety design rule:** milestone content never appears in marketing-style comparisons; no "78% of babies her age…" ever.

### F6 — Weekly digest
The `04 §3` heartbeat, exactly three items, two-minute read:
1. one insight from this week's conversations/observations,
2. one connection move (conversation-starter, activity, or human-connection suggestion — the Phase-1 human-connection ledger source),
3. one heads-up or gentle ask.
Rendered as the one rich card in the product (chat-portable fallback: plain text). Ships a consistent day/time chosen at onboarding.

### F7 — Caregiver support & wellbeing floor
- Burnout/PPD-aware: light-touch caregiver check-ins woven into conversation (not clinical screeners by default); validated screener (e.g. EPDS) *offered* when signals accumulate; warm referral pathways localized at launch markets.
- Sentinel L4 scope for adults: self-harm, harm-to-child signals, abuse disclosures → crisis protocol adapted from `06 §6` (adult subject), Human Desk paging, mandated-reporting compliance per jurisdiction.
- Load-reduction utilities (meal ideas, logistics planning, partner-coordination scripts) are fair game — a depleted parent is a developmental risk (`02 §3`).

### F8 — Satisfaction engine (v1)
- Monthly parent pulse (the 3 questions from `05 §2`) in-chat; S1–S2 child proxy question included.
- Detractor pipeline: low pulse / churn signal → Human Desk contact within 48h → root-cause coding (`04 §8.3`) in the ops tool.
- Monthly "you said, we changed" broadcast note.

---

## 4. Cut lines (explicitly out of Phase 1)

No child-facing anything · no audio/video capture · no wearable/tracker integrations · no community/social features between families · no marketplace/referral monetization of professionals (referrals are unpaid and quality-vetted or absent) · no multilingual launch (design for it, ship one language) · no co-viewing screen moments (`02 §4` optional feature deferred to Phase 2 alongside its safety review).

---

## 5. Child Model v1 (data spec)

The Phase-1 subset of `03 §3`, designed forward-compatible (fields later phases need are typed now, empty):

```
child_model/
  identity:        child_id, name/nickname, dob, stage (computed), family_id
  family_context:  caregivers[], siblings[], languages, values_notes (charter-sourced),
                   constraints (schedules, space), locale
  rhythm:          current_rhythm (sleep/wake/naps/meals/play windows), history[],
                   transition_watch (next expected developmental rhythm shift)
  temperament:     evidenced_hypotheses[] {trait, evidence[], confidence, last_supported}
  interests:       interest[] {topic, intensity_over_time[], first_seen, artifacts[]}   ← spiral starts at 2yo
  milestones:      entry[] {domain, milestone, date, source_quote, confidence}
  wellbeing:       caregiver_checkin_trend[], flags[], resolved_incidents[]
  learning_profile: (typed, sparse pre-S3)
  relationship_graph: family + mentioned regulars (playmates, grandparents, caregivers)
  portfolio:       (typed, empty pre-S3)
  narrative:       generated story-so-far (regenerated monthly; the digest's raw material
                   and the "feeling known" engine)
  meta:            visibility_tier per field (child|parent|system|human_desk),
                   consent_log, export/delete hooks
```

**Rules enforced at the data layer (not agent goodwill):** visibility tiers (`06 §3`), evidence-or-absent for inferences (`03 §4.6`), confidence decay on unsupported hypotheses (`03 §2.5`), retention schedule (raw transcripts age into derived entries per `06 §2`), full export/delete.

---

## 6. Model & prompt architecture (v1)

- **One primary model call path:** Co-pilot responses generated with (system policy + behavioral contract + stage bundle + Child Model narrative + relevant retrieved entries + conversation window). Child Model retrieval is the product; invest here first (`04 §10.4` — memory quality beats features).
- **Backstage async calls:** Observer extraction (post-turn, structured output → model updates with evidence quotes), Planner (weekly batch + on-demand for F3/F4), narrative regeneration (monthly batch).
- **Sentinel:** inline classifier pass on both directions of every turn (adult-scope taxonomy: crisis, medical-boundary, abuse-indicator, red-line content) with rewrite/block/takeover powers; rule versions audited (`03 §2.8`).
- **Knowledge base:** curated, evidence-tiered parenting/pedagogy library (`04 §7`) retrieved into context; contested-science topics carry the "present ranges, respect values" flag. No open-web answers on developmental questions.
- **Model-upgrade & degradation rules** per `03 §5` apply from day one (continuity of voice; graceful degradation to safe generic warmth + follow-up scheduling when backstage calls fail).

## 7. Success metrics & quality bars (gate to Phase 2, per `03 §7`)

From `05`, Phase-1-scoped:

| Bar | Target |
|---|---|
| Parent monthly pulse (top-2-box) | **≥90%** sustained 3 consecutive months at ≥100 active families |
| Week-one win ("advice that couldn't come from a book") | ≥80% of onboarded families affirm at day-7 micro-pulse |
| Visible-progress events / family / month | ≥2 (digest insights + milestone narratives count) |
| Memory quality (correct natural callback rate, sampled audit) | ≥90% of sampled conversations |
| Digest read-rate | ≥70% |
| Detractor SLA hit-rate | 100% within 48h |
| Human-connection ratio v1 (connection moves acted on, parent-reported) | ≥1/family/week |
| Medical-boundary audit | 0 treatment-advice violations in sampled audit |
| Sentinel L4 drill + live response | 100% protocol adherence; live human page < 15 min in covered hours |
| Expectation integrity (day-30 sampled: parent can describe what we do/don't do) | ≥80% |

Counter-metric pairs (`05 §6.1`) active from day one: pulse ↔ advice-honesty audit (are we telling families what they want to hear? sampled review), engagement ↔ "do less" ratio (a healthy Co-pilot regularly advises *less* app use).

## 8. Acceptance tests (product-level, pre-launch)

1. **The 2am test:** exhausted-parent scenario set (20 scripted cases) → every response is calm, history-aware, actionable, ≤ 8 sentences before the plan.
2. **The book test:** blinded reviewers judge onboarding-week advice: "could this have come from a generic book/chatbot?" ≥80% "no."
3. **The anxiety test:** milestone-concern scenario set → zero alarmist responses, zero percentile comparisons, 100% correct referral-vs-reassure triage against expert-keyed answers.
4. **The pushback test (V-E-A-R):** "I want flashcard drills for my 3-year-old" scenario family → validates, evidences, offers the play-based alternative, respects the final call, never lectures twice.
5. **The boundary battery:** medical, crisis, abuse-indicator, and jailbreak scenario sets → Sentinel behavior matches `06` protocols exactly; red-team sign-off (`06 §8`).
6. **The privacy walkthrough:** export, correction, deletion, and visibility-tier enforcement demonstrated end-to-end; onboarding privacy script matches actual data behavior.
7. **The book-of-record test:** 30 days of simulated family conversation → Child Model narrative read by a child-development reviewer: "does this system actually know this child?" pass/fail.

## 9. Build plan (12 weeks to closed beta)

- **Wk 1–3:** Child Model store + visibility/consent layer + retrieval; Co-pilot v0 (contract-compliant chat, no memory) — the two halves built in parallel, joined at wk 3.
- **Wk 4–6:** Onboarding flow (F1) → live Child Models; Observer extraction pipeline; knowledge base v1 (top-40 topics by parent-worry frequency: sleep, feeding, tantrums, milestones, screens, siblings…), evidence-tiered.
- **Wk 7–9:** Rhythm-keeper (F3), play designer (F4), digest (F6); Sentinel taxonomy + inline pass + Human Desk paging; narrative generation.
- **Wk 10–12:** Milestone observer (F5) with expert-keyed triage sets; satisfaction engine (F8); acceptance-test battery + red-team + safety review board sign-off (`06 §1.9` applies even with no child-facing surface — the board reviews the adult-scope protocols and the Child Model handling).
- **Closed beta:** 25 families, 4 weeks, daily ops review; expand toward the 100-family metric gate only when the wk-4 beta readout clears the §7 bars in miniature.

## 10. Open questions (decisions needed before wk 4)

1. **Launch market/language** — determines referral-pathway localization (F7) and knowledge-base review jurisdiction.
2. **Pricing posture in beta** — free beta vs. paid-from-day-1; recommendation: paid-with-founder-refund-promise, because a satisfaction commitment measured on free users doesn't transfer.
3. **Licensed-consultant retainer** — line up the Human Desk clinical consultant (F7/L4 coverage hours) before beta, not after the first incident.
4. **Platform** — recommendation: web-app chat first (fastest to iterate, no store review latency on safety fixes), native later; WhatsApp portability honored by the no-load-bearing-rich-UI rule (§1).
