// Scene 8 — The Vision (local 0–240)
//
// Pull back: the single fleet multiplies into a field of many brands' fleets, all
// pulsing green. The wrapper scales out (1 → 0.35) while the grid tiles in. Each
// tile pulses on a sine with a per-tile phase offset so the field shimmers rather
// than blinking in unison. "The agent layer for consumer commerce."

import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { brand } from "../brand";

const GRID_COLS = 9;
const GRID_ROWS = 6;

const MiniFleet: React.FC<{ phase: number }> = ({ phase }) => {
  const frame = useCurrentFrame();
  const pulse = 0.55 + 0.45 * Math.sin(frame / 12 + phase);
  const R = 46;
  const sats = Array.from({ length: 6 }).map((_, i) => {
    const a = (i * 60 - 90) * (Math.PI / 180);
    return { x: Math.cos(a) * R, y: Math.sin(a) * R };
  });
  return (
    <div style={{ position: "relative", width: 140, height: 140 }}>
      <svg width={140} height={140} style={{ position: "absolute", inset: 0 }}>
        {sats.map((s, i) => (
          <line
            key={i}
            x1={70}
            y1={70}
            x2={70 + s.x}
            y2={70 + s.y}
            stroke={brand.green}
            strokeOpacity={0.25 * pulse}
            strokeWidth={1.5}
          />
        ))}
      </svg>
      {sats.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 70 + s.x - 6,
            top: 70 + s.y - 6,
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: brand.green,
            opacity: pulse,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          left: 70 - 11,
          top: 70 - 11,
          width: 22,
          height: 22,
          borderRadius: "50%",
          backgroundColor: brand.green,
          boxShadow: `0 0 ${18 * pulse}px ${brand.green}`,
          opacity: 0.7 + 0.3 * pulse,
        }}
      />
    </div>
  );
};

export const S8Vision: React.FC = () => {
  const frame = useCurrentFrame();

  // Cinematic pull-back: start zoomed into the single origin fleet (scale 2.2),
  // pull back to reveal the full field tiling the frame.
  const scale = interpolate(frame, [0, 90], [2.2, 0.75], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const centerC = Math.floor(GRID_COLS / 2);
  const centerR = Math.floor(GRID_ROWS / 2);

  const textOpacity = interpolate(frame, [90, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gap: 120,
          }}
        >
          {Array.from({ length: GRID_ROWS }).map((_, r) =>
            Array.from({ length: GRID_COLS }).map((_, c) => {
              const isCenter = r === centerR && c === centerC;
              // tiles other than the origin fade in as we zoom out
              const tileOpacity = isCenter
                ? 1
                : interpolate(frame, [25, 85], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  });
              return (
                <div key={`${r}-${c}`} style={{ opacity: tileOpacity }}>
                  <MiniFleet phase={r * 1.7 + c * 0.9} />
                </div>
              );
            }),
          )}
        </div>
      </AbsoluteFill>

      {/* headline over the field */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            opacity: textOpacity,
            fontFamily: brand.font,
            fontWeight: 900,
            fontSize: 96,
            color: brand.white,
            textAlign: "center",
            textShadow: "0 8px 60px rgba(0,0,0,0.9)",
            maxWidth: 1400,
          }}
        >
          The agent layer for consumer commerce.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
