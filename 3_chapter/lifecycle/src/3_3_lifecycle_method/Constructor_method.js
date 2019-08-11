import React from "react";

//초기 속성값으로부터 상태값을 만드는 코드
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
      current: props.age > 18 ? "adult" : "minor"
    };
  }
  render() {
    return <p>{`you are ${this.state.current}. Age is ${this.state.age}`}</p>;
  }
}

/**
 * constructor 메서드 없이 속성값을 이용하는 코드
 */
class Example2 extends React.Component {
  state = {
    age: this.props.age,
    current: this.props.age > 18 ? "adult" : "minor"
  };
  render() {
    return <p>{`you are ${this.state.current}. Age is ${this.state.age}`}</p>;
  }
  s;
}

/**
 * 속성값에 항상 의존적인 상태값을 함수로 대체한코드
 */
class Example3 extends React.Component {
  getCurrent() {
    const { age } = this.props;
    return age > 18 ? "adult" : "minor";
  }
  getAge() {
    return this.props.age;
  }
  render() {
    return <p>{`you are ${this.getCurrent()}. Age is ${this.getAge()}`}</p>;
  }
}

/**
 * constructor 메서드에서는 setState메서드를 호출하지말자.
 * setState는 컴포넌트가 마운트된 이후에만 유효하다.
 * 따라서 constructor 메서드 내부에서 호출되는 setState는 무시된다.
 */
class Example4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      current: " not born yet"
    };

    //will be ignored
    this.setState({
      age: this.props.age,
      current: this.props.age > 18 ? "adult" : "minor"
    });
  }
  render() {
    return <p>{`you are ${this.state.current}. Age is ${this.state.age}`}</p>;
  }
}

function ConstructorEx() {
  return (
    <div>
      <Example age={18} />
      <Example2 age={19} />
      <Example3 age={20} />
      <Example4 age={21} />
    </div>
  );
}

export default ConstructorEx;
