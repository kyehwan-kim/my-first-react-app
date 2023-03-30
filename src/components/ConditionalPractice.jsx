import React from 'react';
import { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function ConditionalPractice() {
  const [condition, setCondition] = useState('1번');

  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번');
  };

  const component = condition === '1번' ? <PracticeOne /> : <PracticeTwo />;
  return (
    <>
      {component}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
