import React, { Component } from "react";
import Title from "./Title";
class StateDoubleCounter extends Component {
  state = { count: 0, count2: 0 };

  onClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
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

export default StateDoubleCounter;
