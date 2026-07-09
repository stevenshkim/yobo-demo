// SpringIn.tsx — reusable spring entrance wrapper (offset + opacity).
//
// t = spring({frame: frame - delay, fps, config})
// A direction maps to a translate axis; `distance` is the travel in px.

import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export type SpringDir = "bottom" | "top" | "left" | "right" | "none";

const axis = (dir: SpringDir, d: number): [number, number] => {
  switch (dir) {
    case "bottom":
      return [0, d];
    case "top":
      return [0, -d];
    case "left":
      return [-d, 0];
    case "right":
      return [d, 0];
    case "none":
      return [0, 0];
  }
};

export const SpringIn: React.FC<{
  delay?: number;
  from?: SpringDir;
  distance?: number;
  damping?: number;
  mass?: number;
  stiffness?: number;
  /** Also scale from `scaleFrom` → 1 (e.g. the ❌ pop). */
  scaleFrom?: number;
  /** Settle to a small residual rotation for the constellation nodes. */
  rotateFrom?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({
  delay = 0,
  from = "bottom",
  distance = 40,
  damping = 14,
  mass = 0.6,
  stiffness,
  scaleFrom,
  rotateFrom,
  style,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const t = spring({
    frame: frame - delay,
    fps,
    config: {
      damping,
      mass,
      ...(stiffness !== undefined ? { stiffness } : {}),
    },
  });

  const [dx, dy] = axis(from, distance);
  const x = dx * (1 - t);
  const y = dy * (1 - t);

  const transforms: string[] = [`translate(${x}px, ${y}px)`];
  if (scaleFrom !== undefined) {
    transforms.push(`scale(${scaleFrom + (1 - scaleFrom) * t})`);
  }
  if (rotateFrom !== undefined) {
    transforms.push(`rotate(${rotateFrom * (1 - t)}deg)`);
  }

  return (
    <div
      style={{
        opacity: t,
        transform: transforms.join(" "),
        ...style,
      }}
    >
      {children}
    </div>
  );
};
