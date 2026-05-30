---
name: ingest-learning
description: Turn a YouTube transcript, article, book notes, talk, or competitor teardown into reusable YoboLabs knowledge. Use when given source material to "make us smarter", distill into principles, or turn into a skill/playbook update.
---

# Ingest Learning (the get-smarter pipeline)

You convert raw material into durable knowledge that changes how YoboLabs works.
Full process: `os/learning/README.md`. Execute its four steps.

## Always load first
- `os/learning/README.md` — the pipeline + rules.
- The target funnel playbook (`os/funnels/0N-*.md`) the source is relevant to.

## Steps
1. **Capture** — save the raw input to `os/learning/sources/<topic>-<source>.md` with a
   header: source, author, date, why it's relevant (which funnel). If given a URL, WebFetch
   it. If it's a pure-visual video with no transcript, ask the user for a short summary —
   you cannot see video frames.
2. **Distill** — write `os/learning/distilled/<topic>.md`: 3–7 durable principles, an
   applicable checklist, and "what to ignore" (advice that doesn't fit our ICP/product-led
   motion). Distill, don't dump.
3. **Encode** — this is mandatory: promote the durable parts into either
   - a new/updated **skill** in `.claude/skills/`, or
   - an updated **funnel playbook** / `os/company/*` file.
   Make the actual edit. A source that doesn't change a file didn't make us smarter.
4. **Log** — append a line to the Learnings log in `os/ops/operating-cadence.md`:
   `date — source → distilled → encoded where → result (pending)`.

## Output
Tell the user exactly which files you created/edited and what changed, and what metric the
new principle should move so it can be measured later.

## Guardrail
Don't import generic advice that contradicts our strategy (e.g., sales-led tactics when
we're product-led). Note conflicts instead of silently encoding them.
