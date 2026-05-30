# Integration Map — Current State → To-Be State

> Every tool the OS touches, what it's for, what's connected *today in this environment*,
> and what the to-be state needs. Two layers — don't confuse them:
>
> - **Session layer (Claude + MCP):** tools Claude can use *while doing work in a session*.
>   Connections are session-scoped — they help produce work, they are **not** always-on.
> - **Production layer (dev team):** the always-on backend (the real Aria, cron jobs,
>   webhooks, Klaviyo automation). Out of scope for this chat; tracked here for the map.

## The picture

```
                        ┌──────────────────────────────┐
                        │   YoboLabs GTM OS (this repo) │  ← shared brain
                        │   CLAUDE.md + os/ + skills     │
                        └───────────────┬───────────────┘
                                        │ Claude reads/writes
          ┌──────────────┬──────────────┼──────────────┬───────────────┐
   System of record   Comms          Build/creative   Customer data   Distribution
   Notion · Google   Slack ·        Canva · img/vid    Shopify ·       (CAC channels)
   · this repo       WhatsApp*       gen               Klaviyo* ·      ads · email · outbound
                                                        CRM*
                                          * = not yet connected / to build
```

## Per-tool status

| Tool | Role in the OS | Session layer (now) | To-be state |
|---|---|---|---|
| **This repo / Claude** | The brain: context, playbooks, skills, memory | ✅ Live (CLAUDE.md auto-loads) | Team edits via PRs; learnings committed continuously |
| **Shopify** | Customer store data (orders, products, customers, analytics) — powers plans + ICP signals | ✅ MCP connected (read + GraphQL) | Production: scoped OAuth per merchant in the product (dev team) |
| **Klaviyo** | Email flows + revenue/open/click data — the core product surface | ❌ **Not connected here** | **Highest-priority integration.** API for read flows + push flows + revenue attribution. Until wired, recap/CAC revenue numbers are manual |
| **Notion** | Team system-of-record / wiki; human-facing mirror of the OS | ✅ MCP connected | Sync key OS docs (north-star, funnels, dashboard) to Notion for non-technical team; repo stays source of truth |
| **Google Drive/Docs** | Docs, decks, sheets, assets | ✅ MCP connected | Store creative assets, sales decks; metrics sheet until a real dashboard |
| **Google Calendar** | Scheduling, cadence | ✅ MCP connected | Hold the operating rhythm (weekly pace review, monthly plan) |
| **Slack** | Team comms; alerts | ✅ MCP connected | Pace alerts, at-risk-customer pings, daily standup digest |
| **Canva** | Email/ad creative design | ✅ MCP connected | Generate on-brand email + ad creative from briefs |
| **Image/Video gen** | Hero images, ad creative, video | ✅ MCP connected | Brand-consistent creative for emails + paid ads |
| **GitHub** | Version control for the OS + product code | ✅ Connected | OS lives here; product repo separate (dev team) |
| **CRM** | Pipeline, lead/trial tracking, **CAC attribution** | ❌ **Not connected / TBD** | **Decide the CRM** (HubSpot/Attio/etc.). Without it, CAC-by-channel — the core constraint — is hard to measure |
| **WhatsApp** | Multi-channel customer comms + (future) a lifecycle channel | ❌ Not connected | WhatsApp Cloud API; post-V1 channel + expansion path |
| **Ad platforms** (Meta/Google/etc.) | Paid acquisition + CAC source | ❌ Not connected | Conversion tracking + UTM discipline so CAC is attributable |
| **Analytics/product** (PostHog/etc.) | Funnel-stage instrumentation | ❌ Not connected | Instrument every funnel stage (the "you can't fix the leak you can't see" tool) |

## The two gaps that most threaten the 200 goal

1. **Klaviyo API** — without it, the product's core value loop and revenue attribution (and
   therefore the weekly recap that drives retention) are manual. Dev-team priority.
2. **CRM + analytics + UTM discipline** — without attribution you cannot measure **CAC by
   channel**, and $300 CAC is your binding constraint. You'd be flying blind on the exact
   number you committed to. **Pick a CRM + analytics tool in pre-launch** (`os/README.md`).

## How Claude should use the session-layer tools (examples)
- **Shopify:** pull store signals to draft credible first plans + ICP-fit outbound openers.
- **Canva / image-gen:** turn an `ad-creative-brief` into actual on-brand creative.
- **Notion / Google:** publish the human-readable mirror of OS docs + the metrics sheet.
- **Slack / Calendar:** run the operating cadence (pace reviews, alerts).

> Reminder: these run inside a session. Recurring/automated versions are the dev team's
> production backend, not this chat.
