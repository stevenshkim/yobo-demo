// Scene 1 — Poison: Agency (local 0–240)
//
// Green cursor blinks center. `Type` reveals `growth = agency OR hire` (0–70).
// At f70 the line splits and two columns slide in from opposite edges; the AGENCY
// column locks by f110 and stamps its cons line-by-line.

import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { brand } from "../brand";
import { Type } from "../lib/Type";
import { PoisonColumn } from "../lib/PoisonColumn";

const SPLIT = 70;

export const S1Poison: React.FC = () => {
  const frame = useCurrentFrame();

  // the equation is centered and present until the split, then lifts away
  const eqOpacity = interpolate(frame, [SPLIT - 8, SPLIT + 6], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const eqY = interpolate(frame, [SPLIT - 8, SPLIT + 10], [0, -80], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      {/* the equation, center screen */}
      <AbsoluteFill
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div
          style={{
            opacity: eqOpacity,
            transform: `translateY(${eqY}px)`,
          }}
        >
          <Type
            text="growth = agency OR hire"
            cps={18}
            start={0}
            fontSize={78}
            fontWeight={700}
            cursor
          />
        </div>
      </AbsoluteFill>

      {/* the two columns, sliding in from opposite edges after the split */}
      {frame >= SPLIT - 2 && (
        <AbsoluteFill
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 120,
          }}
        >
          <PoisonColumn
            from="left"
            slideDelay={SPLIT}
            lineStart={SPLIT + 40}
            title="AGENCY"
            price="$8k/mo retainer"
            lines={["Slow", "You never see the work"]}
          />
          {/* right slot holds a ghost column — HIRE fills it in Scene 2 */}
          <div style={{ width: 620, opacity: 0.0 }} />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
