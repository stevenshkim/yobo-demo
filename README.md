# YoboLabs Demo

A clickable HTML prototype of the YoboLabs growth-team chat experience for Shopify+Klaviyo prospects.

## Run it

Open `index.html` in any modern browser. That's it — no build step, no server, no dependencies.

```bash
open /Users/stevensunghoonkim/Downloads/yobo-demo/index.html
```

To host it for a prospect demo, drop the single file on any static host (Vercel, Netlify, S3, even a shared Google Drive link with a small static-host wrapper). It's fully self-contained.

## Demo path

1. Page loads — chat shows today's daily update, three signals, and the January plan from Aria. Canvas on the right shows the Win-Back flow.
2. Click `❶`, `❷`, or `❸` in the canvas flow → swaps to that email's creative view. Use the stepper pills at the top of the email view to jump between steps without going back.
3. Click any KPI on the canvas (Goal / Customers / Offer) or any region of the rendered email (hero, headline, body, CTA, footer) → opens an edit popover. Pick a quick-edit chip or type your own, then "Send to chat" — it posts as a Steven message and Aria responds.
4. Per-flow `Approve` button → flips the card to approved, Aria confirms.
5. `Approve all` triggers the full 15-second cascade:
   - Steven message `Approve all` (9:14 AM)
   - Aria sync confirmation
   - Day 3 daily update
   - Week 1 recap with hero `$890` block
   - Week 2 recap with hero `$2,140` block
   - February's draft notification + `Open February` button
6. `← Chats` (top of chat panel) → chat list. After the cascade, a new `February 2026 Plan` row appears at the top.
7. `Approval · Manual ▾` in the chat header → 4 modes (Manual / 24h window / Auto for proven / Full autopilot).

## For the dev team

The production build should follow the design spec at:

`/Users/stevensunghoonkim/Downloads/docs/superpowers/specs/2026-05-22-yobo-frontend-prototype-design.md`

And the implementation plan at:

`/Users/stevensunghoonkim/Downloads/docs/superpowers/plans/2026-05-22-yobo-frontend-prototype.md`

The plan covers the full Next.js 15 + Tailwind + Framer Motion implementation with TypeScript, unit tests, and an E2E smoke test. The HTML file in this folder is the visual reference — the design system, component layouts, animations, copy, and interaction model are all there to mirror.

Key principles from the spec the dev team should preserve:

1. **Chat is the universal surface.** Every artifact action must be reachable from chat buttons so the same content can render on WhatsApp, iMessage, Slack, Telegram. Canvas is a desktop augmentation.
2. **One voice: Aria.** Confident growth-manager tone. No specialist name-drops. Short sentences, line breaks, scannable.
3. **Functional flow naming.** Win-Back, Abandoned Cart, Welcome Series — never abstract creative names.
4. **Plain language for status.** New / Running / Improving — never v2/v3/Testing.
5. **Every button click leaves a record.** Action buttons post a user message in the chat first, then Aria responds (WhatsApp-flow pattern).
6. **Plan card is the only rich chat artifact.** Everything else is plain bubble + bold prefix + line breaks + bullets — so it renders the same on external channels.
