// useState 를 사용한 코드
import React from "react";
import { useState } from "react";

export default function State() {
  // setStudent 요소만 앞의 student 요소를 변경할 수 있다.
  const [student, setStudent] = useState("김계환");

  return (
    <div>
      <button onClick={() => setStudent("HWAN")}>영어로</button>
      <br />
      <span id="text">{student}</span>
    </div>
  );
}

// import React from "react";

// export default function State() {
//   let student = "김계환";

//   // HTML 적으로 만들 경우의 코드
//   function inEnglish() {
//     const spanEl = document.querySelector("#text");
//     spanEl.innerHTML = "HWAN";
//   }

//   return (
//     <div>
//       <button onClick={() => inEnglish()}>영어로</button>
//       <br />
//       <span id="text">{student}</span>
//     </div>
//   );
// }
