# Deliverability & Domain Setup Playbook (build item A4)

**Why this exists:** flagged as net-new and not yet planned. Deliverability **gates all cold
outbound** (Wave-2, `os/campaigns/wave-2-cold-outbound.md`) — send before this is ready and you
torch the company domain. This is the concrete prep pass.

> Rule: **never send cold outbound from the primary company domain.** Use separate sending domains
> so a deliverability hit never damages the brand's main email.

## 1. Domains & inboxes
- Buy **2–4 secondary sending domains** (lookalikes of the primary, e.g., `getyobolabs.com`,
  `yobolabs.io`) — never the primary.
- **2–3 mailboxes per domain** (e.g., steven@, aria@, growth@). More mailboxes = more low-volume
  senders = safer. ~8–12 mailboxes total to start.
- Use a reputable provider (Google Workspace / Microsoft 365, or a cold-email infra tool).

## 2. DNS authentication (per domain — non-negotiable)
- **SPF** — authorize your sending IPs/provider.
- **DKIM** — sign outgoing mail.
- **DMARC** — policy record (`p=none` to start, monitor, then tighten).
- **Custom tracking domain** + a redirect; verify MX. (Avoid shared tracking domains.)

## 3. Warming (the slow part — start now)
- Enroll every mailbox in an **automated warmup** tool for **2–4 weeks** before real sends.
- Ramp volume gradually: ~**10–20/day/mailbox** week 1 → build to a cap of **~30–50/day/mailbox**.
  Never blast. Total capacity = mailboxes × per-mailbox cap.
- Keep warmup running in the background even once live.

## 4. Sending hygiene (protects reputation)
- **Verify every email** (bounce-check) before sending — high bounces kill domains.
- Personalize (the signal-based opener) — spammy-identical mail trips filters.
- Plain-text-feel, minimal links/images in cold mail; one clear CTA.
- Spread sends across mailboxes; throttle; send in business hours by time zone.
- Honor unsubscribes/opt-outs instantly; include real identity + physical address (CAN-SPAM/CASL).

## 5. Monitoring
- Watch **bounce rate** (< 2–3%), **spam-complaint rate** (< 0.1%), **reply/positive-reply rate**,
  and inbox-placement (seed tests).
- If a domain degrades: pause it, rest, re-warm. Rotate to healthy domains.

## 6. Readiness gate (before Wave-2 cold volume)
- [ ] Secondary domains live + SPF/DKIM/DMARC verified
- [ ] Mailboxes warmed ≥ 2 weeks
- [ ] Email verification in the sending workflow
- [ ] Unsubscribe + identity + address in every template
- [ ] Monitoring dashboard live

## Dependencies & owners
- **Owner:** Growth/Ops. **Tools:** domain registrar + mailbox provider + warmup/sequencer + verifier.
- Lifecycle (customer) email runs through **Klaviyo on the customer's own domain** — separate from
  this cold-outbound infra. This playbook is for *our acquisition outbound only*.

> **Timeline reality:** warming takes 2–4 weeks. If we want Wave-2 cold sending in June, domains +
> warmup must start **immediately** (a P0 in `os/DECISIONS-NEEDED.md`).
