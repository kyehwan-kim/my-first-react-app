import React, { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행 중');
    }, 1000);

    return () => {
      console.log('컴포넌트 언마운트, 타이머가 종료됩니다.');
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1>타이머가 실행 중입니다.</h1>
    </>
  );
}
