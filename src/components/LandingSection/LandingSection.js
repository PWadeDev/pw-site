import React from 'react';
import Particles from 'react-particles-js';

import './LandingSection.scss';
import TypingEffectText from '../TypingEffectText/TypingEffectText';
import particleOptions from './ParticleOptions';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';

const typingEffectStartTime = 1500;
const scrollIndicatorStartTime = 3000;

const LandingSection = () => (
  <div className="landing-section">
    <Particles params={particleOptions}></Particles>
    <TypingEffectText startTime={typingEffectStartTime}></TypingEffectText>
    <ScrollIndicator startTime={scrollIndicatorStartTime}></ScrollIndicator>
  </div>
);

export default LandingSection;
