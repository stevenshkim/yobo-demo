// src/fonts.ts — load Satoshi if the private asset is present, fallback-safe.
//
// Satoshi is not a Google Font; it ships as a private asset
// (public/fonts/Satoshi-Variable.woff2). We load it with the browser FontFace API
// wrapped in delayRender/continueRender so the render blocks only until the font
// resolves. Crucially, a MISSING file must NOT fail the render — so we
// continueRender() on error and fall back to the system stack in brand.ts.
//
// (This is why we don't use @remotion/fonts `loadFont` here: it calls
// cancelRender() internally when the file 404s, which can't be caught.)
//
// Called at the module top of Root.tsx so the font is requested before the first
// frame is painted.

import { continueRender, delayRender, staticFile } from "remotion";

const SATOSHI_FILE = "fonts/Satoshi-Variable.woff2";

let requested = false;

export const loadSatoshi = () => {
  if (requested || typeof document === "undefined") return;
  requested = true;

  const handle = delayRender("Loading Satoshi");

  const font = new FontFace(
    "Satoshi",
    `url(${staticFile(SATOSHI_FILE)}) format("woff2")`,
    { weight: "500 900" }, // one variable file covers 500 / 700 / 900
  );

  font
    .load()
    .then((loaded) => {
      document.fonts.add(loaded);
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.warn(
        "[fonts] Satoshi not found at public/" +
          SATOSHI_FILE +
          " — falling back to system sans. Drop the .woff2 in to match brand.",
      );
    })
    .finally(() => continueRender(handle));
};
