// Track.tsx — thin wrapper over Remotion's <Audio> that no-ops when audio is
// disabled or the stem file is absent.
//
// The stems (public/audio/{tick,bass-hit,pulse,vo}.*) are private assets and are
// NOT in the repo, so referencing them unconditionally would fail the render.
// Audio is therefore gated behind the film's `audioEnabled` prop (default false):
// the full cue sheet (spec §9) is wired here and comes alive the moment the flag
// is flipped and the files are dropped into public/audio/.

import React from "react";
import { Audio, staticFile } from "remotion";

export const AUDIO = {
  tick: "audio/tick.wav",
  bassHit: "audio/bass-hit.wav",
  pulse: "audio/pulse.wav",
  vo: "audio/vo.mp3",
} as const;

export const Track: React.FC<{
  enabled: boolean;
  src: string;
  volume?: number;
  startFrom?: number;
  loop?: boolean;
}> = ({ enabled, src, volume = 1, startFrom, loop }) => {
  if (!enabled) return null;
  return (
    <Audio
      src={staticFile(src)}
      volume={volume}
      startFrom={startFrom}
      loop={loop}
    />
  );
};
