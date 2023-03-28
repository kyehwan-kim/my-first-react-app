import React from "react";

// 인자에서 받을 때 구조분해 할당으로 하는 것을 추천(메모리 절약)
export default function MultiProps({ text, href, userID }) {
  return (
    <div>
      <h1>{userID}님, 반갑습니다! </h1>
      <a href={href}>{text}</a>
    </div>
  );
}
