import React from "react";

class MountExample extends React.Component {
  state = {
    width: 0,
    apiResult: undefined
  };

  constructor(props) {
    super(props);
    this.apiPromise = this.apiCall(); //get promise object from constructor
  }
  divRef = React.createRef();

  apiCall = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then(resp => {
      return resp.json();
    });
  };
  componentDidMount() {
    const rect = this.divRef.current.getBoundingClientRect();
    this.setState({ width: rect.width });
    //update api result
    this.apiPromise.then(data => {
      this.setState({ apiResult: JSON.stringify(data) });
    });
  }

  render() {
    const { width } = this.state;
    const backgroundColor = width < 800 ? "red" : "blue";
    return (
      <div
        ref={this.divRef}
        style={{ width: "100%", height: "100px", backgroundColor }}
      >
        <p>
          bakcgorund color is red if width is greater than 800 when it render.
          otherwise it is blue.
        </p>
        <p>{`api result : ${this.state.apiResult}`}</p>
      </div>
    );
  }
}

export default MountExample;
