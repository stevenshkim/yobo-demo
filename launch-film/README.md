# YoboLabs Launch Film — "The Third Door"

A 96-second launch film built with [Remotion](https://remotion.dev). Implements
the build spec verbatim: 1920×1080, 30fps, 2880 frames, nine scenes across five
acts. True-black background, three-color brand system, motion driven entirely by
`useCurrentFrame()` + `interpolate()`/`spring()`.

## Run it

```bash
cd launch-film
npm install
npm run studio          # design/preview in the Remotion studio
npm run render          # → out/yobolabs-launch.mp4 (h264, crf 18)
npm run render:teaser   # → out/yobolabs-teaser.mp4 (6s social cut)
npm run typecheck       # tsc --noEmit
```

## Compositions

| id | What | Size | Duration |
|----|------|------|----------|
| `Film` | Master launch film | 1920×1080 | 96s / 2880f |
| `Teaser` | 6s cut: avalanche → logo → url | 1920×1080 | 6s / 180f |

## Props (studio sidebar / `--props`)

| prop | default | effect |
|------|---------|--------|
| `audioEnabled` | `false` | plays the audio layer (needs the private stems — see `public/audio/README.md`) |
| `showCaptions` | `true` | burns in the VO captions; turn off for a clean silent feed cut |

## Private assets (not committed)

The film renders on a clean checkout with graceful fallbacks. Drop the real
assets in to make it on-brand:

- **Satoshi** → `public/fonts/` (falls back to system sans) — see that folder's README.
- **Audio stems** → `public/audio/` (audio stays off until present) — see that folder's README.
- **Logo / source icons** → already included as self-drawn SVGs in `public/`.

## Structure

```
src/
├── Root.tsx            registers <Film/> + <Teaser/>
├── Film.tsx            master <Series> of the 9 scenes + captions + audio
├── Teaser.tsx          6s social cut
├── brand.ts            color + composition tokens (single source of truth)
├── fonts.ts            Satoshi loader (fallback-safe)
├── schema.ts           zod prop shapes
├── lib/                Type, SpringIn, Cursor, Odometer, useStagger, LogoMark, …
└── scenes/             S1Poison … S9CTA
```

Scene-by-scene notes and the full VO script live in the build spec.
