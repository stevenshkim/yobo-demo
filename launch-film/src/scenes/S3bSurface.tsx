// Scene 3b — The Surface Area (local 0–180)
//
// A dim grid echoing the YoboLabs architecture — four labeled quadrants
// (CONNECT / EXECUTE / MEASURE / COMPOUND). Two spotlights try to cover it: a
// green AGENCY patch (~20%) and a smaller HIRE patch (~8%). The uncovered ~72%
// stays black — the gap is the message. Hard cut to black on the final word.

import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { brand } from "../brand";

const COLS = 20;
const ROWS = 12;

const QUADRANTS = [
  { label: "CONNECT", col: 0.25, row: 0.25 },
  { label: "EXECUTE", col: 0.75, row: 0.25 },
  { label: "MEASURE", col: 0.25, row: 0.75 },
  { label: "COMPOUND", col: 0.75, row: 0.75 },
];

// Soft-edged spotlight built from layered flat-opacity circles (brand rule: no
// radial gradients). Concentric rings, denser toward the center, plus a low-
// amplitude sine flicker once it has sprung in.
const SoftSpotlight: React.FC<{
  cx: number;
  cy: number;
  radius: number;
  color: string;
  delay: number;
  flickerSeed: number;
}> = ({ cx, cy, radius, color, delay, flickerSeed }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = spring({ frame: frame - delay, fps, config: { damping: 15 } });
  const flicker =
    1 + 0.12 * Math.sin((frame + flickerSeed) / 3.5) * (frame > delay + 20 ? 1 : 0);

  const rings = 7;
  return (
    <>
      {Array.from({ length: rings }).map((_, i) => {
        const r = radius * ((i + 1) / rings) * t;
        // outer rings faint, inner rings brighter — stepped, not gradient
        const op = 0.05 + (1 - i / rings) * 0.14;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx - r,
              top: cy - r,
              width: r * 2,
              height: r * 2,
              borderRadius: "50%",
              backgroundColor: color,
              opacity: op * flicker * t,
            }}
          />
        );
      })}
    </>
  );
};

const Tag: React.FC<{
  text: string;
  x: number;
  y: number;
  delay: number;
}> = ({ text, x, y, delay }) => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [delay, delay + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 460,
        opacity: op,
        fontFamily: brand.font,
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 1.3,
        color: brand.white,
      }}
    >
      {text}
    </div>
  );
};

export const S3bSurface: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const pad = 100;
  const gridW = width - pad * 2;
  const gridH = height - pad * 2;
  const cellW = gridW / COLS;
  const cellH = gridH / ROWS;

  // hard cut to black on the final word
  const blackout = frame >= 168 ? 1 : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      {/* the dim architecture grid */}
      <AbsoluteFill>
        {Array.from({ length: ROWS }).map((_, r) =>
          Array.from({ length: COLS }).map((_, c) => (
            <div
              key={`${r}-${c}`}
              style={{
                position: "absolute",
                left: pad + c * cellW + 4,
                top: pad + r * cellH + 4,
                width: cellW - 8,
                height: cellH - 8,
                backgroundColor: brand.dim,
                borderRadius: 4,
              }}
            />
          )),
        )}
      </AbsoluteFill>

      {/* quadrant labels */}
      <AbsoluteFill>
        {QUADRANTS.map((q) => (
          <div
            key={q.label}
            style={{
              position: "absolute",
              left: pad + gridW * q.col,
              top: pad + gridH * q.row,
              transform: "translate(-50%, -50%)",
              fontFamily: brand.font,
              fontWeight: 700,
              fontSize: 40,
              letterSpacing: 4,
              color: "rgba(255,255,255,0.22)",
            }}
          >
            {q.label}
          </div>
        ))}
      </AbsoluteFill>

      {/* AGENCY spotlight — ~20%, green, upper-left region */}
      <SoftSpotlight
        cx={pad + gridW * 0.3}
        cy={pad + gridH * 0.34}
        radius={330}
        color={brand.green}
        delay={10}
        flickerSeed={0}
      />
      {/* HIRE spotlight — smaller, ~8%, lower-right */}
      <SoftSpotlight
        cx={pad + gridW * 0.72}
        cy={pad + gridH * 0.68}
        radius={190}
        color={brand.green}
        delay={40}
        flickerSeed={40}
      />

      {/* tags */}
      <Tag
        text="A dozen specialists. Still can't see your data. Still slow."
        x={pad + gridW * 0.06}
        y={pad + gridH * 0.06}
        delay={28}
      />
      <Tag
        text="One person. Two channels. Then they sleep."
        x={pad + gridW * 0.6}
        y={pad + gridH * 0.86}
        delay={58}
      />

      {/* hard cut to black */}
      {blackout ? (
        <AbsoluteFill style={{ backgroundColor: brand.black }} />
      ) : null}
    </AbsoluteFill>
  );
};
