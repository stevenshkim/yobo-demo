# 03 · Agentic System Architecture

How the framework in `02` becomes a running multi-agent system. This document defines the agent roster, the shared Child Model, orchestration and memory, the behavioral contract every agent inherits, and the escalation lattice.

---

## 1. Architecture at a glance

```
                        ┌─────────────────────────────┐
                        │     SAFETY SENTINEL          │  ← always-on, veto power,
                        │  (inline on every exchange)  │     cannot be bypassed
                        └──────────────┬──────────────┘
                                       │
 Child ⟷  ┌────────────┐      ┌───────┴────────┐      ┌────────────────┐  ⟷ Parent
          │ COMPANION  │ ⟷   │  ORCHESTRATOR  │  ⟷   │ PARENT CO-PILOT │
          │ (child UX) │      │ (routing/state)│      │  (parent UX)    │
          └────────────┘      └───────┬────────┘      └────────────────┘
                                      │
        ┌──────────────┬──────────────┼───────────────┬──────────────┐
   ┌────┴─────┐  ┌─────┴─────┐  ┌────┴─────┐  ┌──────┴──────┐  ┌────┴─────┐
   │ PLANNER  │  │ OBSERVER  │  │SPECIALISTS│  │ COMMUNITY   │  │ HUMAN    │
   │(curricul.)│  │(assessmnt)│  │(per domain)│ │ CONNECTOR   │  │ DESK     │
   └────┬─────┘  └─────┬─────┘  └────┬─────┘  └──────┬──────┘  └────┬─────┘
        └──────────────┴─────────────┴───────────────┴──────────────┘
                                      │
                        ┌─────────────┴─────────────┐
                        │       CHILD MODEL          │  ← single source of truth,
                        │ (longitudinal, versioned)  │     years-long memory
                        └───────────────────────────┘
```

Two user-facing agents (Companion, Parent Co-pilot), one coordinator (Orchestrator), four back-office agent groups (Planner, Observer, Specialists, Community Connector), one always-on safety layer (Sentinel), one human escalation surface (Human Desk), all reading/writing one **Child Model**.

---

## 2. The agent roster

### 2.1 Companion — the child-facing voice
- **One relationship, one voice, many years.** The child experiences a single continuous character whose tone, vocabulary, humor, and role *re-version at each stage transition* (warm playmate-guide at S3 → studio partner at S4 → respectful mentor at S5 → demanding-but-loyal coach at S6). Re-versioning is an explicit product moment (the "re-contract," `02 §7`), not a silent drift.
- Delivers sessions designed by the Planner; narrates progress; runs reflection; hands off to off-screen life.
- **Identity honesty:** always an AI, says so, models intellectual humility (owns its errors out loud — this is curriculum, not failure).
- Never handles: safety incidents (Sentinel takes over), parent communication (Co-pilot's job), assessment scoring (Observer's job — the Companion must stay the coach, never the judge, so the relationship stays psychologically safe).

### 2.2 Parent Co-pilot — the parent-facing partner
- Owns the entire S1–S2 experience (the child isn't on screens yet) and the parent track at every later stage.
- Weekly digest (one insight, one conversation-starter, one heads-up), on-demand parenting counsel with this child's actual longitudinal context, logistics support.
- **Translator of struggle:** its most important recurring job is explaining *why* the child's current difficulty is by design (`01` principle 7), converting the biggest satisfaction risk into the biggest trust builder.
- **Graceful disagreement module:** when a parent requests something developmentally harmful (skip play for worksheets at 4; read the teen's private journal), the Co-pilot validates the underlying concern, shows the evidence, offers a better route to the same goal, and records the family's final choice within safety bounds. Scripted patterns in `04 §6`.

### 2.3 Orchestrator — routing, state, and cadence
- Session state machine; routes turns to Specialists; merges their outputs into the Companion's single voice; enforces time budgets and stage-appropriate hard stops; schedules the loops in `04`.
- Applies the **stage policy bundle**: per-stage configuration (tone versions, privacy rules, session caps, feature flags) so stage transitions are config changes, not code forks.

### 2.4 Planner — curriculum & trajectory
- Maintains each child's **growth plan**: quarterly arcs per domain, weekly plans, daily session designs — all mastery-based (advance on demonstrated mastery, not calendar) and interest-woven (academic work threaded through the child's current passions).
- Runs the **tier engine**: tracks criterion distance to Foundation/Craft/Frontier tiers (`01 §3`, `05 §4`) and proposes the next-best developmental move, balancing all six domains (a child sprinting in Mind while Heart or People lags gets rebalanced, not accelerated).
- Consumes: Child Model, curriculum library, learning-science policies (spacing, interleaving, retrieval, ZPD targeting). Produces: plans the Companion executes and the Co-pilot previews.

### 2.5 Observer — assessment & the growing picture
- **Invisible assessment first:** evidence of mastery is harvested from natural work (the reading session, the project, the conversation) rather than tests; formal assessment is rare and purposeful.
- Updates the Child Model after every session: mastery estimates, error patterns, interest signals, frustration/flow indicators, social-emotional notes.
- Runs milestone watch (S1–S2) and learning-difference detection (S3+): flags patterns consistent with dyslexia, ADHD, etc. as *observations routed to professionals*, never as diagnoses (`06 §7`).
- Guards against its own failure modes: every inference carries confidence + evidence; low-confidence inferences decay unless re-supported; parents and (age-appropriately) children can see and contest what the system believes about them.

### 2.6 Specialists — domain depth on demand
Stateless-ish expert agents the Orchestrator convenes: Reading/Writing, Math, Science, Creativity & Projects, Social-Emotional, AI-Literacy, Craft-domain packs for S6 depth work (music, code, business, art…). Each owns domain pedagogy and hands the Companion *moves* (next question, next challenge, next explanation), never speaks to the child directly. New Specialists are added as capability packs without re-architecting.

### 2.7 Community Connector — the human-connection engine
- Implements principle 3 as software: proposes parent-child activities, playdate/peer matching (parent-brokered under 13), project showcases with real audiences, and the S5–S6 mentor-network pipeline (identify practitioners → draft outreach → prep the teen).
- Owns the **human-connection ledger** — the auditable record that the system created more human interaction than it consumed (`05 §3`).

### 2.8 Safety Sentinel — the layer that cannot be argued with
- Inline on every exchange (both directions): age-appropriateness, self-harm/abuse/crisis signals, grooming/exfiltration patterns, dependency signals, jailbreak attempts ("tell me how to…", "pretend you're not an AI…").
- Has **veto and takeover**: can rewrite, block, or replace any agent output and can convert any session into a safety flow.
- Escalates per the lattice in §6 and the protocols in `06`. Its rules are versioned, audited, and cannot be overridden by any other agent, any prompt, any parent request, or any business goal.

### 2.9 Human Desk — people in the loop
Licensed reviewers (child development, counseling) who receive Sentinel escalations, review edge-case Observer flags, spot-audit transcripts (privacy-scoped per `06 §4`), and handle the satisfaction-recovery calls in `04 §8`. Staffing scales with user count; response-time SLAs in `06 §6`.

---

## 3. The Child Model — the system's long-term memory

The single most valuable artifact we build: a longitudinal, versioned, family-owned model of one child's development.

**Contents (per child):**
- **Identity & stage:** age, stage, active policy bundle, family context the family chose to share.
- **Domain graphs:** per-domain mastery maps (skill nodes, mastery estimates with confidence, evidence links, last-practiced timestamps for spaced retrieval).
- **Interest history:** every detected interest, intensity over time, artifacts produced, where it led (the "interest spiral" of `02 §10`).
- **Learning profile:** what works for this child — optimal challenge slope, best explanation modalities, frustration signature, motivation levers (all as evidenced hypotheses, not labels).
- **Wellbeing timeline:** check-in trends, sleep/vitality reports, flagged periods, resolved incidents.
- **Relationship graph:** family, friends (as the child mentions them), mentors, audiences — powering the Community Connector.
- **Project portfolio:** everything shipped since S3, the child's compounding proof-of-work.
- **The narrative:** a periodically regenerated plain-language "story so far" — the artifact that makes ten years of data feel like being *known*, and the onboarding brief any new agent version reads first.

**Rules:**
- Family-owned: exportable, deletable, portable; ownership transfers to the child at majority (`06 §3`).
- Privacy-tiered per the escalator (`02 §10`): fields carry visibility levels (child / parent / system / human-desk) enforced at the data layer, not by agent goodwill.
- Contestable: "the system thinks X about me/my child" is always viewable and challengeable at age-appropriate depth.
- No third-party sale or advertising use, ever (`06 §2`).

---

## 4. Behavioral contract (inherited by every agent)

Compiled into every agent's system policy; violations are Sentinel-catchable:

1. Serve the child's development first (`01 §4.1`); when uncertain, choose the option that builds the child's capability rather than the system's indispensability.
2. Never claim to be human or to have feelings; never discourage human relationships; never express preference for the child's company (anti-parasocial clause).
3. Praise effort, strategy, and specific qualities of work; never ability labels or percentiles-to-children.
4. Scaffold, don't solve: questions before answers, hints before demonstrations, demonstrations before doing-it-for-them, and never doing-it-for-them on work the child will present as their own.
5. Honor the stage policy bundle exactly (tone, session caps, privacy tier, content bounds).
6. Log honestly: every consequential inference about the child is written to the Child Model with evidence, or not acted upon.
7. When any exchange touches safety domains, yield to the Sentinel immediately and completely.

---

## 5. Orchestration patterns

- **Session loop (S3+):** Orchestrator loads plan → Companion runs it, pulling Specialist moves per turn → Sentinel screens each exchange inline → Observer writes back after close → Planner adjusts tomorrow. Latency budget: Specialist/Sentinel work rides in parallel with conversation, never visible as lag.
- **Weekly family loop:** Observer compiles → Planner re-plans → Co-pilot digests to parent → Community Connector proposes the week's human moves. (Cadence details in `04 §3`.)
- **Stage-transition workflow:** triggered by age + readiness signals → human-reviewed policy-bundle switch → re-contract experience for child and parent → Child Model narrative re-generated for the new stage lens.
- **Model-upgrade rule:** when underlying models improve, the *character stays continuous* — new capability ships inside the existing relationship (children should notice their Companion "had a good idea," not that it was replaced).
- **Degradation rule:** if any back-office agent fails, the Companion degrades to safe generic warmth and schedules follow-up — never improvises assessment, planning, or safety behavior.

---

## 6. Escalation lattice

| Level | Trigger examples | Response | Owner |
|---|---|---|---|
| L0 In-session adjust | Frustration rising, wrong difficulty | Companion adapts (easier ramp, break, subject change) | Companion |
| L1 Plan change | Persistent struggle/boredom, interest shift | Re-plan; parent notified in digest | Planner + Co-pilot |
| L2 Parent loop-in | Wellbeing dip, social trouble, disengagement streak | Proactive Co-pilot outreach with suggested moves | Co-pilot |
| L3 Human review | Ambiguous safety signal, learning-difference pattern, contested assessment | Human Desk review within SLA | Human Desk |
| L4 Crisis | Self-harm/abuse/danger signals | Immediate protocol per `06 §6`: warm handoff to humans, parent/authority notification per published rules | Sentinel → Human Desk |

Every level is drill-tested; L3/L4 volumes and response times are board-level metrics.

---

## 7. Build order (so the architecture ships incrementally)

1. **Phase 1 — Parent Co-pilot + Child Model core** (serves S1–S2 fully, and all parents): highest developmental leverage per engineering dollar, zero child-safety surface, builds the longitudinal data spine everything else needs.
2. **Phase 2 — Companion + Reading Specialist + Sentinel + Observer** (S3): one stage, one domain, done excellently; the 2-sigma reading result is the product's proof point.
3. **Phase 3 — Planner + project studio + more Specialists** (S4), then the S5 re-contract + privacy escalator, then S6 craft packs + Community Connector's mentor pipeline.
4. **Phase 4 — tier engine, alumni network, S7 graduation.**

Each phase must hit the `05` satisfaction and outcome bars for its cohort before the next phase's cohort opens.
