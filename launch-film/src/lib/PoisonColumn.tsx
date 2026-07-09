// PoisonColumn.tsx — one "pick your poison" option (AGENCY / HIRE).
//
// A title that slides in from an edge (spring, damping 16), then supporting lines
// stamped one at a time 12f apart, each prefixed with a white ❌ that pops in
// (spring, damping 10, mass 0.4). Shared by Scenes 1 and 2.

import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../brand";

const Cross: React.FC<{ delay: number; dim: boolean }> = ({ delay, dim }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, mass: 0.4 },
  });
  return (
    <span
      style={{
        display: "inline-block",
        transform: `scale(${t})`,
        color: brand.white,
        opacity: dim ? 0.35 : 1,
        fontSize: 34,
        marginRight: 20,
        width: 34,
      }}
    >
      ✕
    </span>
  );
};

export const PoisonColumn: React.FC<{
  title: string;
  price: string;
  lines: string[];
  from: "left" | "right";
  /** Local frame the column starts sliding in. */
  slideDelay?: number;
  /** Local frame the first supporting line stamps; lines follow 12f apart. */
  lineStart?: number;
  dim?: boolean;
}> = ({
  title,
  price,
  lines,
  from,
  slideDelay = 0,
  lineStart = 40,
  dim = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slide = spring({
    frame: frame - slideDelay,
    fps,
    config: { damping: 16, mass: 0.9 },
  });
  const dir = from === "left" ? -1 : 1;
  const x = dir * 900 * (1 - slide);

  return (
    <div
      style={{
        transform: `translateX(${x}px)`,
        opacity: dim ? 0.4 * slide : slide,
        width: 620,
        textAlign: "left",
      }}
    >
      {/* title */}
      <div
        style={{
          fontFamily: brand.font,
          fontWeight: 900,
          fontSize: 88,
          color: brand.white,
          letterSpacing: 1,
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      {/* price — the only line without a cross; it's the sticker, not a con */}
      <div
        style={{
          fontFamily: brand.font,
          fontWeight: 700,
          fontSize: 46,
          color: brand.green,
          marginBottom: 40,
          opacity: dim ? 0.5 : 1,
        }}
      >
        {price}
      </div>

      {lines.map((line, i) => {
        const delay = lineStart + i * 12;
        const lineT = spring({
          frame: frame - delay,
          fps,
          config: { damping: 18, mass: 0.6 },
        });
        return (
          <div
            key={line}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 22,
              opacity: lineT,
              transform: `translateY(${(1 - lineT) * 12}px)`,
            }}
          >
            <Cross delay={delay + 2} dim={dim} />
            <span
              style={{
                fontFamily: brand.font,
                fontWeight: 500,
                fontSize: 40,
                color: dim ? brand.mid : brand.white,
              }}
            >
              {line}
            </span>
          </div>
        );
      })}
    </div>
  );
};
