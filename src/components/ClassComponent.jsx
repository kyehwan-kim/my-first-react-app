import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    // return 요소는 단 한개! 의 태그로만 감싸져야 한다. 부모, 자식요소가 있는 형태가 되면 안됨.
    return <h1>Class Component 입니다!</h1>;
  }
}

export default ClassComponent;
