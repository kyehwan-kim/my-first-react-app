import React from 'react';
import { useState } from 'react';
import PracticeOneProps from './PracticeOneProps';
import PracticeTwoProps from './PracticeTwoProps';

export default function PracticeConditionalProps() {
  const [condition, setCondition] = useState('1번');

  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번');
  };

  return (
    <>
      {condition === '1번' ? (
        <PracticeOneProps text={condition} />
      ) : (
        <PracticeTwoProps text={condition} />
      )}
      <button onClick={onChange}>컴포넌트 변경</button>
    </>
  );
}
