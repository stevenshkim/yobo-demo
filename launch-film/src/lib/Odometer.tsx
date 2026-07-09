// Odometer.tsx — rolls a number up to a target over `durationInFrames`.
//
// Uses an ease-out so the count decelerates into its final value, which reads as
// "settling" rather than a linear tick.

import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { brand } from "../brand";

const format = (n: number, decimals: number) =>
  decimals > 0
    ? n.toFixed(decimals)
    : Math.round(n).toLocaleString("en-US");

export const Odometer: React.FC<{
  to: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  start?: number;
  durationInFrames?: number;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  style?: React.CSSProperties;
}> = ({
  to,
  from = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  start = 0,
  durationInFrames = 40,
  color = brand.white,
  fontSize = 160,
  fontWeight = 900,
  style,
}) => {
  const frame = useCurrentFrame();

  const value = interpolate(
    frame - start,
    [0, durationInFrames],
    [from, to],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    },
  );

  return (
    <span
      style={{
        fontFamily: brand.font,
        fontWeight,
        fontSize,
        color,
        // tabular figures keep the width steady as digits roll
        fontVariantNumeric: "tabular-nums",
        fontFeatureSettings: '"tnum" 1',
        ...style,
      }}
    >
      {prefix}
      {format(value, decimals)}
      {suffix}
    </span>
  );
};
