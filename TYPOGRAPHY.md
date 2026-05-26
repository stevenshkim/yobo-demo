# YoboLabs Demo — Typography rules

Current rules used in the prototype. The dev team can lift these straight into the production design system (or trim/normalize them).

## Font families

| Family | Used for | Where |
|---|---|---|
| **System sans** — `-apple-system, BlinkMacSystemFont, "Inter", sans-serif` | Everything by default | All UI chrome, chat, plan card, KPIs, buttons |
| **Serif** — `Georgia, "Times New Roman", serif` | Editorial moments | Canvas page titles (`Win-Back`, `Abandoned Cart`, `Welcome Series`), email **headlines**, numbered email-step circles (`❶ ❷ ❸`), email creative |
| **Monospace** — `ui-monospace, monospace` | Code chips | Only the `<code>` chips in hint text (rarely shown) |

**Rationale:** sans-serif everywhere for app chrome (matches iOS / WhatsApp / Slack feel). Serif reserved for moments that should feel "delivered" — the canvas page title and the inside of a rendered email. The serif numerals on flow steps signal "this is a real Klaviyo step", not a button.

## Weight scale

| Weight | Used for |
|---|---|
| **400** (regular) | Body copy, metadata, timestamps |
| **500** (medium) | Subtle emphasis, light labels |
| **600** (semibold) | Bold prefixes in chat ("Yesterday's update."), labels, button text |
| **700** (bold) | Key numbers in messages, KPI values, headers, status pills |
| **800** (extrabold) | Hero numbers ($890 / $2,140), avatar letters (A, S), email-step numerals |

## Size scale (desktop)

| Size | Used for |
|---|---|
| **8.5px** | Status pills (Improving / New / Running) |
| **9.5px** | Timestamps in bubble corners, KPI uppercase labels, status indicators |
| **10px** | Subtle uppercase labels, sub-text on flow cards |
| **10.5px** | Mini-button text, last-month line, mode-btn label, channel labels |
| **11px** | Plan card subtitle, plan-total badge |
| **11.5px** | Channel-strip label, chat-back link, recap scale line |
| **12px** | **Default bubble body text**, default input box text, chat-title |
| **12.5px** | Chat header title, flow card name, KPI sub-text in step cards |
| **13px** | Email body text, email-step name in flow visualization, prose chips |
| **13.5px** | Hero email body, modal text |
| **14px** | Plan card title ("Your January flows"), inline chip on stepper, MC card key labels (uppercase) |
| **14.5px** | Step-meta KPI v |
| **15px** | (rare — used in mobile bumps) |
| **16px** | (mobile bumps for plan title) |
| **17px** | Canvas KPI value (1,847 / 15% off / $3,420) |
| **18px** | Channels modal h2, MC card value |
| **22px** | Email headline (serif) |
| **24px** | iOS-style back chevron |
| **26px** | Canvas page title (`Win-Back`), hero number on recap (`$890`) |
| **30px** | Hero number on **mobile** (`$890` bumped from 26px) |
| **36px** | Mission Control hero value |
| **44px** | Welcome modal emoji |

## Size scale (mobile · `max-width: 768px`)

Bumped for readability — closer to WhatsApp / iOS defaults. Only the listed elements scale; everything else inherits from desktop.

| Element | Desktop → Mobile |
|---|---|
| Default bubble | 12 → **15px** (line-height 1.5) |
| Bullets / insights | 12 → **14.5px** |
| Hero number ($890) | 26 → **30px** |
| Hero sub | 11 → **13px** |
| "See more" link | 11 → **13px** |
| Mission Control link button | 10.5 → **12.5px** |
| Plan title | 14 → **16px** |
| Plan sub | 11 → **13px** |
| Flow card name | 12.5 → **15px** |
| Flow card status pill | 8.5 → **10px** |
| Flow card last-month line | 10.5 → **13px** |
| Flow card Est. value | 10.5 → **13px** |
| Mini button (Approve / Open) | 10.5 → **12.5px** |
| Plan total band | 11 → **13.5px** |
| Plan-level button | 11 → **13.5px** |
| Chat title | 12.5 → **15px** |
| Chat title timestamp | 10.5 → **12px** |
| `← Chats` link | 11.5 → **13.5px** |
| Approval mode button | 10.5 → **12.5px** |
| Channels button label | 10.5 → **12px** |
| Input box | 12 → **14.5px** |
| Send icon size | 22 → **26px** |
| Aria avatar circle | 24 → **28px** |
| Sender name (Aria) | 11.5 → **13px** |
| Welcome modal h2 | 22 → **22px** (unchanged) |
| Welcome modal body | 13.5 → **15px** |
| Channels modal h2 | 18 → **18px** (unchanged) |
| Channels modal lede | 12.5 → **14px** |
| Channels card name | 13 → **14.5px** |
| Channels card description | 11.5 → **13px** |
| Channels Connect button | 11 → **12.5px** |

## Letter spacing

| Letter-spacing | Used for |
|---|---|
| `-0.02em` | Hero numbers ($890 / 30px+) — tighter for big numerals |
| `-0.015em` | Canvas page title (serif) |
| `-0.01em` | Modal headings |
| `0.02em` | Brand wordmark, email-frame brand label |
| `0.04em` | Status pill uppercase letters |
| `0.06em` | "DRAFT READY" status uppercase |
| `0.08em` | Small uppercase section labels |
| `0.1em` | UPPERCASE breadcrumbs ("CAMPAIGN FLOW") |
| `0.12em` | KPI / Mission Control uppercase labels |
| `0.14em` | Time-skip dividers, demo tag |

## Line-height

| Line-height | Used for |
|---|---|
| `1.0` | Hero numbers |
| `1.2` | Canvas page title |
| `1.25` | Email headline |
| `1.3` | Plan card title, larger headings |
| `1.4` | Email step previews |
| `1.45` | Channel descriptions, small body |
| `1.5` | **Default body** (bubbles, copy) |
| `1.55` | Welcome modal copy |
| `1.65` | Email body copy |
| `1.7` | Insights list items |

## Hierarchy rules of thumb

1. **Bubble text is the floor.** Anything inside a chat bubble defaults to 12px (15px mobile). Bold for emphasis, line breaks for scannability — never larger sizes inside a bubble except the recap hero block.
2. **Bold prefix opens every message.** "Yesterday's update." / "Day 3 update." / "Week 1 recap." — same weight (700), inherits bubble size.
3. **Numbers > words.** Key dollar values, percentages, multipliers are **always bold** in body copy. Hero numbers get their own block with 26-36px sizing.
4. **Serif = "delivered" content.** Canvas page titles (the flow name) and email headlines. Nowhere else. Keeps the rendered email feeling like a real email and the canvas page feeling like a "report I'm reading", not "an app I'm using".
5. **Uppercase = label.** Anything uppercase with letter-spacing is a label (KPI key, status pill, breadcrumb), 8.5-12px range, never larger.
6. **Status pills use color, not size.** All 8.5-10px. Improving = blue, New = orange, Running = green. Hierarchy from color + tinted background, not bigger text.

## Color tokens that pair with type

| Token | Hex | Used with |
|---|---|---|
| `--text-primary` | `#f0f3f8` | Bold prefixes, key numbers, headings (dark theme) |
| `--text-secondary` | `#b8c0cc` | Bubble body, plain copy |
| `--text-muted` | `#8a93a3` | Sub-labels, secondary metadata |
| `--text-dim` | `#6a7280` | Timestamps, uppercase keys |
| `--brand-green` | `#6FED45` | Hero numbers, primary actions, key revenue values |
| `--brand-green-dark` | `#2a8a1a` | Canvas est-revenue, ROI on light canvas |
| `--warn-orange` | `#FFB547` | New status pill, "First time running" text |
| `--info-blue` | `#6FB4FF` | Improving status pill, "Aria's refining" italic note |
| Canvas text (light) | `#111111` / `#3a3a3a` / `#6a6a6a` / `#8a8a8a` | Canvas page text |
