import React, { Component } from "react";

class AppTest extends Component {
  componentDidMount() {
    window.onpopstate = event => {
      console.log(`location ${document.location}, state : ${event.state}`);
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => window.history.pushState("v1", "", "/page1")}>
          page 1
        </button>
        <button onClick={() => window.history.pushState("v2", "", "/page2")}>
          page 2
        </button>
      </div>
    );
  }
}
export default AppTest;
