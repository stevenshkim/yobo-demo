// Scene 3a — The Avalanche (local 0–210)
//
// The two columns crack and fall away (f0–20), then the *actual job* rains in:
// task tokens dropping from the top with an accelerating stagger (useStagger,
// decay < 1) until the frame is ~70% covered and overflowing. A green corner
// counter ticks up the scale of the work.

import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { brand } from "../brand";
import { Cursor } from "../lib/Cursor";
import { Odometer } from "../lib/Odometer";
import { useStagger } from "../lib/useStagger";

// Broad mix across consumer-brand types — commerce, F&B, booking, payments, analytics.
const TOKENS = [
  "Connect Shopify",
  "Connect Toast",
  "Connect Square",
  "Connect OpenTable",
  "Connect Klaviyo",
  "Connect Stripe",
  "Connect GA4",
  "Connect Meta Ads",
  "Connect Google Ads",
  "Connect TikTok",
  "segment the list",
  "forecast demand",
  "write the campaign",
  "render 3 creatives",
  "build the journey",
  "launch across 17 channels",
  "attribute revenue",
  "measure LTV / CAC",
  "learn",
  "do it again tomorrow…",
];

// Deterministic pseudo-random in [0,1) from an integer seed — keeps jitter stable
// across scrubs/renders (no Math.random, which is banned in this environment).
const rand = (seed: number) => {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

export const S3aAvalanche: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Columns crack and fall away over f0–20.
  const fall = spring({ frame, fps, config: { damping: 12, mass: 0.5 } });
  const colScale = 1 - 0.4 * fall;
  const colOpacity = interpolate(frame, [0, 18], [1, 0], {
    extrapolateRight: "clamp",
  });

  // Accelerating stagger: tokens start dropping at f24, gaps shrinking each step.
  const delays = useStagger({
    count: TOKENS.length,
    baseDelay: 9,
    decay: 0.9,
    offset: 24,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.black, overflow: "hidden" }}>
      {/* the departing columns, cracking down to nothing */}
      {colOpacity > 0.01 && (
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            opacity: colOpacity,
            transform: `scale(${colScale})`,
          }}
        >
          <div
            style={{
              fontFamily: brand.font,
              fontWeight: 900,
              fontSize: 84,
              color: brand.mid,
              display: "flex",
              gap: 120,
            }}
          >
            <span>AGENCY</span>
            <span>HIRE</span>
          </div>
        </AbsoluteFill>
      )}

      {/* cursor, alone, before the rain */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ opacity: interpolate(frame, [18, 26, 40], [0, 1, 0]) }}>
          <Cursor />
        </div>
      </AbsoluteFill>

      {/* the rain of tasks */}
      <AbsoluteFill>
        {TOKENS.map((token, i) => {
          const delay = delays[i];
          const t = spring({
            frame: frame - delay,
            fps,
            config: { damping: 13, mass: 0.7 },
          });
          if (t <= 0.001) return null;

          // loose 4-column masonry, filling top→bottom, with jitter
          const cols = 4;
          const col = i % cols;
          const row = Math.floor(i / cols);
          const cellW = width / cols;
          const baseX = col * cellW + cellW * 0.12;
          const jitterX = (rand(i * 3.1) - 0.5) * 80; // ±40px
          const x = baseX + jitterX;

          const topPad = 120;
          const rowH = (height - topPad - 80) / Math.ceil(TOKENS.length / cols);
          const targetY = topPad + row * rowH + (rand(i * 7.7) - 0.5) * 40;
          const y = targetY - (1 - t) * 260; // drop in from above

          const rot = (rand(i * 5.3) - 0.5) * 8; // ±4°
          const fontSize = 34 + Math.floor(rand(i * 9.9) * 10);

          return (
            <div
              key={token}
              style={{
                position: "absolute",
                left: x,
                top: y,
                opacity: t,
                transform: `rotate(${rot}deg)`,
                fontFamily: brand.font,
                fontWeight: 500,
                fontSize,
                color: brand.white,
                whiteSpace: "nowrap",
              }}
            >
              {token}
            </div>
          );
        })}
      </AbsoluteFill>

      {/* corner counter, top-right, green — on a flat black plate so it stays
          legible above the raining tokens (solid fill, not a gradient) */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 56,
          textAlign: "right",
          lineHeight: 1.1,
          padding: "18px 28px",
          backgroundColor: "rgba(0,0,0,0.72)",
          borderRadius: 14,
        }}
      >
        <div>
          <Odometer
            to={40}
            suffix="+ tools"
            start={30}
            durationInFrames={90}
            color={brand.green}
            fontSize={64}
            fontWeight={900}
          />
        </div>
        <div>
          <Odometer
            to={17}
            suffix=" channels"
            start={60}
            durationInFrames={70}
            color={brand.green}
            fontSize={64}
            fontWeight={900}
          />
        </div>
        <div
          style={{
            fontFamily: brand.font,
            fontWeight: 700,
            fontSize: 44,
            color: brand.green,
            opacity: interpolate(frame, [120, 140], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          every single day.
        </div>
      </div>
    </AbsoluteFill>
  );
};
