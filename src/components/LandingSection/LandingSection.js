import React from "react";
import Particles from "react-particles-js";

import "./LandingSection.scss";
import TypingEffectText from "../TypingEffectText/TypingEffectText";
import particleOptions from "./ParticleOptions";

const LandingSection = () => (
  <div className="landing-section">
    <Particles params={particleOptions}>
      <TypingEffectText></TypingEffectText>
    </Particles>
  </div>
);

export default LandingSection;
