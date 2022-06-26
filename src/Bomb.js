import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }
  goBoom = () => {
    if (this.state.secondsLeft > 0)
      return `${this.state.secondsLeft} seconds left before I go boom!`;
    else this.state.secondsLeft < 1;
    return `Boom!`;
  };
  render() {
    return <div>{this.goBoom()}</div>;
  }
}
