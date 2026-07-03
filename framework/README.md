# Yobo Child Development AI — Framework & Playbook

**Foundation documents for an agentic AI system that helps the next generation of children grow well in an AI-transformed world.**

Version 0.1 · July 2026 · Owner: steven@yobo.id

---

## What this is

This is the master framework and operating playbook that every product, engineering, content, and AI-agent design decision must trace back to. It is written by/for the role of a child-development and education expert, and it is deliberately opinionated: where popular demand and developmental science conflict, science wins and the playbook explains how to bring parents along.

## The mandate

1. Build an agentic AI system serving children from nursery (0–3) through elementary, middle, high school, and the launch into adulthood — plus their parents, who are co-users at every stage.
2. Sustain a **minimum 90% satisfaction score** across both children and parents (defined precisely in `05-measurement.md`).
3. Guide families toward **happiness and exceptional capability** — a "Top 5%" foundation tier, with upgrade paths to "1%" and "0.1%" depth tiers (defined as *capability depth*, not social ranking — see `01-north-star.md` for why this reframing is the load-bearing design decision).

## Document map

| Doc | Contents | Read first if you are… |
|---|---|---|
| [`01-north-star.md`](01-north-star.md) | Vision, definitions of success, the Top-5%→1%→0.1% tier model, non-negotiable principles | Anyone — start here |
| [`02-developmental-framework.md`](02-developmental-framework.md) | The seven age stages (0–3 → 18+), the six growth domains, AI-era competencies, what the AI does and must never do at each stage | Content & curriculum designers |
| [`03-agentic-architecture.md`](03-agentic-architecture.md) | The agent roster (Companion, Parent Co-pilot, Planner, Observer, Safety Sentinel, Specialists), the longitudinal Child Model, orchestration, escalation | Engineers & AI designers |
| [`04-playbook.md`](04-playbook.md) | Daily/weekly operating loops, onboarding, session design, parent engagement, stage transitions, satisfaction-recovery protocol | Product & operations |
| [`05-measurement.md`](05-measurement.md) | The 90% satisfaction instrument by age, wellbeing & capability metrics, tier progression criteria, anti-gaming rules | Data & leadership |
| [`06-safety-ethics.md`](06-safety-ethics.md) | Child safety, privacy (COPPA/GDPR-K), dependency prevention, crisis escalation, red lines | Everyone — mandatory |
| [`07-phase1-product-spec.md`](07-phase1-product-spec.md) | Buildable spec for Phase 1 (Parent Co-pilot + Child Model core): features F1–F8, data spec, quality bars, acceptance tests, 12-week build plan | Engineers starting Phase 1 |
| [`08-persona-pressure-tests.md`](08-persona-pressure-tests.md) | Five families walked through the framework end-to-end; validated mechanisms and the gap register (G1–G6) | Product — before each phase gate |

## The one-paragraph summary

We are building a **family growth system**, not a tutoring app. A persistent, longitudinal AI that knows each child's developmental trajectory across years; that acts through a small roster of specialized agents coordinated around a single Child Model; that adapts its role from *parent's advisor* (ages 0–5, when the child should barely touch screens) to *learning companion* (6–11) to *mentor and coach* (12–18) to *peer strategist* (18+); that measures success by the child's growing **competence, agency, connection, and joy** — because those four things are simultaneously what makes children happy *and* what puts adults in the top few percent of any society, especially one being remade by AI. The AI's deepest design constraint: **it must make itself progressively less necessary**, building children who are strong *with or without* it.

## How to use these documents

- **Every feature spec** must cite the stage(s) it serves (`02`), the agent(s) that deliver it (`03`), the loop it belongs to (`04`), the metric it moves (`05`), and its safety review status (`06`).
- **Every AI-agent prompt/policy** must implement the stage-appropriate role and red lines from `02` and the behavioral contract from `03`.
- Changes to non-negotiable principles (`01 §4`, `06 §1`) require an explicit founder-level decision recorded in this repo.
