import { Component } from "react";

class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }

  render() {
    return <h1>Hello, {this.cas ? "캬하" : "우엑"}</h1>;
  }
}

export default MainHeader;

// function MainHeader() {
//   // 기능을 구현하는 구간(function 과 return 사이)
//   const cass = true;

//   return <h1>Hello,{cass ? "캬하" : "윽"} world!</h1>;
// }

// export default MainHeader;
