//inspired by https://codepen.io/Coding_Journey/pen/BEMgbX
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './TypingEffectText.scss';

const textArray = ['Patrick Wade', 'a developer'];
const typingDelay = 100;
const erasingDelay = 80;
const newTextDelay = 2000;

function type(charIndex, arrayIndex, textSpan, cursorSpan) {
  if (!cursorSpan.current.classList.contains('typing'))
    cursorSpan.current.classList.add('typing');
  textSpan.current.textContent += textArray[arrayIndex].charAt(charIndex);
}

function erase(charIndex, arrayIndex, textSpan, cursorSpan) {
  if (!cursorSpan.current.classList.contains('typing'))
    cursorSpan.current.classList.add('typing');
  textSpan.current.textContent = textArray[arrayIndex].substring(
    0,
    charIndex - 1
  );
}

const TypingEffectText = props => {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isFirstStart, setIsFirstStart] = useState(true);
  const [isErasing, setIsErasing] = useState(false);

  const textSpan = useRef(null);
  const cursorSpan = useRef(null);

  React.useEffect(() => {
    let timer;

    if (isFirstStart) {
      if (cursorSpan.current.classList.contains('typing'))
        cursorSpan.current.classList.remove('typing');
      timer = setTimeout(() => {
        type(charIndex, arrayIndex, textSpan, cursorSpan);
        setIsFirstStart(false);
        setCharIndex(charIndex + 1);
      }, props.startTime);
    } else if (!isErasing && charIndex < textArray[arrayIndex].length) {
      timer = setTimeout(() => {
        type(charIndex, arrayIndex, textSpan, cursorSpan);
        setCharIndex(charIndex + 1);
      }, typingDelay);
    } else {
      if (!isErasing && cursorSpan.current.classList.contains('typing'))
        cursorSpan.current.classList.remove('typing');
      timer = setTimeout(
        () => {
          erase(charIndex, arrayIndex, textSpan, cursorSpan);
          setCharIndex(charIndex - 1);
        },
        isErasing ? erasingDelay : newTextDelay
      );
      setIsErasing(true);
    }

    if (isErasing && charIndex === 0) {
      setIsErasing(false);
      setIsFirstStart(true);
      setArrayIndex(arrayIndex + 1);

      if (arrayIndex === textArray.length - 1) {
        setArrayIndex(0);
      }
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex]);

  return (
    <div>
      <div className="typing-effect">
        <span>Hello, I am</span>
        <div className="typing-effect--container">
          <span className="typing-effect--typed-text" ref={textSpan}></span>
          <span className="typing-effect--cursor" ref={cursorSpan}>
            &nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};

TypingEffectText.propTypes = {
  startTime: PropTypes.node.isRequired,
};

export default TypingEffectText;
