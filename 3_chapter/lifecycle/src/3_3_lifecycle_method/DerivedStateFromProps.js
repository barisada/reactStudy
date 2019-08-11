import React from "react";

export default function DerivedStateFromProps(props) {
  const [speed, setSpeed] = React.useState(100);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSpeed(speed + 10);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Example speed={speed} />
    </div>
  );
}

class Example extends React.Component {
  state = {
    isMovingFaster: false,
    prevSpeed: 100,
    curSpeed: this.props.speed
  };
  static getDerivedStateFromProps(props, state) {
    if (props.speed !== state.curSpeed) {
      return {
        isMovingFaster: true,
        prevSpeed: state.curSpeed,
        curSpeed: props.speed
      };
    }
    return null;
  }
  render() {
    return (
      <div>
        {`moving faster : ${this.state.isMovingFaster}. cur speed ${
          this.state.curSpeed
        } vs prev speed : ${this.state.prevSpeed}`}
      </div>
    );
  }
}
