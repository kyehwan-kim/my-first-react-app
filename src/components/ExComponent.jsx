// function ExComponent() {
//   const helloStr = "Hello, First Exercise";
//   const styleObj = { marginTop: "32px", backgroundColor: "skyblue" };
//   return (
//     <div className="App" style={styleObj}>
//       <span
//         onClick={() => {
//           alert("클릭됨!");
//         }}
//       >
//         {helloStr};
//       </span>
//     </div>
//   );
// }

// export default ExComponent;

// snapchat rfc / rcc 등 활용한 코드
import React from "react";

export default function ExComponent() {
  const str = "Hello, first exercise";
  return (
    <div
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
      onClick={() => {
        alert("클릭됨!!");
      }}
    >
      {str}
    </div>
  );
}
