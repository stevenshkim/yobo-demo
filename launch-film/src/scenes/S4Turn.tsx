// Scene 4 — The Turn (local 0–390)
//
// A command types itself (f0–90). Three value lines rise one at a time from the
// bottom (24f apart). Then the whole thing clears and the logo mark self-draws
// (f280–360) with the wordmark fading in beside it. "There's a third door."

import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { brand } from "../brand";
import { Type } from "../lib/Type";
import { SpringIn } from "../lib/SpringIn";
import { LogoMark, Wordmark } from "../lib/LogoMark";

const LINES = [
  "Faster than an agency.",
  "Better than a hire.",
  "A fraction of the cost.",
];

const LOGO_START = 280;

export const S4Turn: React.FC = () => {
  const frame = useCurrentFrame();

  // command + lines clear just before the logo draws
  const clear = interpolate(frame, [LOGO_START - 20, LOGO_START], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const wordmarkOpacity = interpolate(frame, [LOGO_START + 60, LOGO_START + 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      {/* command + value lines */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: clear,
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: 70 }}>
          <Type
            text="> hire a growth marketer that executes end to end"
            cps={20}
            start={0}
            color={brand.green}
            fontSize={52}
            fontWeight={500}
            cursor
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
            alignItems: "center",
          }}
        >
          {LINES.map((line, i) => (
            <SpringIn
              key={line}
              delay={110 + i * 24}
              from="bottom"
              distance={44}
              damping={14}
              mass={0.6}
            >
              <div
                style={{
                  fontFamily: brand.font,
                  fontWeight: 700,
                  fontSize: 72,
                  color: brand.white,
                }}
              >
                {line}
              </div>
            </SpringIn>
          ))}
        </div>
      </AbsoluteFill>

      {/* logo self-draw */}
      {frame >= LOGO_START - 5 && (
        <AbsoluteFill
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 44,
          }}
        >
          <LogoMark size={240} drawStart={LOGO_START} drawDuration={80} />
          <div style={{ opacity: wordmarkOpacity }}>
            <Wordmark fontSize={104} />
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
