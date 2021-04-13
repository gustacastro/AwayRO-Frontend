/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useRef } from 'react';
import Chevron from './chevron';

import './styles.css';

function Accordion(props) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRorateState] = useState('accordion__icon');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRorateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    );
  }

  return (
    <div className="accordion__section">
      <button
        type="button"
        className={`accordion ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill="#fff" />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
