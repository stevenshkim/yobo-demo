// Film.tsx — master timeline. A single <Series> of the nine scenes (timings from
// spec §5), a global caption track (spec §8), and the wired-but-optional audio
// layer (spec §9). All per-scene frame numbers are local; the Series owns the
// global offsets.

import React from "react";
import { AbsoluteFill, Sequence, Series } from "remotion";
import { brand } from "./brand";
import { FilmProps } from "./schema";
import { Caption } from "./lib/Caption";
import { Track, AUDIO } from "./lib/Track";

import { S1Poison } from "./scenes/S1Poison";
import { S2Hire } from "./scenes/S2Hire";
import { S3aAvalanche } from "./scenes/S3aAvalanche";
import { S3bSurface } from "./scenes/S3bSurface";
import { S4Turn } from "./scenes/S4Turn";
import { S5Constellation } from "./scenes/S5Constellation";
import { S6Montage } from "./scenes/S6Montage";
import { S7Proof } from "./scenes/S7Proof";
import { S8Vision } from "./scenes/S8Vision";
import { S9CTA } from "./scenes/S9CTA";

// VO caption windows, in global frames (see spec §8). Kept here so the whole
// script reads top-to-bottom in one place.
const CAPTIONS: { text: string; start: number; end: number }[] = [
  { text: "For years, growing a consumer brand meant picking your poison.", start: 12, end: 236 },
  { text: "An agency you can't see into. Or a hire who can only do one thing at a time.", start: 250, end: 446 },
  { text: "This is the actual job now. Connect everything. Execute everywhere. Measure it all. Then do it again — forever.", start: 460, end: 656 },
  { text: "An agency covers a slice. A hire covers less. The rest? It just doesn't get done.", start: 668, end: 830 },
  { text: "There's a third door.", start: 1120, end: 1224 },
  { text: "One command. A full growth team goes to work.", start: 1250, end: 1600 },
  { text: "It plugs into whatever you already run — your store, your POS, your booking system — finds the revenue you're sitting on, writes it, ships it, and watches the numbers. End to end. Every day.", start: 1640, end: 2110 },
  { text: "This isn't a demo. It's already driving revenue for brands right now.", start: 2145, end: 2360 },
  { text: "The growth layer for every consumer brand.", start: 2385, end: 2600 },
];

export const Film: React.FC<FilmProps> = ({ audioEnabled, showCaptions }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.black }}>
      {/* ---- picture ---- */}
      <Series>
        <Series.Sequence durationInFrames={240}><S1Poison /></Series.Sequence>
        <Series.Sequence durationInFrames={210}><S2Hire /></Series.Sequence>
        <Series.Sequence durationInFrames={210}><S3aAvalanche /></Series.Sequence>
        <Series.Sequence durationInFrames={180}><S3bSurface /></Series.Sequence>
        <Series.Sequence durationInFrames={390}><S4Turn /></Series.Sequence>
        <Series.Sequence durationInFrames={390}><S5Constellation /></Series.Sequence>
        <Series.Sequence durationInFrames={510}><S6Montage /></Series.Sequence>
        <Series.Sequence durationInFrames={240}><S7Proof /></Series.Sequence>
        <Series.Sequence durationInFrames={240}><S8Vision /></Series.Sequence>
        <Series.Sequence durationInFrames={270}><S9CTA /></Series.Sequence>
      </Series>

      {/* ---- captions ---- */}
      {showCaptions &&
        CAPTIONS.map((c, i) => (
          <Caption key={i} text={c.text} start={c.start} end={c.end} />
        ))}

      {/* ---- audio (spec §9) — gated behind audioEnabled; stems are private ---- */}
      {audioEnabled && (
        <>
          {/* clock tick: 0:00, accelerates through 3a, near-silent by 0:22 */}
          <Sequence from={0} durationInFrames={660}>
            <Track enabled={audioEnabled} src={AUDIO.tick} volume={0.5} loop />
          </Sequence>
          {/* single bass hit at the cut-to-black (0:22) */}
          <Sequence from={660}>
            <Track enabled={audioEnabled} src={AUDIO.bassHit} volume={0.9} />
          </Sequence>
          {/* rising pulse from 0:31 through to the CTA */}
          <Sequence from={930}>
            <Track enabled={audioEnabled} src={AUDIO.pulse} volume={0.6} loop />
          </Sequence>
          {/* VO bed (ducks music -6dB in the mix) */}
          <Sequence from={0}>
            <Track enabled={audioEnabled} src={AUDIO.vo} volume={1} />
          </Sequence>
        </>
      )}
    </AbsoluteFill>
  );
};
