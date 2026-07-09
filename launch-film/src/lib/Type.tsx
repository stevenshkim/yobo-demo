// Type.tsx — typewriter reveal. Reveals `text` char-by-char at `cps`
// (characters per second), starting at local frame `start`.
//
// visibleChars derived purely from the frame so scrubbing works:
//   interpolate(frame - start, [0, text.length / cps * FPS], [0, text.length])

import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { brand, FPS } from "../brand";
import { Cursor } from "./Cursor";

export const Type: React.FC<{
  text: string;
  cps?: number;
  start?: number;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  /** Render a green cursor at the write head (solid while typing, blinks after). */
  cursor?: boolean;
  style?: React.CSSProperties;
}> = ({
  text,
  cps = 18,
  start = 0,
  color = brand.white,
  fontSize = 64,
  fontWeight = 700,
  letterSpacing = 0,
  cursor = false,
  style,
}) => {
  const frame = useCurrentFrame();
  const durationFrames = (text.length / cps) * FPS;

  const visibleChars = Math.floor(
    interpolate(frame - start, [0, durationFrames], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  const done = visibleChars >= text.length;
  const shown = text.slice(0, Math.max(0, visibleChars));

  return (
    <span
      style={{
        fontFamily: brand.font,
        color,
        fontSize,
        fontWeight,
        letterSpacing,
        whiteSpace: "pre-wrap",
        ...style,
      }}
    >
      {shown}
      {cursor && frame >= start ? (
        <Cursor
          color={brand.green}
          width={Math.round(fontSize * 0.32)}
          height={Math.round(fontSize * 0.95)}
          // solid while actively typing, blink once the line lands
          solid={!done}
        />
      ) : null}
    </span>
  );
};
