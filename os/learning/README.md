# The Learning Pipeline — How YoboLabs AI Gets Smarter

> Your ask: "set up Claude so it can learn from YouTube videos and material and consistently
> be the backbone." This is that engine. It's also the honest answer to a real limitation.

## The core truth (read this first)

**Claude does not remember anything between sessions by default, and it cannot "watch" a
YouTube video and retain it.** So "YoboLabs AI getting smarter over time" is not something
that happens automatically — it's a *process we run* that writes durable knowledge into this
repo. **The repo is the long-term memory.** Every time we distill a source into a playbook
or skill, every future session (and every teammate) inherits it. That's the compounding.

A learning that lives only in a chat is lost. A learning committed here is permanent.

## The pipeline: Capture → Distill → Encode → Measure

```
 SOURCE                 sources/            distilled/          .claude/skills/ or os/funnels/
 (YouTube, book,   →    raw transcript  →   principles +    →   reusable skill OR
  talk, teardown)       / notes             checklist           updated playbook
                                                                      │
                                                                      ▼
                                                            every future session uses it
                                                                      │
                                                                      ▼
                                                   MEASURE: did it improve a real metric?
                                                   (log result in funnel playbook + decision log)
```

### Step 1 — Capture → `os/learning/sources/`
Drop the raw material in. For each source, create one file: `sources/<topic>-<source>.md`.

- **YouTube:** paste the **transcript** (YouTube → "Show transcript", or a transcript tool).
  Claude can also `WebFetch` an article/transcript URL. *Pure-visual* content (a chart with
  no narration) needs a human one-paragraph summary — Claude can't see the video frames.
- **Books / posts / talks:** paste notes, key passages, or the article URL.
- **Calls / competitor teardowns:** paste a summary or transcript.

Always record at the top: **Source, author, date, why it's relevant to a funnel.**

### Step 2 — Distill → `os/learning/distilled/`
Ask Claude: *"Distill `sources/<file>` into reusable principles for funnel N."* Output a
`distilled/<topic>.md` with: the 3–7 durable principles, a checklist we can apply, and what
to ignore (context that doesn't fit our ICP/motion). **Distill, don't dump** — generic advice
that doesn't change our actions gets cut.

### Step 3 — Encode (the step people skip — don't)
A distilled note isn't operational until it changes how we work. Promote it:
- **Recurring task?** → new/updated **skill** in `.claude/skills/` (see those for the format).
- **Strategy/play?** → update the relevant **funnel playbook** in `os/funnels/`.
- **Audience truth?** → update `os/company/icp.md` or `offer-and-positioning.md`.

> Rule: **every source should end in a diff to a skill or a playbook.** If it didn't change
> a file, it didn't make us smarter.

### Step 4 — Measure
When a principle gets applied (a new subject line, a new sequence), log the result back in
the funnel playbook and the decision log (`os/ops/operating-cadence.md`). Keep what wins,
prune what doesn't. This is what separates "learning" from "collecting content."

## Good first sources to ingest (suggested)
- A top product-led-growth / trial-conversion talk → feeds funnel 02 (your highest lever)
- A cold-outbound / deliverability talk → feeds funnel 01 + the outbound skill
- A Klaviyo/ecommerce-lifecycle teardown → feeds funnels 02–04 + email creative
- A B2B-SaaS retention/NRR talk → feeds funnels 03–04

## Limitations (be honest)
- No native video understanding → transcripts/summaries only.
- No auto-ingestion → a human points Claude at the source; the pipeline is manual by design
  (manual keeps quality high and avoids polluting the brain with noise).
- Distillation can be wrong → always measure (Step 4) before trusting a principle at scale.
- This is *internal* org-learning. The *product's* Aria learning per-merchant (brand DNA,
  flow performance) is a separate system the dev team owns.

## Folders
- `sources/` — raw inputs (transcripts, notes). Messy is fine.
- `distilled/` — clean, reusable principles + checklists. This is the refined library.
