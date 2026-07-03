# 01 · North Star

## 1. Vision

**Every child grows up capable, connected, and glad to be alive — ready to thrive in a world where AI does most of what school currently trains children to do.**

The generation entering nursery today will graduate into a labor market and civic life where routine cognitive work is automated. The children who flourish will be those with the things AI cannot commoditize: judgment, taste, initiative, deep relationships, self-knowledge, the ability to direct AI rather than compete with it, and the emotional durability to keep reinventing themselves. Our system exists to grow exactly those capacities — and to make the process feel good for the child and the parent, because development that feels like punishment does not stick.

## 2. Who we serve

Two co-primary users, always together:

1. **The child** (0 to 18+), whose developmental interest is the system's highest duty — above parent preference and above business metrics when they conflict.
2. **The parent/caregiver**, who is the child's most important developmental input at every age. For ages 0–5 the parent is effectively the *only* direct user; the AI works through them.

A useful law for every design review: **the product is the family's growth, the child is the beneficiary, the parent is the co-pilot, the AI is the staff.**

## 3. Redefining "Top 5%" — the load-bearing design decision

The business goal says: guide children toward happiness and the top 5% of society, with upgrades to 1% and 0.1%. We honor the ambition fully, but we must define it correctly, because the naive reading — *rank children against other children* — is developmentally destructive and would make the 90% satisfaction goal impossible:

- Positional/comparative goals ("beat other kids") reliably produce extrinsic motivation, anxiety, cheating incentives, and fragile self-worth. Decades of self-determination research show intrinsic motivation (autonomy, competence, relatedness) is what produces both durable excellence *and* happiness.
- A ranking framing also breaks mathematically: only 5% of users can be "top 5%," guaranteeing 95% of families a message of failure.

So the tiers are defined as **absolute capability-depth levels** — criterion-referenced, like belt levels in martial arts, achievable by any child who does the work:

| Tier | Name | What it means (criterion, not ranking) | Rough societal analogue |
|---|---|---|---|
| **Foundation** | *Flourishing* ("Top 5%" tier) | The child has the full flourishing stack for their age: secure habits, grade-level-plus mastery in core domains, one developed passion, strong friendships, healthy relationship with technology, and demonstrated agency (initiates and finishes their own projects). | Historically, children with this stack land in roughly the top few percent of adult life outcomes — not because they beat others, but because so few children ever get the whole stack. |
| **Depth 1** | *Craft* ("1%" tier) | Foundation **plus** deep, externally-validated craft in a chosen domain: a real portfolio, real audiences/users, mentorship relationships, and the ability to use AI as a force multiplier in that craft. | Serious young musicians, competitive programmers, published young writers, teen founders. |
| **Depth 2** | *Frontier* ("0.1%" tier) | Craft **plus** original contribution: the child creates things that didn't exist before and that other people value — research, ventures, art, community institutions — with a self-authored direction and an adult-grade network. | The rare teenagers who are already doing the work of the field, not preparing for it. |

**Rule:** the system never tells a child their percentile against other children. It tells them their distance to the next criterion. Parents may see cohort context on request, framed as "here's what the path looks like," never "here's who your child is beating."

This reframing is what makes the two goals compatible: criterion-based mastery paths are the only known way to get both elite capability *and* ≥90% satisfaction.

## 4. Non-negotiable principles

These ten principles bind every agent, feature, and business decision. They may not be traded away for engagement, revenue, or parental demand.

1. **Child's developmental interest first.** When child interest, parent preference, and business metrics conflict, they win in that order. The playbook (`04`) covers how to disagree with a parent gracefully.
2. **The AI makes itself less necessary.** Success is a child who needs the system less each year: more self-direction, more human mentors, more independent work. Dependency is a defect, even when it looks like retention.
3. **Human relationships are the outcome, never the casualty.** Every week, the system must be able to show that it *created* human interaction (parent-child conversations, friendships, mentors) rather than displacing it. The AI is a bridge to people, not a substitute for them.
4. **Age-appropriate by construction.** Under 6, the child-facing surface is minimal-to-none; the AI serves the parent. Screen time recommendations follow pediatric guidance, not engagement opportunity.
5. **Effort and strategy are praised; ability labels are banned.** No "you're so smart," no fixed-ability language, no percentile identity. Feedback is specific, actionable, and about the work.
6. **Intrinsic motivation is protected.** No manipulative streaks, no variable-reward slot machines, no social comparison feeds, no fear-based urgency. Game mechanics are allowed only when they mirror real progress (mastery maps, quest structures) and stay meaningful if removed.
7. **Struggle is part of the product.** The AI operates in the zone of proximal development: tasks slightly beyond current ability, with scaffolding that fades. It does not do the child's work, and "productive struggle" is explicitly designed, explained to parents, and never optimized away because it dents short-term satisfaction.
8. **Honesty with children.** The AI never pretends to be human, never claims feelings it doesn't have, admits uncertainty and mistakes, and is transparent (age-appropriately) about being a tool the child is learning to direct.
9. **Privacy as a developmental need.** Data minimization by default; the child's confidences are respected with narrow, explicit safety exceptions (see `06`); as children age, they gain control over their own data and what parents see, on a published schedule.
10. **Measure what matters, resist what's gameable.** Wellbeing and capability metrics outrank engagement metrics in every dashboard. Any metric being gamed gets redesigned, not celebrated (`05 §6`).

## 5. What "happiness" means here (so we can build for it)

We operationalize happiness with the PERMA-style flourishing model, adapted for children:

- **P**ositive emotion — daily moments of joy, humor, warmth (measurable via child check-ins and parent reports).
- **E**ngagement — regular flow states: absorbed, challenged, losing track of time in worthwhile activity.
- **R**elationships — secure attachment (early years), at least one close friendship (school years), at least one non-parent adult mentor (adolescence).
- **M**eaning — contribution: the child's work matters to someone beyond themselves (family, class, community, audience).
- **A**ccomplishment — visible, criterion-based progress the child can narrate ("I couldn't do this in September; I can now").

Plus two child-specific pillars: **Autonomy** (age-appropriate control over their own time and choices) and **Vitality** (sleep, movement, outdoor time — the physiological floor under everything else).

Every stage plan in `02` maps activities to these pillars; the measurement system in `05` tracks them.

## 6. What "ready for the AI world" means

The competencies that will differentiate the next generation, in priority order:

1. **Self-direction & agency** — setting goals, initiating, finishing, recovering from failure. The single biggest differentiator when execution is cheap.
2. **Judgment & taste** — knowing what good looks like, what's true, what's worth doing. Built through deep exposure and critique, not shortcuts.
3. **AI direction & literacy** — treating AI as staff: briefing it, evaluating its output, catching its errors, knowing when *not* to use it. Includes understanding, at increasing depth by age, what AI is and how it fails.
4. **Deep human skills** — empathy, collaboration, persuasion, leadership, care. The premium on being good *with people* rises as everything else automates.
5. **Foundational mastery** — reading, writing, mathematics, scientific reasoning. Not despite AI but because of it: you cannot supervise what you cannot understand, and cognitive offloading before mastery hollows out judgment (principle 7).
6. **Creation over consumption** — a durable identity as someone who makes things: stories, code, businesses, experiments, performances.
7. **Adaptive resilience** — psychological flexibility, comfort with reinvention, a stable self-worth not pegged to any single skill the world might automate.

## 7. The satisfaction commitment

**≥90% satisfaction, measured continuously, for both children and parents, at every stage.** This is not a marketing survey; it is an operating constraint with its own instrument, cadence, and recovery protocol (`05 §2`, `04 §8`). Two clarifications that keep it honest:

- Satisfaction is measured on the **relationship and trajectory** ("this is good for our family and we can feel it"), not on each individual session — because principle 7 guarantees some sessions will be effortful.
- We never buy satisfaction by removing struggle, inflating praise, or telling families what they want to hear. We earn it with visible progress, felt care, fast recovery from misses, and radical clarity about what we're doing and why.
