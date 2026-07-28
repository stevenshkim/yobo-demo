# Paid Ads Engine (channel C5)

**Funnel:** 1 — Lead Generation. **Target:** ~150 trials → ~44 customers toward **$100k MRR**.
**CAC discipline:** payback < ~1 month (CAC ≈ 0.7 × ACV). Blended ≤ ~$450; paid can run up to
~$600 *if* warm/referral/content subsidize the blend.
**Load with:** `os/company/icp.md`, `offer-and-positioning.md`, `content-engine.md` (creative).

> **Golden rule (the gate):** do **not** scale prospecting until Wave-1/2 prove **trial→paid ≥ 20%**.
> Paid amplifies whatever the funnel already does — amplifying a leaky funnel just burns cash.

## The sequence (build in this order — warmest/cheapest first)

1. **Retargeting** (warmest, cheapest CAC) — site visitors, audit-page visitors, content engagers,
   email non-openers. Turn on first; it converts demand you already created.
2. **High-intent demand capture** (Google Search) — people already looking. Bottom-funnel, high
   conversion. Turn on early.
3. **Prospecting** (Meta lookalikes, interests) — cold, biggest volume, highest CAC. Only scale
   after the gate (trial→paid ≥ 20%).

## Channels & their role

| Channel | Role | Best segment | Notes |
|---|---|---|---|
| **Meta/IG** | prospecting + retargeting (volume engine) | $1–5M Beauty/F&B/Kids founders | lookalikes of warm + audit converters; Advantage+ where it fits |
| **Google Search** | high-intent capture | all — bottom funnel | "Klaviyo agency," "Klaviyo expert," "email marketing for Shopify," "Klaviyo flows done for you" |
| **YouTube** | scaled video (repurpose content engine) | broad DTC | teardown/educational creative as ads |
| **LinkedIn** | high-ACV targeting | $5–20M Heads of Growth | expensive — reserve for Senior/Head-of-Growth tiers (higher ACV absorbs CAC) |
| **Retargeting (Meta+Google)** | convert warm traffic | everyone who touched us | highest ROAS; always-on |

## Audiences (from the 9-dimension ICP)
- **Lookalikes** of: warm-list converters, audit-claimers, trial-starters, paying customers (best signal).
- **Interest/behavior:** Shopify store owners, DTC founders, Klaviyo users, ecommerce marketing.
- **Retargeting pools:** site/audit-page visitors, video viewers (25%+), content engagers, email clicks.
- **Community lanes:** mirror the content lanes (e.g., Spanish-language creative for Latina-beauty audiences).

## Creative (from the content engine + `ad-creative-brief` skill)
- Angles: the **teardown** ("$[gap]/yr in your email"), the **salary anchor** ("a growth marketer
  costs $8–11k/mo — this is $499"), the **3× guarantee** ("3× your fees back or you don't pay"),
  outcome/before-after.
- Formats: UGC-style video, the AI-influencer content (repurposed), static proof cards, carousels.
- **One CTA: the free Growth Audit.** Many creatives, few ad sets — let the platform optimize.
- No fabricated numbers — pull proof from `os/company/proof-library.md` or mark `[PLACEHOLDER]`.

## Campaign structure (keep it simple)
- Conversion event = **audit start / trial start** (not clicks).
- Consolidated ad sets, many creatives; avoid over-segmenting (starves the algorithm).
- Separate campaigns by funnel stage (retargeting vs prospecting) and by tier intent (Meta for
  self-serve $499; LinkedIn/Google for $1,499–2,999).

## Budget pacing & CAC guardrails
- Start small per channel (test budgets), scale only what hits CAC payback < ~1 month.
- **Kill losers weekly** in the pace review (`os/ops/operating-cadence.md`).
- Reallocate to the lowest-CAC channel each week. Hold blended ≤ ~$450.

## Measurement (depends on A1 + A4)
- **UTM discipline** on every ad → CRM. CAC by campaign + by creative + by segment.
- 7-day Shopify-matched attribution for downstream revenue.
- Watch: CTR → audit-start rate → trial rate → trial→paid by campaign.

## Dependencies
- **A1 attribution/CRM/UTM** (or you can't measure CAC — the binding constraint).
- **A2 audit landing page** (the destination/CTA).
- Pixel/conversion API setup on each platform.

## What to log back (to `os/funnels/01-lead-generation.md`)
CAC by channel/campaign/creative · winning angles + audiences · trial→paid by paid source ·
which community-lane creative wins · the CAC headroom paid has after warm/referral subsidize.
