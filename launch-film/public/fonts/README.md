# Fonts — Satoshi (private asset)

Satoshi is **not** a Google Font and is not committed to this repo.

Drop the file(s) here to match brand exactly:

- `Satoshi-Variable.woff2` (preferred — single variable file covers all weights), **or**
- the discrete weights the film uses: Medium (500), Bold (700), Black (900).

`src/fonts.ts` calls `@remotion/fonts` `loadFont()` on `Satoshi-Variable.woff2`. If
the file is missing the film renders on the system sans fallback declared in
`src/brand.ts` — nothing breaks, it just isn't on-brand.
