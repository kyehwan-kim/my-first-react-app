import React, { useState } from "react";

export default function StateProblem() {
  const [state, setState] = useState({ student: "김계환" });
  console.log(state);
  return (
    // 원시타입은 값을 비교, 객체타입은 주소값을 비교
    <div>
      {state.student}
      <br />
      <button
        onClick={() => {
          state.student = "Hwan";
          const copyObj = { ...state };
          setState(copyObj);
          console.log(copyObj);
        }}
      >
        영어로!
      </button>
    </div>
  );
}
