# Win-Back Flow — the universal wedge

**Trigger:** customer hasn't purchased in N days (set per category — see below).
**Goal:** recover lapsed customers → repeat revenue. **The default trial flow** (works for every
brand type). **Metric:** placed-order rate + revenue per recipient.
**Voice:** Aria (`brand-voice.md`). Plain-text-friendly. Merchant approves every send.

## Structure (3 emails)
| # | Send | Job | Offer |
|---|---|---|---|
| 1 | Day 0 (at lapse threshold) | "we miss you" + remind why they loved it | none (or soft) |
| 2 | +3 days | handle the gap + social proof | light incentive |
| 3 | +5 days | final nudge + urgency | best incentive |

**Lapse threshold by category:** Beauty/personal care ~45–60d · F&B/supplements ~30–45d (run-out
based) · Apparel ~90–120d · Kids ~60–90d. Tune to the brand's actual purchase frequency (Shopify).

---

### Email 1 — the reminder (Day 0)
**Subject variants:** (1) we saved your spot · (2) still thinking about [Brand]? · (3) it's been a while, [First name]
**Body:**
> Hey [First name],
> It's been a little while since your last [Brand] order — and we wanted to check in.
> [Best-seller / their last category] is still a favorite for a reason: [one concrete benefit].
> Want to pick up where you left off?
> **[Shop your favorites →]**

### Email 2 — the nudge + proof (+3 days)
**Subject variants:** (1) [4.8★] from [N] customers · (2) here's why people come back · (3) a little something to come back to
**Body:**
> Still on the fence, [First name]?
> [N] customers rate [Brand] [4.8★] — [one-line review quote]. *(real review only)*
> Here's **10% off** to make it easy: **[code]**.
> **[Come back with 10% off →]**

### Email 3 — last call (+5 days)
**Subject variants:** (1) last chance: your 15% expires tonight · (2) we'll stop here, [First name] · (3) before you go
**Body:**
> Last one from us, [First name] — we don't want to crowd your inbox.
> Your **15% off** expires tonight: **[code]**.
> If now's not the time, no worries — we'll be here when you're ready.
> **[Use it before it's gone →]**

---

## Category adaptations
- **Beauty:** lead with replenishment ("running low on [product]?") + a shade/routine reminder.
- **F&B/supplements:** frame as run-out ("time to restock your [product]?") — often merges with Replenishment.
- **Apparel:** lead with new arrivals / their browsed category, not just a discount.
- **Kids:** "they've probably sized up" / restock framing for parents.
- **Community-led brands:** match language + cultural cues (ties to the content lanes / ICP).

## Offer discipline
Start with no/low discount; escalate only across the 3 emails. Protect margin — many lapsed
customers return on the reminder alone. Test no-discount vs incentive.

## A/B test & log
Test: lapse threshold, subject 1, discount depth + timing, with/without proof. Log placed-order
rate, revenue/recipient, winning subject + offer → `os/flows/README.md` + CS playbook.
