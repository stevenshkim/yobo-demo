// Scene 2 — Poison: Hire (local 0–210)
//
// The AGENCY column holds, dimmed, on the left. The HIRE column slides in from
// the right and locks by local f50, stamping its own cons.

import React from "react";
import { AbsoluteFill } from "remotion";
import { brand } from "../brand";
import { PoisonColumn } from "../lib/PoisonColumn";

export const S2Hire: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      <AbsoluteFill
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 120,
        }}
      >
        {/* AGENCY carries over, dimmed — it's already been made */}
        <PoisonColumn
          from="left"
          slideDelay={0}
          lineStart={0}
          dim
          title="AGENCY"
          price="$8k/mo retainer"
          lines={["Slow", "You never see the work"]}
        />
        {/* HIRE slides in and locks by ~f50 */}
        <PoisonColumn
          from="right"
          slideDelay={6}
          lineStart={46}
          title="IN-HOUSE HIRE"
          price="$120k/yr"
          lines={["One person. One skill.", "Ramps for months"]}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
