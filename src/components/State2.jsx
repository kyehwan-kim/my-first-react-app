import React from "react";
import { useState } from "react";

export default function State2() {
  // reacr가 알아차려아 리랜더링이 되므로 let 보다는 const로 선언해야한다.
  let [strState, setStrState] = useState("init");

  // function changeState() {
  //   strState += "-";
  //   console.log(strState);
  // }

  function customSetStrState() {
    setStrState("+");
  }
  return (
    <div>
      <button onClick={customSetStrState}>리랜더링 반복!</button>
      {/* <button onClick={() => setStrState(strState + "+")}>리랜더링 반복!</button> */}
      {/* <button onClick={() => changeState()}>스테이트 강제 변경!</button> */}
      <br />
      <span>{strState}</span>
    </div>
  );
}
