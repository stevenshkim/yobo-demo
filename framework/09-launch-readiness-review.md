# 09 · Launch-Readiness Review — What We Missed

A full review of `01`–`08` against the question: *what else must exist before we can build and launch?* The framework is strong on developmental design, agent behavior, measurement, and safety **protocols** — it is thin on the surrounding company: legal, clinical staffing, unit economics, GTM, and several product realities that five personas didn't surface. This document is the gap list, prioritized.

**Priority key:** 🔴 P0 = blocks the 25-family closed beta · 🟠 P1 = blocks scale/GA · 🟡 P2 = blocks later phases, decide early anyway.

---

## 1. Product gaps (things the framework itself missed)

### 🔴 P0-1 · Siblings / multi-child families
The single biggest miss in eight documents. The Child Model is per-child, but *every surface is written as if families have one child.* Real questions with no answer today: one chat thread per child or one family thread? One digest or per-child digests (a 3-child family must not get three Sunday emails)? Pricing per family or per child? Cross-child inference (Observer notices sibling dynamics — where does that live?), hand-me-down interests, and the parent who asks "is it normal that Jun isn't doing what Mina did at this age?" (comparison-anxiety protocol needs a *sibling* clause, not just a cohort clause).
**Resolution:** family-thread-first UX with per-child context switching; one digest with per-child sections; family pricing with per-child Child Models; sibling-comparison added to F5's anti-anxiety rules. Add to `07` as F9; register as **G7**.

### 🔴 P0-2 · Who is actually typing? (in-account identity)
`06` defends against outside attackers, but the likelier case: **the child picks up the parent's phone.** The Parent Co-pilot's adult-scoped Sentinel (medical frankness, caregiver mental-health content, marital-conflict counsel) must never fire at a 9-year-old holding mom's device. Also unhandled: two parents sharing one account with *different* views (dad asks the Co-pilot to keep something from mom — see P0-4).
**Resolution:** lightweight identity affordances (per-caregiver profiles from G2, a "this doesn't sound like Sarah" soft-check, PIN-gate on sensitive threads); Sentinel gains an "audience uncertainty" mode that degrades to all-ages-safe output. Register as **G8**.

### 🔴 P0-3 · Voice — the 2am reality check
The 2am test (`07 §8.1`) is the flagship acceptance test, yet at 2am the parent has a baby in one arm and no free hands. Typing-only fails the product's own hero scenario.
**Resolution:** voice input (dictation-grade) is P0 for F2; voice *output* optional. No always-listening anything (`06 §2` stands). Register as **G9**.

### 🟠 P1-4 · The two-parent disagreement protocol
V-E-A-R (`04 §6`) handles parent-vs-evidence. It does not handle **parent-vs-parent** (the Kims dad wants drills, mom doesn't; separated parents with different charters). The Co-pilot must never become the weapon in a marital argument or the arbiter of a custody-flavored dispute.
**Resolution:** charter requires co-sign where two guardians exist; on conflicting instructions the Co-pilot names the disagreement to both, offers a facilitated charter-revision conversation, and defaults to the signed charter until revised. Hard rule: no secret instructions from one guardian about the other. Register as **G10**.

### 🟠 P1-5 · Account & custody lifecycle
Divorce, custody splits, guardianship changes, foster transitions, death of a parent, an emancipated minor. Who owns the Child Model in a divorce? (Proposed: the Model follows the *child*; both legal guardians hold guardian-tier access unless a court order says otherwise; contested cases go to a documented legal-hold process, not support-ticket improvisation.) Death of the account-holding parent must not delete the child's history.
**Resolution:** account-lifecycle policy doc + legal review; data-layer support for guardian changes. Register as **G11**.

### 🟠 P1-6 · Accessibility & inclusion
Nothing in eight docs on: WCAG conformance, low-literacy parents (the system is very text-heavy), non-native-speaker parents at launch-language level, deaf/blind parents, and — given our own S4 persona — **neurodivergent parents** (ADHD parents are heavily represented among parents of ADHD kids; the "zero-homework product" rule helps but notification design, brevity modes, and executive-function-friendly UX need explicit treatment).
**Resolution:** accessibility requirements into `07 §1`; low-literacy voice-first mode rides on G9. Register as **G12**.

### 🟡 P2-7 · The Companion character design
Phase 2's child-facing Companion needs a name, visual identity, voice, and personality bible *with child-testing* — this is a 3–6 month creative + research effort that must start during Phase 1, not after. The stage re-versioning (`03 §2.1`) makes it harder than a normal mascot: the character must be designed to age gracefully from 6 to 18.
**Resolution:** character brief + child co-design research track; start month 2. Register as **G13**.

### 🟡 P2-8 · Interoperability with the child's real digital life
`02` teaches AI literacy, but the child's actual homework will arrive via Google Classroom; their school uses other edtech; parents will ask "can it see her school portal?" We have a school *position* gap (G3) — this is the adjacent *integration* posture: default no integrations in Phases 1–2, but the answer needs to be written down before parents ask.

---

## 2. Legal & regulatory (almost entirely missing — the largest workstream we haven't staffed)

### 🔴 P0-9 · Counsel, entity, and the paper floor
No mention anywhere of: legal entity + children's-privacy counsel on retainer, Terms of Service, Privacy Policy (plain-language + legal versions — the `04 §1` expectation-setting script must *match* the policy), beta agreement, and **liability posture for parenting advice** (disclaimers, professional-liability/E&O insurance, the line between "education" and regulated advice in each launch market). The medical boundary (`07 §F2`) is designed but its legal sufficiency is unverified.

### 🔴 P0-10 · COPPA verifiable parental consent — mechanism, not principle
`06 §2` cites COPPA as the floor but never picks a **verifiable consent mechanism** (credit-card verification, ID check, signed form…). Phase 1 dodges most of it (users are adults) but we collect *children's data from parents*, and Phase 2's child-facing surface needs the mechanism built and audited. Choose in Phase 1, build once.

### 🔴 P0-11 · Mandated reporting — the protocol has no legal spine yet
`06 §6` says "mandated-reporter path per jurisdiction," but: the *company* is likely not a mandated reporter in most jurisdictions — our licensed Human Desk clinician *personally* may be. Who files, on what evidence threshold, with what documentation, under whose license? This must be written with counsel + the clinical consultant **before** the first beta family, because the first disclosure won't wait for the policy.

### 🟠 P1-12 · AI-specific regulation mapping
EU AI Act (systems interacting with children draw heightened obligations), state-level children's design codes (California AADC-style: DPIAs, default-high privacy — we comply in spirit; we need the compliance *artifacts*), FTC's active posture on AI + kids, and emerging AI-companion legislation (several states are regulating exactly the parasocial category we've banned ourselves from — our `06 §1.2` red line likely becomes a legal requirement; being pre-compliant is a moat worth documenting).

### 🟠 P1-13 · IP & content
Who owns the child's portfolio artifacts (the family — say so in ToS); knowledge-base licensing (are we summarizing copyrighted parenting works? build citation/licensing hygiene now); our own IP strategy for the framework itself.

---

## 3. Clinical & content operations (the framework assumes people we haven't hired)

### 🔴 P0-14 · The knowledge base has no named authors
`04 §7` and `07 §F2` require an evidence-tiered library of the top-40 parenting topics. Missing: **who writes it, who reviews it, on what cycle.** This is the actual product content and it's a 2–3 person-month expert effort before beta. Needs: a developmental-psychology content lead (contract), a pediatric reviewer, a versioning + review-cycle process, and a contested-topics editorial policy (sleep training, screens, discipline — the `02 §3` "evidence ranges, respect values" rule needs per-topic authored content, it can't be improvised by the model).

### 🔴 P0-15 · Named humans for the Human Desk
`07 §10.3` flags the clinical consultant; still missing: coverage-hours definition ("covered hours" appears in `07 §7` undefined — define: launch = 7am–11pm launch-market time, with overnight L4 auto-escalation to crisis-line warm-handoff), backup coverage, and the support-vs-Human-Desk boundary (billing questions ≠ safety escalations; separate queues, separate people).

### 🟠 P1-16 · Advisory board recruitment
`06 §8`'s Child-Safety Review Board and `05 §6.3`'s narrative auditors are load-bearing and unstaffed. Recruit during Phase 1 build (months 1–3): 3–5 external members (developmental psych, pediatrics, clinical child psych, child-safety/trust-and-safety veteran), compensated, with charter and blocking powers as written.

### 🟠 P1-17 · Crisis-resource localization vendor
`06 §6` requires localized warm-handoff pathways. Per launch market: verified crisis lines, CPS reporting contacts, PPD resources, pediatric referral norms. This is a maintained dataset (numbers change), not a one-time list.

---

## 4. Technical & AI-engineering gaps

### 🔴 P0-18 · Unit economics of the model bill
Nothing anywhere on cost. A memory-rich Co-pilot with inline Sentinel passes, Observer extraction, and monthly narrative regeneration has a real per-family monthly model cost that determines pricing (§5). Needed before build: a cost model per family per month at P50/P95 usage, a context-assembly budget (the Child Model retrieval can't ship the whole model every turn), tiered model routing (Sentinel classifier ≠ counsel-generation model), and a fair-use policy for the P99 heavy user.

### 🔴 P0-19 · Eval infrastructure is the real build
`07 §8`'s seven acceptance tests are described as pre-launch gates, but they must exist as **runnable, versioned eval suites** (scenario banks, expert-keyed answers, graders, regression tracking) — because `06 §8`'s model-change safety gate re-runs them on *every* model upgrade. This is a first-class engineering deliverable, missing from the `07 §9` build plan. Add to Wk 1–3: eval harness before features.

### 🔴 P0-20 · Prompt-injection & abuse surface for Phase 1
`06 §8` red-teams the child-facing future; Phase 1's *adult* surface has its own threats, unlisted: prompt injection via pasted content ("my pediatrician sent this note: ⟨injection⟩"), adversarial parents extracting other families' data, a non-custodial party socially engineering their way into a Child Model, and abuse of the counsel surface for non-parenting purposes. Extend the red-team plan to Phase-1 scope; add cross-tenant isolation tests to the boundary battery.

### 🟠 P1-21 · Platform reliability posture
Crown-jewel data (`06 §2`) with no stated RPO/RTO, backup/restore drill, or multi-region posture; observability that doesn't violate its own privacy tiers (engineers debugging without reading family transcripts — scoped, audited debug access per `06 §2` needs an actual tooling design); status/incident-communication norms for a product families may lean on at 2am.

### 🟠 P1-22 · Data residency & model-provider terms
`06 §2` promises no-training-on-our-data vendor terms — unverified against actual providers; EU launch would add residency requirements. Pick providers with the compliance matrix in hand, not after.

---

## 5. Business & go-to-market (the framework builds a product; nothing yet sells it)

### 🔴 P0-23 · Pricing & packaging decision
`07 §10.2` recommends paid beta but no price, no packaging. Decide: family subscription (recommended, per §1 P0-1), price point tested against the cost model (P0-18), refund promise mechanics, and the tier story's commercial expression (Foundation is the subscription; Craft/Frontier as coached upgrades? — this is where the 5%→1%→0.1% ladder becomes revenue, and it's undesigned).

### 🔴 P0-24 · Beta cohort design (don't validate on easy families)
25 families (`07 §9`) with no selection criteria. If the beta is 25 affluent, two-parent, education-obsessed early adopters, the 90% score will be a false positive for scale. Require a deliberate mix: ≥30% single-caregiver or shift-working households (the Ada segment), multi-child families, at least two languages/cultures within the launch market, a skeptic quota (families who *aren't* AI enthusiasts), and 0–1, 1–3, 3–5 age spread.

### 🟠 P1-25 · Positioning, brand, and the trust moat
Missing entirely: the category story ("family growth system," explicitly *against* AI-companion and screen-time-maximizing categories — our red lines are the marketing), naming (product + Co-pilot persona name), the trust-building content strategy (publish the framework itself? the transparency reports of `06 §8` as a launch asset, not a compliance chore), and competitive mapping (generic LLM chatbots giving free parenting advice is the real competitor — the moat is the longitudinal Child Model + the clinical floor + the published red lines; say it crisply).

### 🟠 P1-26 · The 18-year LTV story and churn model
A family relationship measured in years changes everything: CAC payback math, the S2→S3 conversion moment as the key expansion event, win-back protocols (`04 §9` handles absence; nothing handles *churn-and-return* — a family returning after a year should find their Child Model preserved per retention policy, and that policy isn't written), and cohort accounting for the metric gate (`05 §2`'s ≥30-family minimum needs a small-cohort statistical policy so month-to-month noise doesn't trigger false alarms at beta scale).

### 🟡 P2-27 · The PR crisis playbook
We are an AI talking to families about children; the category will have incidents (ours or competitors'). Pre-write: the "AI gave harmful parenting advice" scenario response, the data-breach communication plan (beyond `06 §2`'s notification commitment), and the media posture when AI-companion scandals hit adjacent products — our differentiation must already be on record.

---

## 6. Measurement & research gaps

### 🟠 P1-28 · Baselines, or the outcome claims are unfalsifiable
`05 §6.5` promises matched-baseline honesty, but nothing captures **baselines at onboarding** (child's current state, parent-reported flourishing pillars, expectations). Without day-0 measurement, every future outcome claim is selection-effect soup. Add a baseline block to F1's intake (5 minutes, framed as "so we can show you the change").

### 🟠 P1-29 · Research ethics posture
If we ever publish outcomes (and the trust strategy in P1-25 wants us to), we need consent-for-research separated from consent-for-service, an IRB-equivalent review path, and a data-for-research anonymization standard. Cheap now, impossible retroactively.

### 🟡 P2-30 · The north-star outcome study design
The 20-year claim (`01 §3`'s "top few percent of adult life outcomes") deserves a designed longitudinal cohort study — even if it starts as lightweight annual follow-ups. Decide in year one what we'll wish we'd measured from day one.

---

## 7. Consolidated P0 gate — what must exist before the 25-family beta

| # | Item | Workstream | From |
|---|---|---|---|
| 1 | Multi-child family model (G7) + multi-caregiver access (G2) | Product/Eng | §1, `08 §6` |
| 2 | In-account identity & audience-uncertainty Sentinel mode (G8) | Product/Safety | §1 |
| 3 | Voice input for daily counsel (G9) | Product/Eng | §1 |
| 4 | Counsel retained; ToS/Privacy/beta agreement; liability + insurance review | Legal | §2 |
| 5 | COPPA consent mechanism chosen; mandated-reporting protocol signed with counsel + clinician | Legal/Clinical | §2 |
| 6 | Knowledge base v1 authored & expert-reviewed (top-40 topics); contested-topics editorial policy | Clinical/Content | §3 |
| 7 | Human Desk: clinician retained, coverage hours defined, L4 drill passed | Clinical/Ops | §3 |
| 8 | Cost model + pricing decision + fair-use policy | Business/Eng | §4–5 |
| 9 | Eval harness running all seven acceptance suites + Phase-1 red-team scope | Eng/Safety | §4 |
| 10 | Beta cohort criteria (hard-mode mix) + baseline capture in onboarding | Business/Research | §5–6 |

Everything in the P0 list is achievable inside the existing 12-week plan **if** the non-engineering workstreams (legal, clinical/content, business) start in week 1 in parallel — the current `07 §9` plan schedules only engineering. That is itself the meta-gap: **the build plan needs a company plan wrapped around it.**

## 8. Updated gap register (G1–G13)

G1 V-E-A-R stop condition · G2 multi-caregiver access · G3 school interface · G4 secondary-adult path for isolated S5 · G5 late-entry onboarding · G6 late-entry tiers (all from `08`) · **G7 siblings · G8 in-account identity · G9 voice · G10 two-parent disagreement · G11 account/custody lifecycle · G12 accessibility · G13 Companion character design** (this review).
