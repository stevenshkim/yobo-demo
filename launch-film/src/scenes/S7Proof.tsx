// Scene 7 — The Proof (local 0–240)
//
// Two beats, big Satoshi 900, one at a time (120f each).
//   Beat 1: "$10M+ in client revenue attributed" — the 10M rolls on an Odometer.
//   Beat 2: "3x guaranteed — or you don't pay" with a fine sub-line and a green
//           underline that swipes in under the headline.

import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { brand } from "../brand";
import { Odometer } from "../lib/Odometer";

const BEAT = 120;

export const S7Proof: React.FC = () => {
  const frame = useCurrentFrame();

  const beat1Opacity = interpolate(
    frame,
    [0, 12, BEAT - 14, BEAT],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const beat2Opacity = interpolate(
    frame,
    [BEAT, BEAT + 12, 240],
    [0, 1, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const underline = interpolate(frame, [BEAT + 18, BEAT + 46], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      {/* Beat 1 */}
      {frame < BEAT + 4 && (
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            opacity: beat1Opacity,
            flexDirection: "column",
          }}
        >
          <Odometer
            to={10}
            prefix="$"
            suffix="M+"
            start={8}
            durationInFrames={60}
            color={brand.white}
            fontSize={260}
            fontWeight={900}
          />
          <div
            style={{
              marginTop: 12,
              fontFamily: brand.font,
              fontWeight: 700,
              fontSize: 54,
              color: brand.white,
            }}
          >
            in client revenue attributed
          </div>
        </AbsoluteFill>
      )}

      {/* Beat 2 */}
      {frame >= BEAT - 4 && (
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            opacity: beat2Opacity,
            flexDirection: "column",
          }}
        >
          <div style={{ position: "relative", paddingBottom: 24 }}>
            <div
              style={{
                fontFamily: brand.font,
                fontWeight: 900,
                fontSize: 128,
                color: brand.white,
                textAlign: "center",
              }}
            >
              3x guaranteed — or you don't pay
            </div>
            {/* green underline swipe */}
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                height: 10,
                width: `${underline}%`,
                backgroundColor: brand.green,
                borderRadius: 5,
              }}
            />
          </div>
          <div
            style={{
              marginTop: 40,
              fontFamily: brand.font,
              fontWeight: 500,
              fontSize: 40,
              color: brand.mid,
            }}
          >
            $500/mo → $1,500 in attributed revenue
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
