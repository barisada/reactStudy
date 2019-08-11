import React from "react";
import ReactDOM from "react-dom";

export default function RenderEx(props) {
  return (
    <div>
      <Example title={"my title"} />
      <Example2 title={"creatPortal exmaple :)"} />
    </div>
  );
}

class Example extends React.Component {
  state = {
    title: this.props.title
  };

  render() {
    return (
      this.state.title.length > 0 && (
        <div>
          <p>{this.state.title}</p>
        </div>
      )
    );
  }
}

function Example2({ title }) {
  const domNode = document.getElementById("root");

  return ReactDOM.createPortal(<div>{title}</div>, domNode);
}
