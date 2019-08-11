import React from "react";

export default function DerivedStateFromProps(props) {
  return (
    <div>
      <Example speed={100} />
    </div>
  );
}

class Example extends React.Component {
  state = {
    prevSpeed: this.props.speed
  };
  static getDerivedStateFromProps(props, state) {
    if (props.speed !== state.prevSpeed) {
      return {
        prevSpeed: props.speed
      };
    }
    return null;
  }
  render() {
    return <div>{`current speed : ${this.state.prevSpeed}`}</div>;
  }
}
