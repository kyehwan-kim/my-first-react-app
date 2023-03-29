import { useRef } from 'react';
import { useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');

  const inputValue = useRef();

  const onChangeText = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  const onChangeRef = () => {
    setText(inputValue.current.value);
    console.log(inputValue);
  };

  return (
    <div>
      <h1>{text}</h1>
      {/* <input
        onChange={(e) => {
          onChangeText(e);
        }}
      /> */}
      <br />
      {/* useRef 를 사용하여 input 표현 */}
      <input ref={inputValue} onChange={onChangeRef} />
    </div>
  );
}
