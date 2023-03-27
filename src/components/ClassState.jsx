import React, { Component } from "react";

export default class ClassState extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     student: "김계환",
  //   };
  // }

  state = {
    student: "김계환",
  };
  render() {
    const { student } = this.state;
    return (
      <div>
        <h1>{student}</h1>
        <button onClick={() => this.setState({ student: "Hwan" })}>영어로!</button>
      </div>
    );
  }
}
