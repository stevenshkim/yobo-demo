# Decisions & Inputs Needed (the unblock list)

> Everything the OS can't decide on its own — consolidated so nothing's scattered. The plan is
> fully drafted regardless; these slot answers in. **Priority:** P0 = blocks Wave 1 · P1 = blocks
> Wave 2 (paid/outbound scale) · P2 = optimization. Owner in brackets.

## A. Decisions only Steven can make
- **[RESOLVED ✓] Pricing** — tiers are **canonical**: Growth Marketer $499 / Senior $1,499 /
  Head of Growth $2,999. The old US landing copy ($97/$297) is superseded — **action (team):
  update the live landing page to match.**
- **[P1] Self-serve sub-$499 entry point?** — the "more users spending less" path: yes/no. *(Steven)*
- **[P0] Confirm trial design** — 14 days from first-flow-live · no card to start · 1 flow free
  and stays live · gate the rest (`os/funnels/02-activation.md`). *(Steven)*
- **[P1] Billing mechanic for the guarantee** — charge-then-auto-credit is decided; confirm Stripe
  implementation owner. *(Steven + dev)*
- **[P1] Content account appetite** — confirm the Tier-2 AI-influencer network scope + how many
  lanes to spin up first (`os/campaigns/content-engine.md`). *(Steven)*
- **[P2] Partner rev-share %** — 10–20% recurring + customer referral incentive
  (`os/campaigns/channel-partnerships.md`). *(Steven + Legal)*

## B. Inputs / data needed
- **[P0] Real proof numbers** — replace every `[PLACEHOLDER]` in the campaigns. Drop them in
  `os/company/proof-library.md` and the warm/BOFU/content assets inherit them. *(Steven/CS)*
- **[P0] 5 design-partner brands** + confirm the top 3 verticals (`os/company/icp.md`). *(Steven)*
- **[P1] The Growth Audit draft** Steven has — wire it in as the trial's step-1 deliverable. *(Steven)*
- **[P1] N flows for guarantee eligibility** (`os/company/guarantee-mechanics.md` §6). *(Steven)*

## C. Dev / engineering build items
- **[P0] Attribution layer (A1)** — the 7-day Klaviyo-send → Shopify-order match; UTM capture into CRM. *(dev)*
- **[P0] CRM optimize + connect** — stages, fields, automations, UTM, referral attribution. *(dev/ops)*
- **[P0] Trial gating + billing** — what's free vs paid, the "keep the flows," Stripe + guarantee credit. *(dev)*
- **[P0] Win-Back generation for ALL brand types** — the universal trial wedge flow. *(dev/product)*
- **[P2] Auto-generated Growth Audit** from connected store data. *(dev/product)*
- **[P1] Read store-size from Shopify on sync** → auto-qualify + guarantee floor. *(dev)*

## D. Tools to buy / set up
- **[P0] Deliverability (A4)** — secondary sending domains, SPF/DKIM/DMARC, warming. *Gates all cold outbound.* *(ops)*
- **[P1] Outbound sequencer + list enrichment** (e.g., for Wave-2 sending). *(growth)*
- **[P1] Social scheduler** for the content engine (no native posting here). *(content)*
- **[P1] Ad platforms** — Meta/Google/LinkedIn pixels + conversion API. *(growth)*
- **[P1] Product analytics** — PostHog/Mixpanel for funnel-stage instrumentation. *(dev)*

## E. Legal (review later, per Steven)
- **[P1] 3× guarantee** — claim wording, ToS, FTC substantiation, billing terms (`guarantee-mechanics.md` §8).
- **[P2] Referral/partner agreements** — rev-share terms.
- **[P1] Cold outbound compliance** — CAN-SPAM/CASL review of the Wave-2 sequences.

---

### The critical path to launch (do these first)
1. **A1 attribution + CRM** and **A4 deliverability** (P0 infra — everything measurable + sendable).
2. **Trial gating + Win-Back-for-all-types** (P0 product — the trial actually works).
3. **Reconcile pricing + confirm trial design + 5 design partners + real proof** (P0 Steven).
4. Then turn on **Wave 1 (warm) → Wave 2 (outbound + content) → paid + partnerships.**
