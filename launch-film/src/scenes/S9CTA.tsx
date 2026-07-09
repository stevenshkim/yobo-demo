// Scene 9 — CTA (local 0–270)
//
// The vision grid collapses back to one clean black screen, the logo mark +
// wordmark settle center, then the call to action and URL fade in. The green
// cursor blinks once and the film hard-cuts to black on the final beat.

import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { brand } from "../brand";
import { LogoMark, Wordmark } from "../lib/LogoMark";
import { Cursor } from "../lib/Cursor";

export const S9CTA: React.FC = () => {
  const frame = useCurrentFrame();

  // logo settles in
  const logoOpacity = interpolate(frame, [10, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const logoY = interpolate(frame, [10, 46], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaOpacity = interpolate(frame, [60, 84], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const urlOpacity = interpolate(frame, [92, 116], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // hard cut to black on the final beat
  const blackout = frame >= 262;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {/* logo lockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            opacity: logoOpacity,
            transform: `translateY(${logoY}px)`,
          }}
        >
          <LogoMark size={150} settled />
          <Wordmark fontSize={76} />
        </div>

        {/* CTA */}
        <div
          style={{
            opacity: ctaOpacity,
            fontFamily: brand.font,
            fontWeight: 700,
            fontSize: 72,
            color: brand.white,
            textAlign: "center",
          }}
        >
          Hire your AI growth marketer.
        </div>

        {/* URL + single blink cursor */}
        <div
          style={{
            opacity: urlOpacity,
            display: "flex",
            alignItems: "center",
            fontFamily: brand.font,
            fontWeight: 500,
            fontSize: 48,
            color: brand.green,
          }}
        >
          yobolabs.ai
          <Cursor width={16} height={48} />
        </div>
      </AbsoluteFill>

      {blackout ? <AbsoluteFill style={{ backgroundColor: brand.black }} /> : null}
    </AbsoluteFill>
  );
};
