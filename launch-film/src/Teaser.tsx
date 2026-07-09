// Teaser.tsx — the 6s social cut (spec §10): Scene 3a avalanche → hard cut to
// logo + yobolabs.ai. 180 frames at 30fps.

import React from "react";
import { AbsoluteFill, Series, useCurrentFrame } from "remotion";
import { brand } from "./brand";
import { S3aAvalanche } from "./scenes/S3aAvalanche";
import { LogoMark, Wordmark } from "./lib/LogoMark";

const TeaserEnd: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        backgroundColor: brand.black,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 34,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <LogoMark size={140} settled />
        <Wordmark fontSize={72} />
      </div>
      <div
        style={{
          fontFamily: brand.font,
          fontWeight: 500,
          fontSize: 44,
          color: brand.green,
          opacity: frame > 10 ? 1 : 0,
        }}
      >
        yobolabs.ai
      </div>
    </AbsoluteFill>
  );
};

export const Teaser: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: brand.black }}>
    <Series>
      <Series.Sequence durationInFrames={140}>
        <S3aAvalanche />
      </Series.Sequence>
      <Series.Sequence durationInFrames={40}>
        <TeaserEnd />
      </Series.Sequence>
    </Series>
  </AbsoluteFill>
);
