// Caption.tsx — burned-in VO caption, pinned low-center.
//
// Fades in/out at the edges of its window so lines don't hard-pop. Rendered only
// when the film's `showCaptions` prop is on (the silent social cut turns it off).

import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { brand } from "../brand";

export const Caption: React.FC<{
  text: string;
  start: number;
  end: number;
  fade?: number;
}> = ({ text, start, end, fade = 10 }) => {
  const frame = useCurrentFrame();
  if (frame < start || frame > end) return null;

  const opacity = interpolate(
    frame,
    [start, start + fade, end - fade, end],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 96,
      }}
    >
      <div
        style={{
          opacity,
          maxWidth: 1400,
          textAlign: "center",
          fontFamily: brand.font,
          fontWeight: 500,
          fontSize: 34,
          lineHeight: 1.3,
          color: brand.mid,
          letterSpacing: 0.2,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
