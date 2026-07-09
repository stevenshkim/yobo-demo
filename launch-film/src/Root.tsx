// src/Root.tsx — registers the compositions.
//
// Satoshi is requested at module top (before the first frame) so it's warm by
// render time; it degrades to the system stack if the private file is absent.

import React from "react";
import { Composition } from "remotion";
import { Film } from "./Film";
import { Teaser } from "./Teaser";
import { filmSchema, defaultFilmProps } from "./schema";
import { FPS, WIDTH, HEIGHT, DURATION } from "./brand";
import { loadSatoshi } from "./fonts";

loadSatoshi();

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* master 16:9 launch film — "The Third Door" */}
      <Composition
        id="Film"
        component={Film}
        durationInFrames={DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        schema={filmSchema}
        defaultProps={defaultFilmProps}
      />

      {/* 6s teaser — avalanche → logo → url */}
      <Composition
        id="Teaser"
        component={Teaser}
        durationInFrames={180}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
