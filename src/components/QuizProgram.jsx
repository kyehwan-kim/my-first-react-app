import React, { useRef, useState } from 'react';

export default function QuizProgram() {
  const [again, setAgain] = useState(true);
  const answerInput = useRef();

  const firstRandomNumber = Math.floor(Math.random() * 10);
  const secondRandomNumber = Math.floor(Math.random() * 10);
  const arithmeticArr = ['+', '-', 'x'];
  const randomArtihMetic = Math.floor(Math.random() * arithmeticArr.length);
  const operator = arithmeticArr[randomArtihMetic];

  const clearInput = () => {
    answerInput.current.value = '';
    answerInput.current.focus();
  };

  const checkAnswer = () => {
    let answer = 0;
    if (randomArtihMetic === 0) {
      answer = firstRandomNumber + secondRandomNumber;
    } else if (randomArtihMetic === 1) {
      answer = firstRandomNumber - secondRandomNumber;
    } else {
      answer = firstRandomNumber * secondRandomNumber;
    }

    if (answer === Number(answerInput.current.value)) {
      alert('정답입니다!');
      setAgain(!again);
      clearInput();
    } else {
      alert('틀렸습니다ㅠㅠ');
      clearInput();
    }
  };

  return (
    <div>
      <h1>
        {firstRandomNumber} {operator} {secondRandomNumber}
      </h1>
      <input type="text" ref={answerInput} />
      <button onClick={checkAnswer}>정답 제출</button>
    </div>
  );
}
