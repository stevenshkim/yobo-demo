# YoboLabs Frontend — Build Handoff

**To:** YoboLabs engineering
**From:** Steven (founder) — design + spec
**Date:** 2026-05-22

## What this is

A clickable HTML prototype of the YoboLabs growth-team chat experience for Shopify+Klaviyo brands. The prototype is the visual + interaction reference for the production build.

**Product positioning** (from yobolabs.com): "AI-native Klaviyo agency for Shopify brands · 3× revenue guaranteed." Aria, the growth-manager agent, runs lifecycle marketing end-to-end for the merchant — curates flows, builds creative, ships to Klaviyo, monitors, iterates. The merchant interacts via chat (web first, WhatsApp/iMessage/Slack/Telegram later).

## Files to read (in order)

1. **Live demo: https://yobo-demo.vercel.app** + `index.html` *(this folder)* — the clickable demo, visual source of truth. Open in any browser; no build, no server, no deps. Walk through `Approve all` to see the 15-second cascade (sync → daily update → week 1 recap → week 2 recap → February draft).
2. **`docs/superpowers/specs/2026-05-24-yobo-build-spec.md`** — **THE BUILD SPEC.** Canonical product + design + interaction reference. 12 sections + appendix. Design tokens, components, interactions, data structures, multi-channel rules, verification gates. Read this top-to-bottom before scoping.
3. **`docs/superpowers/plans/2026-05-22-yobo-frontend-prototype.md`** — implementation plan. 21 tasks across 7 phases. Still useful as a build sequence; task-level CSS/markup is superseded by the build spec.
4. **`docs/superpowers/specs/2026-05-22-yobo-frontend-prototype-design.md`** — original design spec (historical context only; superseded by build spec).

## Tech stack (recommended in spec)

Next.js 15 (App Router) · TypeScript · Tailwind CSS v3 · Framer Motion 11 · Vitest + Testing Library · Playwright. Justification: matches existing yobolabs.com codebase pattern, easy to fold in.

## Non-negotiable design principles

1. **Chat is the universal surface.** Every artifact action must be reachable from a chat button so the same content can render on WhatsApp/iMessage/Slack/Telegram (text + interactive buttons). Canvas is a desktop bonus.
2. **One voice: Aria.** Confident growth-manager tone. No specialist name-drops. Short sentences, line breaks, bold prefix on each message, scannable.
3. **Functional flow naming.** `Win-Back`, `Abandoned Cart`, `Welcome Series` — never abstract creative names like "Re-discover Your Glow." Creative naming belongs in email subject lines and hero copy only.
4. **Plain language for status.** `New` / `Running` / `Improving` — never `v2` / `Testing v3`.
5. **Every button click leaves a record.** Action buttons post a Steven user message in the thread before Aria responds (WhatsApp interactive-message pattern). Chat = audit trail.
6. **Plan card is the only rich chat artifact.** Everything else (daily updates, recaps, sync confirmations, next-chat notifications) is plain bubble + bold prefix + line breaks + bullets + a hero number block for weekly recaps. Same rendering on any channel.

## Decisions still needed before build can ship V1

### Stack
- [ ] **Backend** — Next.js API routes vs separate Node service vs Convex/Supabase?
- [ ] **Database** — Postgres (Prisma/Drizzle) vs Convex vs Supabase?
- [ ] **Auth** — Clerk (recommended for speed), Auth0, NextAuth, or Supabase Auth?
- [ ] **LLM provider** — Claude vs GPT vs both. Aria IS the product; this is the biggest model decision.
- [ ] **Image generation** — DALL-E, Midjourney API, Replicate, or Ideogram? Email hero images must stay brand-consistent.

### AI layer (own sub-spec)
- [ ] **Aria's system prompt** — voice, guardrails, tool-use instructions
- [ ] **Tools she can call** — Klaviyo (read/write flows + performance), Shopify (customers/orders/products), image generation
- [ ] **Memory** — per-store context, conversation history, brand DNA, live-flow state, approved-this-month set
- [ ] **Retrieval** — what does she search? Transactions, reviews, prior campaigns?
- [ ] **Brand DNA inference** — new-store onboarding: how does she learn voice + palette? Auto-infer vs interview?

### Integrations (each needs its own spec)
- [ ] **Klaviyo OAuth + API** — read flows, push flows, read open/click/revenue
- [ ] **Shopify OAuth + Admin API** — customers, orders, products, segments
- [ ] **Multi-channel (post-V1)** — WhatsApp Cloud API · Slack app + blocks · Telegram Bot · iMessage Business Chat (or SMS via Twilio as fallback)

### Business logic the prototype hand-waves
- [ ] **When does Aria propose next month's plan?** Fixed date vs performance-triggered?
- [ ] **When do weekly recaps fire?** Fixed day vs adaptive?
- [ ] **What promotes "Improving" → "Running" → "Mature"?** Sample-size + win-rate thresholds?
- [ ] **Approval-mode mechanics** — 24h edit window = real countdown; "auto for proven" = need a proven definition; "full autopilot" needs an audit log
- [ ] **Attribution model** — last-touch click, Klaviyo's default, UTM-based?

### UX scope NOT in this prototype (each needs its own design pass)
- [ ] **Mission Control dashboard** — live flows · iteration queue · weekly aggregation. Nav item is a stub.
- [ ] **Brand DNA management UI** — where merchant reviews/edits voice + palette
- [ ] **Full plan view** — what `Open full plan` opens (all flows side-by-side, timeline, budget pie)
- [ ] **`Customize` flow picker** — what `Customize` opens when merchant wants to swap a flow
- [ ] **Onboarding** — connect Shopify → connect Klaviyo → brand DNA capture → first plan delivery
- [ ] **Empty + error states** — new store, failed Klaviyo sync, no flows live, paused/aborted flow, billing failure

### Business + operations
- [ ] **Pricing implementation** — $499 / $1,499 / Custom tiers (from yobolabs.com). Stripe + tier-gating.
- [ ] **Compliance** — GDPR, CAN-SPAM, unsubscribe handling, legal review of automated send approvals
- [ ] **3× guarantee mechanics** — refund/credit math + trigger condition
- [ ] **Product analytics** — PostHog/Mixpanel/Amplitude on prospect → customer conversion + demo engagement
- [ ] **Mobile** — mobile-web is in scope (responsive in spec); native (PWA or React Native) is separate

## Recommended build sequence

| Phase | Goal | Estimated effort* |
|---|---|---|
| 1 | Execute the 21-task plan exactly. Build the UI shell as the spec describes with mock data. | 1-2 weeks, 1 senior frontend |
| 2 | Wire Shopify + Klaviyo OAuth so a merchant can actually connect their store. Render their real flows + performance in canvas. | 2-3 weeks |
| 3 | Wire Aria with a real LLM + 3-5 tool calls (Klaviyo read/write, Shopify read, image gen) to propose a plan from connected store data. | 3-4 weeks |
| 4 | Approval-mode mechanics — 24h timer, audit log, Klaviyo push on approval. | 1-2 weeks |
| 5 | Scheduled cadence jobs — daily updates, weekly recaps, monthly proposal generation. | 1-2 weeks |
| 6 | Multi-channel — WhatsApp first (highest-leverage outside web), then Slack/Telegram. | 2-3 weeks each |

*Estimates assume 1 senior + 1 mid-level engineer working full-time. Adjust for team size.

**MVP = phases 1-4.** That's a real merchant connecting their store, getting a real plan, approving it, and Klaviyo syncing. Phases 5-6 are what makes the product feel like a 24/7 growth team rather than "Klaviyo with a chatbot."

## Things to ask Steven when you start

1. Is there an existing yobolabs.com codebase to extend, or is this a greenfield Next.js project?
2. What's the timeline target for V1 (paying customers using it)?
3. Who are the first 5 design-partner merchants? Their stack will drive integration priority.
4. Which LLM provider do you want to start with? (Affects prompt design and tool-use patterns.)
5. Where does Brand DNA come from initially — manual interview, auto-inferred, or a hybrid?

---

*All three files (mockup, spec, plan) are in this repo. Read them in that order before scoping the work.*
