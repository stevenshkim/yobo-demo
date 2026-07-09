// Scene 6 — The Fleet Executes (local 0–510)
//
// A fast montage of the fleet *doing the work*. Eight panels (~64f each) in a
// local <Series>, each wiping in with a green leading edge (an animated
// clip-inset) so the cuts snap on the pulse beat.

import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Series,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { brand } from "../brand";
import { Type } from "../lib/Type";
import { Odometer } from "../lib/Odometer";
import { sourceIcons } from "../lib/SourceIcons";

const PANEL = 64;

// ---- green leading-edge wipe wrapper --------------------------------------
const Panel: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => {
  const frame = useCurrentFrame();
  // reveal left→right over 12f
  const reveal = interpolate(frame, [0, 12], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      <AbsoluteFill
        style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
      >
        {/* panel label, top-left */}
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 96,
            fontFamily: brand.font,
            fontWeight: 700,
            fontSize: 30,
            letterSpacing: 3,
            color: brand.green,
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
        {children}
      </AbsoluteFill>
      {/* the green leading edge, riding the wipe front */}
      {reveal < 100 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${reveal}%`,
            width: 10,
            backgroundColor: brand.green,
            boxShadow: `0 0 40px ${brand.green}`,
          }}
        />
      )}
    </AbsoluteFill>
  );
};

const Center: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
    {children}
  </AbsoluteFill>
);

// ---- Panel 1 — reads your source ------------------------------------------
const P1Source: React.FC = () => {
  const frame = useCurrentFrame();
  const idx = Math.floor(frame / 11) % sourceIcons.length;
  const { Icon, label } = sourceIcons[idx];
  return (
    <Panel label="Reads your source">
      <Center>
        <div style={{ textAlign: "center" }}>
          <Icon size={220} color={brand.green} />
          <div
            style={{
              marginTop: 28,
              fontFamily: brand.font,
              fontWeight: 700,
              fontSize: 52,
              color: brand.white,
            }}
          >
            {label}
          </div>
          <div
            style={{
              marginTop: 8,
              fontFamily: brand.font,
              fontWeight: 500,
              fontSize: 26,
              color: brand.mid,
            }}
          >
            source-agnostic — whatever you already run
          </div>
        </div>
      </Center>
    </Panel>
  );
};

// ---- Panel 2 — data surfaces a dormant segment ----------------------------
const P2Data: React.FC = () => {
  const frame = useCurrentFrame();
  const cols = 16;
  const rows = 9;
  const dots: React.ReactNode[] = [];
  // a lit cluster near the middle-right
  const clusterC = 11;
  const clusterR = 4;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const inCluster = Math.abs(c - clusterC) <= 1 && Math.abs(r - clusterR) <= 1;
      const lit = inCluster && frame > 22;
      dots.push(
        <div
          key={`${r}-${c}`}
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            backgroundColor: lit ? brand.green : brand.dim,
            boxShadow: lit ? `0 0 20px ${brand.green}` : "none",
            transform: lit ? "scale(1.25)" : "scale(1)",
          }}
        />,
      );
    }
  }
  return (
    <Panel label="Data">
      <Center>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: 26,
            }}
          >
            {dots}
          </div>
          <div
            style={{
              marginTop: 44,
              textAlign: "center",
              fontFamily: brand.font,
              fontWeight: 700,
              fontSize: 42,
              color: brand.white,
              opacity: interpolate(frame, [26, 40], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            1,240 customers you haven't emailed in 90 days
          </div>
        </div>
      </Center>
    </Panel>
  );
};

// ---- Panel 3 — strategist writes a campaign -------------------------------
const P3Strategist: React.FC = () => (
  <Panel label="Strategist">
    <Center>
      <div style={{ width: 1100 }}>
        {[
          "> win-back: lapsed 90-day buyers",
          "> hook: “we saved your spot”",
          "> 3-touch journey · 12% off · 7-day window",
        ].map((line, i) => (
          <div key={line} style={{ marginBottom: 22 }}>
            <Type
              text={line}
              cps={26}
              start={6 + i * 14}
              color={i === 0 ? brand.green : brand.white}
              fontSize={40}
              fontWeight={500}
            />
          </div>
        ))}
      </div>
    </Center>
  </Panel>
);

// ---- Panel 4 — creative renders 3 variants --------------------------------
const P4Creative: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <Panel label="Creative">
      <Center>
        <div style={{ display: "flex", gap: 44 }}>
          {[0, 1, 2].map((i) => {
            const t = spring({
              frame: frame - (10 + i * 10),
              fps,
              config: { damping: 12 },
            });
            return (
              <div
                key={i}
                style={{
                  width: 300,
                  height: 400,
                  borderRadius: 18,
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  transform: `perspective(1200px) rotateY(${(1 - t) * 90}deg)`,
                  opacity: t,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 26,
                }}
              >
                <div
                  style={{
                    height: 210,
                    borderRadius: 12,
                    backgroundColor: brand.dim,
                    marginBottom: 20,
                  }}
                />
                <div
                  style={{
                    height: 16,
                    width: "80%",
                    borderRadius: 6,
                    backgroundColor: "rgba(255,255,255,0.3)",
                    marginBottom: 12,
                  }}
                />
                <div
                  style={{
                    height: 40,
                    width: 140,
                    borderRadius: 8,
                    backgroundColor: brand.green,
                  }}
                />
              </div>
            );
          })}
        </div>
      </Center>
    </Panel>
  );
};

// ---- Panel 5 — deploy / QA pushes live ------------------------------------
const P5Deploy: React.FC = () => {
  const frame = useCurrentFrame();
  const live = frame > 26;
  const knob = interpolate(frame, [22, 32], [0, 56], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Panel label="Deploy / QA">
      <Center>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 130,
              height: 66,
              borderRadius: 40,
              backgroundColor: live ? brand.green : brand.dim,
              margin: "0 auto",
              position: "relative",
              transition: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 7,
                left: 7 + knob,
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: brand.white,
              }}
            />
          </div>
          <div
            style={{
              marginTop: 34,
              fontFamily: brand.font,
              fontWeight: 900,
              fontSize: 88,
              letterSpacing: 4,
              color: live ? brand.green : brand.mid,
            }}
          >
            {live ? "LIVE" : "…"}
          </div>
        </div>
      </Center>
    </Panel>
  );
};

// ---- Panel 6 — launch across 17 channels ----------------------------------
const CHANNELS = [
  "Email", "SMS", "Push", "WhatsApp", "Meta", "Google", "TikTok", "Pinterest",
  "Snap", "Reddit", "YouTube", "Klaviyo", "Postscript", "Attentive", "Web",
  "In-app", "Direct mail",
];
const P6Channels: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Panel label="Launch across 17 channels">
      <Center>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            width: 1200,
            justifyContent: "center",
          }}
        >
          {CHANNELS.map((ch, i) => {
            const on = frame > 8 + i * 2.6;
            return (
              <div
                key={ch}
                style={{
                  padding: "16px 26px",
                  borderRadius: 999,
                  border: `1.5px solid ${on ? brand.green : "rgba(255,255,255,0.18)"}`,
                  color: on ? brand.black : brand.mid,
                  backgroundColor: on ? brand.green : "transparent",
                  fontFamily: brand.font,
                  fontWeight: 700,
                  fontSize: 30,
                }}
              >
                {ch}
              </div>
            );
          })}
        </div>
      </Center>
    </Panel>
  );
};

// ---- Panel 7 — performance dashboard bars climb ---------------------------
const P7Performance: React.FC = () => {
  const frame = useCurrentFrame();
  const bars = [0.5, 0.7, 0.55, 0.85, 0.95, 0.8, 1.0];
  return (
    <Panel label="Performance">
      <Center>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 34,
            height: 420,
          }}
        >
          {bars.map((h, i) => {
            const grow = interpolate(frame - (8 + i * 3), [0, 22], [0, h], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={i}
                style={{
                  width: 84,
                  height: `${grow * 100}%`,
                  backgroundColor: i === bars.length - 1 ? brand.green : "rgba(255,255,255,0.35)",
                  borderRadius: "8px 8px 0 0",
                }}
              />
            );
          })}
        </div>
      </Center>
    </Panel>
  );
};

// ---- Panel 8 — revenue counter climbs -------------------------------------
const P8Revenue: React.FC = () => (
  <Panel label="Revenue">
    <Center>
      <div style={{ textAlign: "center" }}>
        <Odometer
          to={128400}
          prefix="$"
          start={6}
          durationInFrames={48}
          color={brand.green}
          fontSize={180}
          fontWeight={900}
        />
        <div
          style={{
            marginTop: 16,
            fontFamily: brand.font,
            fontWeight: 500,
            fontSize: 34,
            color: brand.mid,
          }}
        >
          attributed this month · and climbing
        </div>
      </div>
    </Center>
  </Panel>
);

export const S6Montage: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      <Series>
        <Series.Sequence durationInFrames={PANEL}><P1Source /></Series.Sequence>
        <Series.Sequence durationInFrames={PANEL}><P2Data /></Series.Sequence>
        <Series.Sequence durationInFrames={PANEL}><P3Strategist /></Series.Sequence>
        <Series.Sequence durationInFrames={PANEL}><P4Creative /></Series.Sequence>
        <Series.Sequence durationInFrames={PANEL}><P5Deploy /></Series.Sequence>
        <Series.Sequence durationInFrames={PANEL}><P6Channels /></Series.Sequence>
        <Series.Sequence durationInFrames={PANEL}><P7Performance /></Series.Sequence>
        <Series.Sequence durationInFrames={510 - PANEL * 7}><P8Revenue /></Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
