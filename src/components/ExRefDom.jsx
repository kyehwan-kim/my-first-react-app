import React from 'react';
import { useRef } from 'react';

export default function ExRefDom() {
  const divEl = useRef();
  const inputEl = useRef();

  const changeComponentColor = () => {
    divEl.current.style.backgroundColor = inputEl.current.value;
  };

  return (
    <div ref={divEl}>
      <input ref={inputEl} type="text" />
      <button onClick={changeComponentColor}>컴포넌트 색상 적용</button>
    </div>
  );
}
