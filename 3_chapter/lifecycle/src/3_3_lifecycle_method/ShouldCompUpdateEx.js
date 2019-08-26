import React from "react";

export default function ShouldCompUpdateEx(props) {
  return (
    <div>
      <Example val={0} />
      <Example val={0} />
      <Example val={1} />
    </div>
  );
}

class Example extends React.Component {
  state = {
    val: this.props.val
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { val } = this.state;
    if (val === nextState.val) {
      console.log(
        `${val} vs ${nextState.val} : 이전 값이랑 똑같아서 랜더안함 ㅋ`
      );
    } else {
      console.log(
        `${val} vs ${nextState.val} : 이전 값이랑 달라서 새로 랜더 함 ㅋ`
      );
    }
    return val !== nextState.val;
  }

  updateVal = () => {
    this.setState({ val: this.state.val + 1 });
  };

  render() {
    return (
      <div>
        {`현재값 : ${this.state.val} (자세한 내용은 console.log 참고요)`}
        <button onClick={this.updateVal}>update! </button>
      </div>
    );
  }
}
