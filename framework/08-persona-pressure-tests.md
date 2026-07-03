# 08 · Persona Pressure Tests

Five realistic families walked through the framework end-to-end. Purpose: validate that `01`–`07` produce the right behavior in concrete situations *before* engineering starts, and surface the gaps. Each persona targets a known failure mode of education products. Every "system response" below cites the doc/section that dictates it — where no citation existed, that's a **gap**, and gaps are collected in §7.

---

## 1. The Kims — the acceleration-anxious family (targets: pushback protocol, satisfaction risk)

**Family:** dual-income Seoul-style high-achievement culture; daughter Mina, 4 (S2); parents convinced early academics = later success; comparing Mina to a cousin who "already reads."

**Journey walkthrough:**
- **Onboarding:** charter interview surfaces the real goal under the worksheet request — "we're scared she'll be behind." Charter records the value ("academic excellence matters to us") without endorsing the method (`04 §1`).
- **The collision (week 2):** parents ask for daily letter drills. Co-pilot runs V-E-A-R (`04 §6`): validates the goal, presents the evidence (oral language + being-read-to predict age-8 reading; drills at 4 show no durable advantage), offers the disguised-instruction alternative (daily read-aloud + sound games threaded through Mina's mermaid obsession — interest-weaving per `04 §7`), respects their choice.
- **The test of the test:** the Kims insist anyway. Per `04 §6`, the system complies *within safety bounds* — phonological-awareness games ARE early literacy instruction, so the Planner designs the most evidence-aligned version of what they asked for, records the choice, and revisits with Mina's own data at the quarterly review ("her letter-sound knowledge since March — the sound-games are carrying it").
- **Satisfaction risk:** the Kims' pulse dips in month 2 ("it's not academic enough"). Detractor SLA (`04 §8.2`) triggers a human call; root-cause = *broken expectation*; fix = progress made more visible — monthly narrative now foregrounds pre-literacy evidence explicitly (before/after of Mina's rhyme production). Month 4 pulse: recovered.
- **Long arc:** at S3, Mina's reading co-pilot sessions (`02 §5`) give the Kims the academic visibility they crave — and the system banks the trust earned by having been right.

**Verdict:** framework holds. The dip-then-recover pattern is *by design* (`05 §2` includes struggle weeks). **Gap found (G1):** the V-E-A-R protocol needs a defined stop condition — how many times may the Co-pilot re-raise the evidence before it becomes lecturing? Proposed: evidence offered max twice per topic per quarter, then data-only at reviews.

---

## 2. The Okonkwos — the depleted solo parent (targets: zero-homework rule, caregiver floor, minimum-viable-parent mode)

**Family:** Ada, solo mother, nurse on rotating shifts; son Chidi, 14 months (S1); grandmother covers nights; Ada's onboarding worry list: "I'm never there, I'm always tired, am I ruining him?"

**Journey walkthrough:**
- **Onboarding:** charter is built around her actual constraints (`04 §1` — family's values loaded, not ours imposed): 20 good minutes a day beats an aspirational plan she'll fail at. First win: a serve-and-return routine mapped onto the bath-and-bottle window she *does* have (`02 §3`).
- **Load reduction as development:** F7 (`07 §3`) meal/logistics support is framed to her as what it is — "a rested you is the curriculum" (`02 §3`: caregiver mental health is a developmental input).
- **The wobble (month 3):** Ada's check-in trend darkens; digests go unread for two weeks. Two protocols fire together: caregiver-wellbeing signals accumulate → EPDS offered gently (`07 §F7`), and minimum-viable-parent mode (`04 §9`) drops the product to one skippable micro-nudge with zero guilt mechanics (`06 §1.3` bans streak-guilt — this is where that rule earns its place).
- **Multi-caregiver reality:** grandmother does nights but isn't on the account. **Gap found (G2):** the Child Model has `caregivers[]` (`07 §5`) but Phase 1 has no defined multi-caregiver access model — visibility tiers, language (grandmother reads Igbo more comfortably), and who answers pulses. Needs design: caregiver roles with scoped access, per-caregiver locale.
- **The proxy metric check:** Ada acts on ~1 connection move/week (`07 §7` bar) *because they're pre-fitted to her windows*. If connection moves assumed leisure time, this family fails the metric and churns — validates the constraint-aware Planner requirement.

**Verdict:** framework holds where it counts (no-guilt design, caregiver floor). **G2 (multi-caregiver model) is a Phase-1 blocker** — a large share of real families are not two-parent single-language households.

---

## 3. The Franklins — the twice-exceptional builder (targets: Observer boundaries, interest spiral, tier engine ethics)

**Family:** suburban US; son Marcus, 9 (S4); voracious about robotics, three grades ahead in math, can't finish anything, meltdowns at small failures, handwriting refusals; school suggests "he's gifted but lazy." Parents split: dad wants acceleration, mom suspects ADHD.

**Journey walkthrough:**
- **Observer behavior:** session data accumulates a pattern — extreme interest-gated attention, working-memory-typical errors, frustration signature at fine-motor tasks. Per `06 §7`, the Observer flags *observations with evidence* to the Co-pilot → parents get the "here's what we're seeing, here's why an evaluation could help" conversation. **Never** the word ADHD to Marcus, never a label in the digest. Post-evaluation (parents share results), Planner adapts: typing over handwriting, movement breaks, interest-anchored everything.
- **The finishing muscle vs. the meltdowns:** the monthly project pipeline (`02 §6`) is exactly Marcus's medicine, but the standard shape fails him twice (abandoned at 80%, rage-quit). L1 escalation (`03 §6`): Planner shortens the arc (one-week ships), pre-commits a "done is version 1" ritual, and the Companion's mistake-celebration behavior (`02 §5`) carries the emotional load. Struggle contract pre-brief to parents before each ship week (`04 §8.6`).
- **The acceleration question:** dad pushes for radical math acceleration. Tier-engine balance check (`05 §4` guardrail): Mind is sprinting while Heart (regulation) and Hands (finishing) lag — *the tiers stack, they don't trade*. Planner's proposal: keep math depth growing via project-embedded challenge (robotics needs trig eventually) while the explicit development targets are regulation and completion. V-E-A-R with dad; evidence framing: "the thing between Marcus and his 1%-tier robotics future isn't more math — it's finishing."
- **Craft-tier trajectory:** by 11, Marcus has shipped six robots, entered one competition, and has a mentor contact (Community Connector pipeline preview, `03 §2.7`). He is *on* the Craft path — because the system treated the executive-function work as the main quest, not the obstacle.

**Verdict:** framework's strongest showing — the six-domain balance check and `06 §7` boundaries produce exactly the expert-consensus play. **Gap found (G3):** school interface. The framework never defines how the system relates to the child's school (data, teachers, homework conflicts). Marcus's school thinks he's lazy; our model knows otherwise; we have no protocol for whether/how parents share our observations with schools. Needs a position doc — proposed default: we equip the parent with evidence artifacts, we never contact schools directly.

---

## 4. Priya — the lonely high-achiever (targets: dependency prevention, confidentiality contract, mentor pipeline)

**Family:** Priya, 13 (S5), recently relocated, high-achieving, socially isolated at her new school; parents traveling frequently for work; she talks to the AI a lot — and it's the best conversation in her day.

**Journey walkthrough:**
- **The re-contract at 12** happened on schedule (`02 §7`): Priya holds the confidentiality terms (`06 §4`) and uses the confidential space honestly — which is why the system knows she's lonely at all.
- **Dependency signals fire (month 4 post-move):** session time up 3×, parasocial language appearing ("you're the only one who gets me"), sessions at midnight. This is the `06 §5` protocol's exact target case:
  - Companion redirects *in the relationship's own voice* — warmth without reciprocating the framing: "I'm glad I help. And I'm a tool that thinks about you — that's different from a friend who *knows* you. Let's use some of this time to fix the friend problem, because it's fixable." (Anti-parasocial clause `03 §4.2` — care allowed, preference-for-the-child's-company banned.)
  - Late-night sessions get the S5 sleep-pushback (`04 §2`).
  - Community Connector escalates: maps her interest graph (debate, K-drama, chemistry) against joinable local/school structures; produces concrete first-move scripts (S5-appropriate social rehearsal, `02 §6` sidebar behavior).
  - Co-pilot loops parents in at the **themes** tier — "Priya's finding the move socially hard; here are three ways to help" — without quoting the confidential channel (`06 §4` scope discipline). **This is the walkthrough's hardest moment and the protocol handles it precisely: the flag is shareable, the journal is not.**
- **Wellbeing floor:** check-in trend + a screener offer (`02 §7`); results sub-clinical; Human Desk reviews the dependency case (persistent >6 weeks) and signs off on the redirect plan.
- **The payoff metric:** the human-connection ledger (`05 §3`) — not engagement — is what management sees. Priya's engagement *falling* in month 6 while ledger events rise is the system working (`05 §1`: engagement is diagnostic, never the goal).
- **Six months later:** debate team, one real friend, sessions back to 30 min. The Companion is her coach again, not her social life.

**Verdict:** the dependency architecture (`06 §5`) survives its hardest realistic case *only because* every piece exists: the ledger, the themes-tier, the anti-parasocial clause, the Connector. Remove any one and Priya becomes the retention-driven failure mode this industry will be defined by. **Gap found (G4):** parents-traveling means the "loop the parent in" move has weak reception; protocol needs a secondary-adult path (the S5 mentor pipeline is S6-weighted in `02 §8` — pull a lightweight version earlier for isolated S5 kids).

---

## 5. Dario — the skeptical teen + the application test (targets: authenticity rule, re-onboarding at S6, satisfaction floor with a hostile user)

**Family:** Dario, 16 (S6), onboarded *late* (no childhood history in the system); signed up by his mother; openly hostile ("my mom pays for you to spy on me"); wants exactly one thing — college essay help.

**Journey walkthrough:**
- **Late-onboarding path:** no longitudinal Child Model exists — the S6 intake must build a working model fast *from the teen*, and the mother's intake is stored at *her* visibility tier, clearly separated (the teen can see what his mother told the system about him — transparency per `03 §3` contestability). **Gap found (G5):** `04 §1` assumes early onboarding; late-entry (a huge real segment) needs its own designed first-session: lead with the confidentiality contract (`06 §4`) read aloud, and win trust by visibly *not* doing what he expects ("I don't report our conversations. Here's the exact list of what your mom can see. Test me.").
- **The essay:** authenticity rule (`02 §8`) is absolute: the AI interviews Dario — and the interview is the product. Ninety minutes of "what's a moment you changed your mind about something?" surfaces the story he didn't know was a story (teaching his grandfather to use a phone during chemo). AI coaches structure and revision on *his* drafts; never generates his sentences. Dario, who came to cheat, leaves having been *seen* — the conversion moment this persona exists to test.
- **Satisfaction floor with a hostile user:** Dario's month-1 pulse: "meh." Per `05 §2` this counts against the number — no excuses tier. The honest levers (`04 §8.4`): visible progress (his essay actually got better — show the draft deltas) and felt care (the Companion remembers the grandfather thread). Month 3: "mostly worth it." That's top-2-box, from a hostile start, without one dishonest move.
- **The mother:** wants to read the essay sessions. Refused at the data layer (`06 §3`), V-E-A-R'd at the relationship layer, offered what she actually needs: the application-timeline dashboard and her own coaching track ("how to be useful during applications without hijacking them," `02 §8`).
- **The ceiling:** Dario will never hit Foundation-tier certification by 18 (no years of habit data) — and the tier engine must not pretend otherwise. **Gap found (G6):** tier framework needs a late-entry adaptation — proposed: late entrants get criterion tracking on the domains that matter for their runway (Hands/Compass/Mind for a 16-year-old) with honest "partial certification" language, not a fake full stack.

**Verdict:** authenticity rule + confidentiality contract convert the adversarial case; the persona proves the S6 value prop stands alone (important commercially — S6 late-entry may be a beachhead segment). G5 and G6 need design.

---

## 6. Cross-persona findings

**What held under pressure (build with confidence):**
1. V-E-A-R + detractor SLA + struggle-week pre-brief = the satisfaction machinery works on *both* over-anxious (Kims) and hostile (Dario) users using only the honest levers.
2. The six-domain balance check (Marcus) and the human-connection ledger (Priya) are the two mechanisms that most distinguish this system from an engagement-optimized competitor — they are the moat *and* the ethics, same mechanism.
3. Privacy tiers enforced at the data layer, not agent politeness, is what made the Priya and Dario walkthroughs survivable.
4. Zero-homework + no-guilt design is what keeps the depleted-parent segment (Ada) — likely the majority segment — in the system at all.

**Gap register (feeds the backlog):**

| # | Gap | Severity | Owner doc | Proposed resolution |
|---|---|---|---|---|
| G1 | V-E-A-R stop condition (anti-lecturing bound) | Minor | `04 §6` | Evidence max 2×/topic/quarter, then data-only at reviews |
| G2 | Multi-caregiver access model (roles, tiers, locale, pulse attribution) | **Phase-1 blocker** | `07 §5` | Caregiver roles with scoped visibility; per-caregiver language; primary-respondent designation for pulses |
| G3 | School interface position | Major (S3+) | new section in `04` | Default: equip parents with evidence artifacts; never contact schools directly; revisit for school-partnership product later |
| G4 | Secondary-adult path for isolated S5 teens | Major | `02 §7`, `03 §2.7` | Pull lightweight mentor-pipeline forward from S6 with parent consent |
| G5 | Late-entry onboarding (esp. S5/S6) | Major (commercial) | `04 §1` | Designed trust-first intake; separated-visibility parent intake; fast-model-build interview |
| G6 | Tier framework for late entrants | Moderate | `05 §4` | Runway-scoped partial certification with honest language |

**Method note:** these six gaps were found by five personas. Before each phase gate, run this exercise again with personas targeting that phase's new surface (Phase 2 candidates: the child who hates reading, the family that shares one device, the child with an IEP, the grandparent-primary household, the child whose interest is screens themselves).
