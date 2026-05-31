# Funnel 1 — Lead Generation

**Owns:** strangers → qualified trial starts.
**Primary metric:** qualified trial starts (~447 over 61 days, ~7/day, in the working
~$750-ACV scenario; rises toward ~667 if the mix skews to the $499 tier — see north-star).
**Load with:** `os/company/icp.md`, `os/company/offer-and-positioning.md`, `brand-voice.md`.

> A "qualified" trial = an ICP-fit brand (US, Shopify, Klaviyo, $1–20M) that starts the
> product-led trial. Volume of *unqualified* trials hurts activation and CAC — target hard.

## Channel strategy (you have: warm list, paid budget, outbound capacity)

### 1. Warm list / existing audience — *do this first, cheapest customers*
- Your existing list/following/waitlist is the fastest ~40 customers at ~$0 CAC.
- Play: a broadcast + a 3–5 touch activation sequence inviting them to connect their store
  and see a free growth plan.
- Segment by ICP fit; lead with outcome ("see what we'd do for *your* store, free").
- **Claude task:** draft the broadcast + sequence (use `cold-outbound-writer` skill, warm
  variant). Log opens/clicks/trials back here.

### 2. Outbound (cold email + LinkedIn) — *targeted, scalable with the winning sequence*
- Build the list from the ICP firmographic filter + buying triggers (`icp.md`).
- Signal-based beats spray: prioritize brands with Klaviyo installed but stale/empty flows,
  recent raises, scaling ad spend, seasonal pressure.
- Sequence: 3–4 email touches + LinkedIn, value-led (a specific observation about their
  store), CTA = free plan.
- **Compliance:** CAN-SPAM/CASL — real identity, physical address, unsubscribe; warm domains,
  cap volume, protect deliverability. (`CLAUDE.md` §8.)
- **Claude task:** build segmented lists, write per-segment sequences, draft the "specific
  observation" opener from public store signals.

### 3. Paid (retargeting + high-intent demand capture) — *scale only after trial→paid proven*
- Start with **retargeting** (warmest, cheapest) + high-intent search/demand capture before
  cold prospecting ads.
- Audiences from ICP (Shopify DTC, US, lookalikes of warm-list converters).
- Creative: outcome-led, real proof, free-plan CTA (use `ad-creative-brief` skill).
- **Hold blended CAC ≤ $300.** Paid can run up to ~$600 CAC *if* warm/referral subsidize.
- **Gate:** do not scale paid until Wave-1 trial→paid ≥ 20% (`os/README.md` roadmap).

### 4. Content & partnerships — *compounding, lower CAC over time*
- Lightweight: teardown content ("what's wrong with this brand's email"), Shopify/Klaviyo
  communities, founder audiences. Partnerships not yet an asset — build during the 60 days.

## Funnel-stage map
```
Impression/contact → Click/reply → Landing/trial page → Trial started (qualified)
```
Track conversion at each step **by channel** so CAC is attributable (`integrations/map.md`).

## Assets Claude can generate on demand (always load ICP + voice first)
- Warm-list broadcast + activation sequence
- Cold outbound sequences per segment + signal-based openers
- Ad creative briefs + variants (hook/angle matrix)
- Landing/trial page copy + teardown of the current one
- Lead-magnet / teardown content
- Target account lists from ICP filters

## What to log back here (so it compounds)
- Trials started per channel per week
- Reply/click/conversion rates by sequence + winning variants
- CAC by channel
- Which buying triggers convert best (feeds back into `icp.md`)

## Current → To-be
| | Current | To-be |
|---|---|---|
| Channels live | none instrumented | warm + outbound live (Wave 1), paid scaled (Wave 2) |
| Qualified trials/wk | 0 | ~75 by July |
| CAC visibility | none | per-channel attribution |
