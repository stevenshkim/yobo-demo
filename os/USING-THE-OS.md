# Using the GTM OS — 5-Minute Quickstart

> New here? Read this once. You'll be productive immediately.
> This is the *how-to-use* guide. The *what-we-believe* lives in `CLAUDE.md` and `os/`.

---

## The one idea

You don't read this repo like a manual. **You talk to Claude inside it, and Claude reads
the repo for you.** Every session auto-loads the company brain (`CLAUDE.md`), so Claude
already knows the goal, our ICP, our offer, our voice, and the four funnels *before you type
a word.* That's why everyone's output comes out consistent — the context is shared, not
stuck in someone's head.

**The goal everything serves:** $100,000 net-new US MRR by July 31 2026, CAC payback < ~1 month
(~134 customers @ ~$750 blended ACV — the count varies with pricing mix).

---

## How to use it (the daily loop)

1. **Open a session in this repo.** Claude Code on the web (code.claude.com), the desktop
   app, or the CLI — all the same repo, same brain.
2. **Ask in plain English.** "Write 3 cold emails for beauty brands." "Are we on pace?"
   "Critique our trial onboarding." Claude pulls the right `os/` files automatically.
3. **Use a skill for recurring work** — type `/` and pick one (below). Skills force the
   *same high-quality process every time*, for anyone on the team.
4. **End with: "log what we learned."** Claude writes the win/result back into the playbook
   and decision log. **This is the step that makes the system compound.** Skip it and we
   stop getting smarter.

---

## The skills (type `/` to run)

| Skill | Use it when you want to… |
|---|---|
| `/cold-outbound-writer` | Draft cold/warm outreach (email + LinkedIn) to US Shopify/Klaviyo brands |
| `/ad-creative-brief` | Get paid-ad concepts, hooks, and copy for Meta/Google/LinkedIn |
| `/funnel-metrics-review` | Run the weekly "are we on pace?" review and find the binding constraint |
| `/ingest-learning` | Turn a YouTube transcript / article / talk into reusable YoboLabs knowledge |
| `/growth-audit-builder` | Build a free Growth Audit (dollar-gap + plan) from a store's data |
| `/weekly-recap-writer` | Write a customer's weekly revenue recap (the #1 retention artifact) |
| `/content-script-writer` | Write content-engine scripts by lane + pillar (teardowns, Reels, etc.) |

More skills get added as we learn (see `os/learning/README.md`).

---

## Who uses what

- **Founders / GTM leads:** the weekly `/funnel-metrics-review`, strategy edits in
  `os/company/`, and the decision log in `os/ops/operating-cadence.md`.
- **Marketers / contractors:** the skills above + the funnel playbooks. They never start
  from scratch — Claude already has the voice and ICP.
- **Non-technical teammates:** chat with Claude on the web (no git needed), **or** use the
  Notion mirror (same content, familiar surface). The repo stays the source of truth.

---

## The 4 rules that keep it from rotting

1. **Context before craft.** Never ask for a deliverable "cold" — let Claude load
   ICP + offer + voice + funnel first.
2. **Tie every task to a funnel metric.** If it doesn't move a number, don't do it.
3. **Change strategy in the file first.** Pricing/ICP/positioning shift? Edit `os/company/`
   so the whole org (and Claude) inherits it next session.
4. **Commit every learning.** A session that ends without writing something back taught us
   nothing. The repo is the memory.

---

## Where things live

```
CLAUDE.md            ← the brain (auto-loaded). Goal, identity, 4 funnels, principles.
os/
  README.md          ← master plan, 60-day roadmap, honest feasibility math
  USING-THE-OS.md    ← you are here
  company/           ← north-star + unit economics, ICP, offer, brand voice
  funnels/           ← the 4-funnel metrics tree + one playbook per funnel
  integrations/      ← current→to-be map for every tool (Shopify, Klaviyo, CRM, …)
  learning/          ← turn videos/books/material into reusable skills
  ops/               ← daily/weekly/monthly cadence + decision log
.claude/skills/      ← the reusable skills above
```

## First 10 minutes for a new teammate

1. Read this page + `CLAUDE.md` (skim).
2. Open a session, ask: *"Give me the 30-second version of our ICP, offer, and goal."*
3. Run one real task with a skill (e.g. `/cold-outbound-writer` for your segment).
4. Before you close: *"Log what we learned and anything that should change a playbook."*
