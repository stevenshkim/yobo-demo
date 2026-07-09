// Cursor.tsx — blinking terminal cursor, 2 blinks/sec.
//
// on/off derived from the frame (deterministic, no state): the spec's
// `Math.floor(frame / (FPS/2)) % 2 === 0`.

import React from "react";
import { useCurrentFrame } from "remotion";
import { brand, FPS } from "../brand";

export const Cursor: React.FC<{
  color?: string;
  blinkFps?: number;
  width?: number;
  height?: number;
  /** Freeze the cursor solid (no blink) — used when a line is actively typing. */
  solid?: boolean;
}> = ({
  color = brand.green,
  blinkFps = FPS,
  width = 18,
  height = 64,
  solid = false,
}) => {
  const frame = useCurrentFrame();
  const on = solid || Math.floor(frame / (blinkFps / 2)) % 2 === 0;

  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width,
        height,
        backgroundColor: color,
        opacity: on ? 1 : 0,
        // sit on the text baseline
        verticalAlign: "text-bottom",
        marginLeft: 8,
        boxShadow: on ? `0 0 24px ${color}66` : "none",
      }}
    />
  );
};
