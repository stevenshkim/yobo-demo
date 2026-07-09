// Scene 5 — The Fleet Blooms (local 0–390)
//
// `> deploy` types at the cursor, then seven agent nodes bloom radially out of
// the center into a connected constellation. Center = Growth Marketer
// (orchestrator, green ring); six satellites at 60° intervals. Connector lines
// draw from the center via strokeDashoffset after each node lands.

import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { brand } from "../brand";
import { Type } from "../lib/Type";

const SATELLITES = [
  "Brand DNA",
  "Data",
  "Campaign Strategist",
  "Creative",
  "Deploy / QA",
  "Performance",
];

const BLOOM_START = 40;
const RADIUS = 340;

export const S5Constellation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const cx = width / 2;
  const cy = height / 2 + 30;

  // command fades as the bloom begins
  const cmdOpacity = interpolate(frame, [0, 20, BLOOM_START, BLOOM_START + 10], [1, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  // node target positions (polar), starting at top and going clockwise
  const nodes = SATELLITES.map((label, i) => {
    const angle = (i * 60 - 90) * (Math.PI / 180);
    return {
      label,
      x: cx + RADIUS * Math.cos(angle),
      y: cy + RADIUS * Math.sin(angle),
      delay: BLOOM_START + 10 + i * 12,
    };
  });

  const centerT = spring({
    frame: frame - BLOOM_START,
    fps,
    config: { damping: 13, mass: 0.6 },
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      {/* command */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ opacity: cmdOpacity }}>
          <Type text="> deploy" cps={16} start={0} color={brand.green} fontSize={64} fontWeight={500} cursor />
        </div>
      </AbsoluteFill>

      {/* connector lines (drawn behind the nodes) */}
      <svg
        width={width}
        height={height}
        style={{ position: "absolute", inset: 0 }}
      >
        {nodes.map((n, i) => {
          const drawStart = n.delay + 10;
          const len = Math.hypot(n.x - cx, n.y - cy);
          const draw = interpolate(frame - drawStart, [0, 18], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={n.x}
              y2={n.y}
              stroke="rgba(255,255,255,0.22)"
              strokeWidth={2}
              strokeDasharray={len}
              strokeDashoffset={len * (1 - draw)}
            />
          );
        })}
      </svg>

      {/* satellite nodes */}
      {nodes.map((n, i) => {
        const t = spring({
          frame: frame - n.delay,
          fps,
          config: { damping: 14, mass: 0.6 },
        });
        if (t <= 0.001) return null;
        // bloom out from center → target, with a little settling rotation
        const x = cx + (n.x - cx) * t;
        const y = cy + (n.y - cy) * t;
        const rot = (1 - t) * (i % 2 === 0 ? 12 : -12);
        return (
          <div
            key={n.label}
            style={{
              position: "absolute",
              left: x,
              top: y,
              transform: `translate(-50%, -50%) rotate(${rot}deg)`,
              opacity: t,
            }}
          >
            <NodeChip label={n.label} />
          </div>
        );
      })}

      {/* center orchestrator node */}
      {frame >= BLOOM_START && (
        <div
          style={{
            position: "absolute",
            left: cx,
            top: cy,
            transform: `translate(-50%, -50%) scale(${centerT})`,
            opacity: centerT,
          }}
        >
          <CenterNode />
        </div>
      )}
    </AbsoluteFill>
  );
};

const NodeChip: React.FC<{ label: string }> = ({ label }) => (
  <div
    style={{
      padding: "18px 28px",
      borderRadius: 16,
      border: "1.5px solid rgba(255,255,255,0.25)",
      backgroundColor: "rgba(255,255,255,0.03)",
      fontFamily: brand.font,
      fontWeight: 500,
      fontSize: 32,
      color: brand.white,
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </div>
);

const CenterNode: React.FC = () => (
  <div
    style={{
      padding: "28px 40px",
      borderRadius: 20,
      border: `3px solid ${brand.green}`,
      backgroundColor: "rgba(111,237,69,0.06)",
      boxShadow: `0 0 60px ${brand.green}33`,
      fontFamily: brand.font,
      fontWeight: 900,
      fontSize: 40,
      color: brand.white,
      whiteSpace: "nowrap",
      textAlign: "center",
    }}
  >
    Growth Marketer
    <div
      style={{
        fontSize: 22,
        fontWeight: 500,
        color: brand.green,
        marginTop: 4,
        letterSpacing: 2,
      }}
    >
      ORCHESTRATOR
    </div>
  </div>
);
