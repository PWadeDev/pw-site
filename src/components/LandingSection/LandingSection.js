import React from "react";
import Particles from "react-particles-js";

import "./LandingSection.scss";
import TypingEffectText from "../TypingEffectText/TypingEffectText";
import particleOptions from "./ParticleOptions";

const LandingSection = () => (
  <div className="landing-section">
    <Particles params={particleOptions}></Particles>
    <TypingEffectText></TypingEffectText>
  </div>
);

export default LandingSection;
