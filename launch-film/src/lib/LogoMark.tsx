// LogoMark.tsx — the YoboLabs "%" mark with the upward growth triangle.
//
// No-box variant on black. The mark self-draws (spec Scene 4):
//   - the "%" strokes (two dots + diagonal) fade in
//   - the upward growth triangle draws via animated strokeDashoffset
//   - settles to the solid green triangle + white "%"
//
// A static, non-animated copy also lives at public/logo-mark.svg for tooling that
// needs a flat asset; this component is the animated source of truth.

import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { brand } from "../brand";

// Perimeter of the triangle path below — used as the dash length so the stroke
// draws exactly once from 0 → full.
const TRI_PERIMETER = 300;

export const LogoMark: React.FC<{
  size?: number;
  /** Local frame at which the draw begins. */
  drawStart?: number;
  drawDuration?: number;
  /** Force fully-drawn (used in the CTA where no animation is needed). */
  settled?: boolean;
}> = ({ size = 220, drawStart = 0, drawDuration = 80, settled = false }) => {
  const frame = useCurrentFrame();

  const draw = settled
    ? 1
    : interpolate(frame - drawStart, [0, drawDuration], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  // "%" fades in first, over the front half of the draw window.
  const pctOpacity = settled
    ? 1
    : interpolate(frame - drawStart, [0, drawDuration * 0.5], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  // Triangle fill blooms in over the back half, after the stroke has drawn.
  const fillOpacity = settled
    ? 1
    : interpolate(
        frame - drawStart,
        [drawDuration * 0.6, drawDuration],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
      );

  const dashOffset = TRI_PERIMETER * (1 - draw);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* upward growth triangle — self-draws, then fills green */}
      <polygon
        points="60,14 96,74 24,74"
        fill={brand.green}
        fillOpacity={fillOpacity}
        stroke={brand.green}
        strokeWidth={6}
        strokeLinejoin="round"
        strokeDasharray={TRI_PERIMETER}
        strokeDashoffset={dashOffset}
      />

      {/* the "%" : two dots + a diagonal, in white, riding under the triangle base */}
      <g opacity={pctOpacity} stroke={brand.white} strokeWidth={7}>
        <line
          x1={36}
          y1={104}
          x2={84}
          y2={86}
          strokeLinecap="round"
        />
        <circle cx={34} cy={88} r={7.5} fill={brand.white} stroke="none" />
        <circle cx={86} cy={102} r={7.5} fill={brand.white} stroke="none" />
      </g>
    </svg>
  );
};

export const Wordmark: React.FC<{
  fontSize?: number;
  opacity?: number;
  color?: string;
}> = ({ fontSize = 96, opacity = 1, color = brand.white }) => (
  <span
    style={{
      fontFamily: brand.font,
      fontWeight: 700,
      fontSize,
      letterSpacing: -1,
      color,
      opacity,
    }}
  >
    Yobo<span style={{ color: brand.green }}>Labs</span>
  </span>
);
