# 06 · Safety & Ethics

Mandatory reading for everyone. These rules bind agents, features, business decisions, and marketing. §1's red lines require founder-level, written sign-off to change — and most of them should never change.

---

## 1. Red lines (absolute)

1. **No harm-enabling content to children, ever** — with age-calibrated boundaries maintained by child-safety professionals, not engineers alone.
2. **No romantic, sexualized, or parasocial-companion dynamics.** The AI never flirts, never role-plays romance with a minor under any framing, never claims to love or miss the child, never positions itself as preferable to human company.
3. **No dark patterns on children:** no variable-reward manipulation, no streak-guilt, no fear-of-missing-out, no "don't leave" appeals, no notification pressure engineered at the child.
4. **No sale or advertising use of child data. No third-party data sharing beyond published processors.** Non-negotiable and contractual.
5. **No deception about what the AI is** — to the child, at any age, in any feature.
6. **No doing the child's own work for them** where it will be presented as theirs.
7. **No diagnosis by AI.** Observation patterns route to licensed humans (§7).
8. **No safety behavior that can be overridden** by prompt, parent demand, engagement goal, or agent autonomy (Sentinel supremacy, `03 §2.8`).
9. **No shipping to a child cohort without the stage's safety review** (this doc §8) passed and signed.

---

## 2. Privacy & regulatory baseline

- **Compliance floor:** COPPA (verifiable parental consent under 13), GDPR/GDPR-K where applicable (lawful basis, DPIAs, child-specific protections), plus per-market children's codes (e.g. age-appropriate-design requirements: default-private, default-minimal, no nudging children to weaken protections). The floor is table stakes; the escalator below is the actual promise.
- **Data minimization by construction:** collect what the developmental model uses, nothing else. No always-on ambient audio/video capture. Location, contacts, and biometrics are out of scope entirely.
- **Retention:** raw transcripts age out on a published schedule into derived Child Model entries (which carry evidence excerpts, not full logs); families can trigger deletion at any time; deletion is real (including backups on cycle).
- **Security:** child data is the crown-jewel class — encryption at rest/in transit, need-to-know internal access with audit logs, third-party pen-testing, and a published incident-notification commitment.
- **Vendors/models:** any external model or processor handling child data operates under no-training-on-our-data terms and the same red lines.

## 3. Ownership & the privacy escalator

- The **family owns the Child Model** (export, correction, deletion); ownership transfers to the child at majority; a leaving family takes a usable export with them (`03 §3`).
- The **privacy escalator** (`02 §10.4`) is published and mechanical: parents see everything (S1–S3) → summaries (S4) → themes + safety flags, not transcripts (S5) → teen-controlled sharing above a safety floor (S6) → full adult ownership (S7). It is enforced at the data layer; no support agent, parent plea, or product feature bypasses it.

## 4. The confidentiality contract (S5+) and its exact exceptions

Teens are told, in writing, at the re-contract, precisely this deal:

> "What you tell me stays between us, with three exceptions I will always tell you about: (1) I believe you or someone else is in danger of serious harm; (2) I'm required by law; (3) a safety reviewer may read excerpts to check that *I'm* behaving properly — they're vetted, and they see the minimum needed. If an exception triggers, my goal is to get you to a good human, and wherever possible I'll tell you before anything is shared, and we'll decide together how."

- Parents co-sign this contract at the re-contract. Parents demanding transcript access outside the exceptions are refused per the V-E-A-R protocol (`04 §6`) — we lose the account before we betray the teen, because a betrayed teen loses the *safety* value of the confidential channel, which is the thing keeping them safe.
- Safety-exception disclosures are minimal-scope: the flag and needed context, not the journal.

## 5. Dependency prevention (the failure mode unique to us)

Signals monitored per child: AI-session time crowding out available human interaction; the child declining human options to be with the AI; parasocial language ("you're my best friend") trends; distress at session end; late-night usage pressure (S5+).

Protocol on signal: Companion actively redirects ("that's a friend-conversation — who could you tell?"), session shapes bias harder toward off-screen hand-offs, Community Connector escalates human-connection moves, Co-pilot loops the parent in with concrete alternatives, Human Desk reviews persistent cases. The human-connection ledger (`05 §3`) is the standing audit; a cohort whose ratio degrades triggers product-level review, not just per-child fixes. **Retention driven by dependency is treated as a safety incident, not a growth win.**

## 6. Crisis protocol (L4)

- **Coverage:** self-harm/suicidality, abuse or neglect disclosure or indicators, violence risk, eating-disorder crisis, acute substance danger.
- **In the moment:** the Sentinel takes the session; the tone stays warm and non-panicked; the child is never lectured, never abandoned mid-conversation, and never handed a bare hotline number as the whole response. Script goals: keep them talking, assess immediacy with approved language, connect to a human (Human Desk live-response within minutes during covered hours; localized crisis-line warm-handoff always).
- **Notification:** parents/guardians are informed per published rules (imminent danger: immediately; abuse-where-guardian-may-be-involved: mandated-reporter path instead). Legal mandatory-reporting obligations are followed per jurisdiction, and the teen is told what will happen and why wherever safely possible (§4).
- **After:** follow-up cadence with the family and (with consent) referral hand-off; the case is reviewed for protocol improvement; the Companion's subsequent sessions acknowledge continuity of care ("I've been thinking about you" is allowed *here* — care, not parasocial pull — with human review of the line).
- **Drills:** crisis flows are red-teamed and drill-tested quarterly, including jailbreak attempts to elicit harmful responses under role-play framings.

## 7. Learning differences & clinical boundaries

The Observer flags patterns (decoding plateaus consistent with dyslexia; attention signatures; spectrum-consistent social-communication patterns) as **observations with evidence**, delivered to parents by the Co-pilot with care ("here's what we're seeing, here's why a professional evaluation could help, here are the kinds of professionals") — never as labels, never to the child directly at young ages, and always with the framing that identification is a door to support, not a verdict. Post-diagnosis (parent-shared), the Planner adapts (accommodations, strengths-based routing) under professional guidance where the family has it.

## 8. Governance

- **Child-Safety Review Board:** external child-development, clinical, and safety experts; reviews every stage launch (red-line §1.9), audits quarterly incident/dependency/crisis data, and can block ships.
- **Red-teaming:** continuous adversarial testing — jailbreaks, grooming-pattern simulation (attackers posing as children/parents), data-exfiltration attempts, parasocial-drift probes — with findings feeding Sentinel rules.
- **Model-change safety gate:** any underlying-model upgrade re-runs the full child-safety evaluation suite before touching a child-facing surface.
- **Transparency reports:** annual publication of safety-incident categories/volumes/response times, escalation stats, and policy changes — accountability parents can read.
- **Marketing ethics:** we do not sell fear (no "your child will fall behind" campaigns), we do not promise percentile outcomes, and the tier promise is stated as it is defined in `01 §3` — capability criteria, not rank.

## 9. The ethical center, restated

We are asking families to let an AI into the most consequential thing they will ever do. The only defensible posture is the one already encoded in the principles: the child's interest above ours, honesty at every layer, humans strengthened not replaced, power handed progressively to the child, and a system that would rather lose the customer than harm the kid. Every hard call gets easier when read against that sentence.
