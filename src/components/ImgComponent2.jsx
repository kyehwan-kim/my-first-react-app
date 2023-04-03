import React from 'react';
import PixarImg from '../img/pixar.jpg';

export default function ImgComponent2() {
  return (
    <>
      <h1>퍼블릭 폴더</h1>
      <img src="/images/pixar.jpg" alt="퍼블릭 이미지" width="500" />
      <h1>SRC 폴더</h1>
      <img src={PixarImg} alt="소스 이미지" width="500" />
    </>
  );
}
