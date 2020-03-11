import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './TypingEffectText.scss';

const textArray = [' a', ' Patrick Wade', ' a developer'];
const typingDelay = 200;
const erasingDelay = 100;

function type(charIndex, arrayIndex, textSpan, cursorSpan) {
  console.log('type executed');
  if (charIndex < textArray[arrayIndex].length) {
    if (!cursorSpan.current.classList.contains('typing'))
      cursorSpan.current.classList.add('typing');
    textSpan.current.textContent += textArray[arrayIndex].charAt(charIndex);
  } else {
    /*cursorSpan.current.classList.remove('typing');
    setTimeout(
      erase(charIndex, arrayIndex, textSpan, cursorSpan),
      newTextDelay
    );*/
  }
}

function erase(charIndex, arrayIndex, textSpan, cursorSpan, setCharIndex) {
  if (charIndex > 0) {
    if (!cursorSpan.current.classList.contains('typing'))
      cursorSpan.current.classList.add('typing');
    textSpan.current.textContent = textArray[arrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(
      erase(charIndex, arrayIndex, textSpan, cursorSpan, setCharIndex),
      erasingDelay
    );
  } else {
    cursorSpan.current.classList.remove('typing');
    arrayIndex++;
    if (arrayIndex >= textArray.length) arrayIndex = 0;
    setTimeout(
      type(charIndex, arrayIndex, textSpan, cursorSpan, setCharIndex),
      typingDelay + 1100
    );
  }
}

const TypingEffectText = startTime => {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [firstStart, setFirstStart] = useState(true);

  const textSpan = useRef(null);
  const cursorSpan = useRef(null);

  React.useEffect(() => {
    let timer;
    if (firstStart) {
      console.log('if');
      console.log(typingDelay);
      timer = setTimeout(() => {
        type(charIndex, arrayIndex, textSpan, cursorSpan);
        setCharIndex(charIndex + 1);
        setFirstStart(false);
      }, startTime);
    } else {
      console.log('else');
      timer = setTimeout(() => {
        type(charIndex, arrayIndex, textSpan, cursorSpan);
        setCharIndex(charIndex + 1);
      }, typingDelay);
    }

    return () => clearTimeout(timer);
  }, [textSpan.current.textContent]);

  return (
    <div>
      <p className="typing-effect">
        Hello, I am
        <span className="typing-effect--typed-text" ref={textSpan}></span>
        <span className="typing-effect--cursor" ref={cursorSpan}>
          &nbsp;
        </span>
      </p>
    </div>
  );
};

TypingEffectText.propTypes = {
  startTime: PropTypes.node.isRequired,
};

export default TypingEffectText;
