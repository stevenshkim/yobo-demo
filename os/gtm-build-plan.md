# GTM Build Plan — The Acquisition Engine

> Everything that needs building to hit **$100k MRR** — the systems, not just the tasks.
> This is the master inventory: each component's job, current → to-be, what to build, who owns
> it, the tooling it needs, its KPI, and the risks. Sequenced into waves at the end.
>
> **Mental model:** a **targeting layer** feeds **acquisition channels**, which all point at
> **one conversion mechanism** (free Growth Audit → trial → real results → paid, guaranteed),
> measured by an **attribution/ops layer**, and protected by **retention + expansion**. The OS
> is the brain that coordinates and compounds all of it.

```
                         ┌──────────────────────────────────────────┐
   TARGETING  ─────────► │           ACQUISITION CHANNELS            │
   (ICP segments,        │  Warm list · Outreach · Content engine ·  │
    signals, lists)      │  Posting/engagement · Paid ads · Partners │
                         └───────────────────┬──────────────────────┘
                                             ▼
                         ONE CONVERSION MECHANISM (the funnel core)
                Free Growth Audit → Trial (ship 1 flow) → Results → Paid (3× guaranteed)
                                             ▼
                    ATTRIBUTION / CRM / ANALYTICS  (CAC by channel + guarantee math)
                                             ▼
                       RETENTION + EXPANSION  (protect & grow the MRR)
```

Legend for "Build by": **Dev** = product/eng backend · **OS** = Claude + this repo can produce it
now · **Tool** = needs a third-party tool/subscription · **Team** = human execution.

---

## A. FOUNDATION (cross-cutting — build first, everything depends on it)

### A1. Attribution / CRM / Analytics layer ⚠️ *the #1 dependency*
- **Job:** measure **CAC by channel** (the binding constraint) and power the **guarantee math**
  (7-day Shopify-matched revenue). Without it we're blind on the exact numbers we committed to.
- **Current → to-be:** nothing wired → CRM + analytics + UTM discipline + the 7-day
  email→Shopify attribution match live.
- **Build:** pick a CRM (HubSpot / Attio / Close); pick product analytics (PostHog/Mixpanel);
  enforce UTM conventions on every link; build the Klaviyo-send → Shopify-order 7-day match.
- **Build by:** Tool + Dev. **Owner:** Steven + dev. **KPI:** CAC per channel visible weekly.

### A2. The Free Growth Audit — *the lynchpin offer* (Steven has a draft)
- **Job:** the lead magnet, the activation "aha," and the BOFU anchor in one. Quantifies the
  brand's email revenue gap in dollars and presents the plan.
- **Current → to-be:** drafted → standardized, fast (minutes), brand-accurate, auto-produced
  from connected Shopify + Klaviyo, with a quantified $ gap that feeds the BOFU ROI math.
- **Build:** finalize the audit template + the dollar-gap calc; wire it as the trial's step 1.
- **Build by:** Dev (auto-gen) + OS (copy/structure). **Owner:** Steven/product. **KPI:** audit→trial activation ≥ 65%.

### A3. Trial → Paid conversion (BOFU) — *built, needs inputs*
- **Job:** convert trials at ≥ 30%, results-first, price revealed as "keep the teammate."
- **Status:** playbook done (`os/campaigns/bofu-pricing-and-conversion.md`). Needs: real proof
  numbers, trial mechanics confirmed (14d / no-card / 1-flow-free), guarantee live.
- **Build by:** OS (done) + Dev (trial gating, billing) + Team (sales-assist). **KPI:** trial→paid %.

### A4. Deliverability & domain infrastructure ⚠️
- **Job:** keep outreach + lifecycle email landing in inboxes; protect sender reputation as
  volume scales. Gates how fast outbound can grow.
- **Build:** secondary sending domains for cold outbound (never the primary), SPF/DKIM/DMARC,
  mailbox warming, volume caps, list hygiene. CAN-SPAM/CASL compliance baked in.
- **Build by:** Tool + Team. **Owner:** growth/ops. **KPI:** inbox placement, spam-complaint rate.

### A5. Creative production pipeline
- **Job:** turn briefs into on-brand assets at volume for ads, content, and emails.
- **Build:** brief → Canva / image-gen / video-gen → review → publish. Templates per format.
- **Build by:** OS (briefs via `ad-creative-brief` skill) + Tool (Canva, image/video MCP) + Team.
- **KPI:** assets shipped/week; creative win-rate.

---

## B. TARGETING LAYER

### B1. ICP segmentation & target-account database
- **Job:** define *exactly who* each channel targets and *what message* they get. Targeting is
  the cheapest lever on CAC — the right list beats clever copy.
- **The segmentation (build the real lists against this):**

  **By vertical** (confirm top 3; each gets its own angle + content):
  | Vertical | Wedge flow | Angle |
  |---|---|---|
  | Beauty & personal care | Win-Back / replenishment | "Your customers run out — win them back on autopilot." |
  | Food & beverage / supplements | Replenishment + subscription | "Reorder reminders that actually reorder." |
  | Apparel & accessories | Abandoned Cart + Welcome | "Recover the carts you're losing every night." |

  **By revenue band** (drives motion + tier):
  | Band | Buyer | Motion | Likely tier |
  |---|---|---|---|
  | $1–5M | Founder/CEO | self-serve trial | Growth Marketer $499 |
  | $5–20M | Head of Growth / Ecommerce | sales-assist | Senior $1,499 / Head of Growth $2,999 |

  **By buying trigger** (spikes conversion — prioritize these):
  Klaviyo installed but flows stale/empty · recently raised · scaling ad spend · seasonal
  pressure (BFCM, launch) · lost a retention/email hire.

  **By channel-fit** (which segment for which channel):
  | Segment | Best channel |
  |---|---|
  | $1–5M founders, trigger = stale flows | Outreach + content |
  | $1–5M broad | Paid (Meta retargeting + lookalikes) |
  | $5–20M Heads of Growth | Outreach (LinkedIn) + partnerships + Google high-intent |
  | Agency/ecosystem-adjacent | Partnerships |

- **Build:** enrich target-account lists from the firmographic filter + triggers (Shopify/
  Klaviyo signals, data tools); store in the CRM; tag by segment.
- **Build by:** OS (segment definitions, list criteria, signal openers) + Tool (data/enrichment) + Team.
- **KPI:** % of outreach/ads hitting in-ICP, in-trigger accounts.

---

## C. ACQUISITION CHANNELS

### C1. Warm-list activation — *built* (Wave 1)
- `os/campaigns/wave-1-warm-list-activation.md`. The cheapest first ~30 customers, ~$0 CAC.
- **Build by:** OS (done) + Team (send). **KPI:** warm trials → ~27–40 customers.

### C2. Outreach engine (cold email + LinkedIn) at scale
- **Job:** targeted, signal-based outbound to in-ICP accounts. ~150 trials → ~45 customers.
- **Build:**
  - List building + enrichment from B1 (CRM-fed).
  - **Signal-based openers** — a specific observation about *their* store (stale flow, etc.).
  - Multi-touch sequences per segment (the `cold-outbound-writer` skill produces these).
  - Sending infra (A4) + a sequencing tool; reply routing to sales-assist.
- **Build by:** OS (sequences/openers) + Tool (sending/sequencer + enrichment) + Team (reply handling).
- **KPI:** reply rate, audit-claim rate, CAC (~$150 target). Log winners back to funnel 01.
- **Risk:** deliverability/compliance — depends on A4.

### C3. Content mass-production engine (across many accounts)
- **Job:** compounding, low-CAC demand via high-volume organic content distributed across a
  network of accounts (founder, brand, and topical/niche pages).
- **Build:**
  - **Account architecture:** Steven (founder POV), YoboLabs (brand), + a set of topical
    accounts ("DTC email teardowns," "Shopify growth," etc.) per platform (TikTok, IG Reels,
    LinkedIn, X, YouTube Shorts).
  - **Content pillars:** (1) email teardowns ("what's wrong with this brand's flows"),
    (2) before/after revenue stories (real, from Proof Library), (3) education/how-to,
    (4) founder POV/build-in-public, (5) social proof.
  - **Production line:** idea → script (OS) → creative (image/video gen + Canva) → captions/
    hooks (OS) → batch of N pieces/week/account. **One idea repurposed into many formats.**
  - **CTA:** link-in-bio → free Growth Audit (UTM-tagged for CAC).
- **Build by:** OS (scripts, hooks, repurposing) + Tool (video/image gen, scheduler) + Team (faces/voiceover, QC).
- **KPI:** pieces/week, reach, audit clicks, CAC (compounds toward ~$0).
- **⚠️ Risk (flag for Steven):** mass multi-account operation can violate platform ToS
  (automation, inauthentic behavior) and risks bans. Keep accounts genuinely differentiated and
  human-supervised; avoid bulk automation that trips platform rules. Stretch the boundary
  *without* betting the company on a bannable tactic. Needs a deliberate decision.

### C4. Posting & engagement engine
- **Job:** distribute the content (C3) on cadence and grow the accounts via active engagement.
- **Build:**
  - Scheduling across accounts/platforms (a social scheduler).
  - Posting cadence per platform (e.g., Reels/TikTok daily, LinkedIn 3–5×/wk, X daily).
  - **Engagement loop:** comment on ICP founders' posts, reply to comments, DM warm responders
    (hands off to outreach C2). This is where reach → relationships → audits.
- **Build by:** Tool (scheduler) + Team (engagement) + OS (comment/DM drafts in Aria voice).
- **KPI:** follower growth, engagement rate, DMs → audits.
- **Note:** no native MCP social-posting here — needs a scheduling tool / dev integration.
- **⚠️ Risk:** same platform-ToS caution as C3 for automated engagement; keep it human/light-touch.

### C5. Paid ads engine
- **Job:** buy volume fast while holding CAC payback < ~1 month. ~150 trials → ~44 customers.
- **Build (sequence matters):**
  1. **Retargeting first** (warmest, cheapest) — anyone who hit the site/content/audit page.
  2. **High-intent demand capture** — Google search ("Klaviyo agency," "Klaviyo expert,"
     "email marketing for Shopify"); LinkedIn for $5–20M Heads of Growth.
  3. **Prospecting** — Meta/IG lookalikes of warm-list + audit converters; only after trial→paid proven.
  - Creative from C3/A5: outcome-led, teardown hooks, free-audit CTA.
  - Measurement: UTM + CRM + 7-day attribution; CAC by campaign; kill losers weekly.
- **Build by:** Tool (ad platforms) + Team (media buying) + OS (creative briefs, copy).
- **KPI:** CAC by campaign (≤ ~$600 on paid, blended ≤ ~$450), trial→paid by campaign.
- **Gate:** do not scale prospecting until Wave-1 trial→paid ≥ 20% (`os/README.md`).

### C6. Channel partnerships engine
- **Job:** lowest-CAC, compounding distribution via others' audiences and trust. ~60 trials → ~18 customers.
- **Build the partner types:**
  - **Klaviyo ecosystem** — Klaviyo partner/agency directory, co-marketing, referrals.
  - **Shopify ecosystem** — Shopify Plus partners, app-adjacent placements, agencies.
  - **Agencies** that *don't* do email (web/design/paid) → refer email to us, rev-share.
  - **Creators/influencers** in DTC/ecom → sponsored teardowns, affiliate.
  - **Communities** — DTC Slack/Discord groups, founder masterminds, newsletters.
  - **Referral program** — happy customers + partners; built off Proof Library wins.
- **Build by:** Team (BD/relationships) + OS (partner one-pagers, outreach, referral copy).
- **KPI:** partners signed, partner-sourced audits, partner CAC (~$50).

---

## D. RETENTION & EXPANSION (protect and grow the MRR — not optional)

### D1. Customer success / health + weekly recap engine
- **Job:** keep churn low (retention protects CAC) and produce the weekly revenue recap that
  drives both retention and proof. Tracks progress toward each customer's 3× guarantee.
- **Build:** health scoring from Klaviyo/Shopify data; automated weekly recap; at-risk alerts (Slack).
- **Build by:** Dev (data + automation) + OS (recap copy, save playbooks). **KPI:** logo + GRR ≥ 90%.
- **⚠️ Capacity note:** to onboard ~134 customers in 60 days, onboarding + first-month success
  must scale. Fulfillment capacity is a real constraint, not just acquisition. Plan it.

### D2. Expansion / upsell engine
- **Job:** NRR > 100%; lift blended ACV (a lever on the goal — fewer logos needed).
- **Build:** trigger-based upsell offers (volume cap, list growth) → tier upgrades + channels (SMS/WhatsApp).
- **Build by:** OS (upsell proposals) + Dev (triggers). **KPI:** NRR, expansion MRR, blended ACV.

---

## E. THE OS & LEARNING LOOP — *built, and the coordinator of all the above*
- `CLAUDE.md` + `os/` + `.claude/skills/` — the shared brain that makes every channel consistent
  and compounds the learnings. The learning pipeline turns external material into new skills.
- **Build by:** OS (live). **KPI:** learnings committed/week; skills reused.

---

## Sequencing (waves)

| Wave | Window | Build / turn on | Gate |
|---|---|---|---|
| **0 — Foundation** | now → Jun 1 | A1 attribution/CRM · A2 audit live · A3 trial mechanics · A4 deliverability · A5 creative pipeline · B1 segments + first lists | funnel instrumented end-to-end |
| **1 — Prove it** | Jun 1–15 | C1 warm list · C2 outbound starts · C3 content starts (organic) | **trial→paid ≥ 20%** before scaling paid |
| **2 — Scale winners** | Jun 15 – Jul 10 | C5 paid (retargeting→intent) · scale C2 · ramp C3/C4 · open C6 partnerships · D1 CS engine | hold blended CAC payback < 1 mo |
| **3 — Compound** | Jul 10–31 | scale lowest-CAC channels · partnerships compound · sales-assist · D2 expansion | pace daily vs $100k MRR |
| **Post-July** | Aug+ | content + partnerships compound at ever-lower CAC | durable engine |

## The biggest risks (call them now)
1. **Attribution gap (A1)** — can't manage CAC or the guarantee without it. Build first.
2. **Fulfillment capacity (D1)** — acquiring 134 customers we can't onboard well = churn + guarantee payouts. Scale delivery alongside acquisition.
3. **Deliverability (A4)** — gates outbound + lifecycle. Warm domains before volume.
4. **Platform-ToS / ban risk (C3/C4)** — mass multi-account content/engagement can get killed. Decide the appetite; keep it human-supervised.
5. **Guarantee exposure** — safe only with the store-size floor enforced (off-ICP customers can't hit 3×). Keep targeting tight.

## What Claude/the OS can produce right now (no dependency)
Segment definitions + target-list criteria · all outreach sequences + signal openers · content
scripts/hooks/repurposing · ad creative briefs + copy · partner one-pagers + referral copy ·
recap + save templates · the weekly pace review. **What needs tools/dev:** attribution match,
trial gating + billing, social scheduling/posting, ad-platform setup, enrichment + sequencer.
