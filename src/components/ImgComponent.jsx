import { Component } from "react";
import logo from "../img/Naver_logo.svg";

class ImgComponent extends Component {
  render() {
    return <img src={logo} alt="naver-logo" />;
  }
}

// 함수형 component
// import logo from "../img/Naver_logo.svg";

// function ImgComponent() {
//   return <img src={logo} alt="naver-logo" />;
// }

export default ImgComponent;
