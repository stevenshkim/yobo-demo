// src/fonts.ts — load Satoshi if the private asset is present, fallback-safe.
//
// Satoshi is not a Google Font; it ships as a private asset
// (public/fonts/Satoshi-Variable.woff2). We load it with the browser FontFace API
// and add it to the document when it resolves.
//
// Deliberately FIRE-AND-FORGET (no delayRender): the file is optional, and a
// missing/slow 404 must never block or fail a render. Under concurrent rendering
// a stalled 404 fetch would otherwise trip Remotion's delayRender timeout and
// abort the whole job. The trade-off — a few early frames on the fallback stack
// before the real font settles — is invisible for a system-sans lookalike, and
// moot while the file is absent. If you drop Satoshi in AND need frame-perfect
// metrics from frame 0, switch to a delayRender()/continueRender() pattern.
//
// (We also avoid @remotion/fonts `loadFont` here: it calls cancelRender()
// internally when the file 404s, which can't be caught.)
//
// Called at the module top of Root.tsx so the font is requested as early as
// possible.

import { staticFile } from "remotion";

const SATOSHI_FILE = "fonts/Satoshi-Variable.woff2";

let requested = false;

export const loadSatoshi = () => {
  if (requested || typeof document === "undefined") return;
  requested = true;

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
    });
};
