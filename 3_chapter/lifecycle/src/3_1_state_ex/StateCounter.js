import React, { Component } from "react";
import Title from "./Title";
class StateCounter extends Component {
  state = { count: 0 };

  onClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <Title title={`Current Count : ${count}`} />
        <button onClick={this.onClick}>Add</button>
      </div>
    );
  }
}

export default StateCounter;
