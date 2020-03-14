import React, { useRef } from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';
import ArrowIcon from '../../images/svg/arrow-down.svg';
import './ScrollIndicator.scss';

const ScrollIndicator = props => {
  const scrollIndicator = useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      scrollIndicator.current.classList.add('visible');
    }, props.startTime);
    return () => clearTimeout(timer);
  }, [props.startTime]);

  return (
    <>
      <div ref={scrollIndicator} className="scroll-indicator">
        <ArrowIcon
          onClick={() => scrollTo('#secondSection')}
          className="scroll-indicator--arrow-icon"
        ></ArrowIcon>
      </div>
      <div id="secondSection" className="second-section"></div>
    </>
  );
};

export default ScrollIndicator;
