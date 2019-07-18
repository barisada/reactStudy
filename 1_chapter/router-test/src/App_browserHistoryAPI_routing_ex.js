import React, { Component } from "react";

class App extends Component {
  state = {
    pageName: ""
  };

  componentDidMount() {
    window.onpopstate = event => this.onChangePage(event.state);
  }

  onChangePage = pageName => this.setState({ pageName });

  onClick1 = () => {
    const pageName = "page1";
    window.history.pushState(pageName, "", "/page1");
    this.onChangePage(pageName);
  };

  onClick2 = () => {
    const pageName = "page2";
    window.history.pushState(pageName, "", "/page2");
    this.onChangePage(pageName);
  };

  render() {
    const { pageName } = this.state;
    return (
      <div>
        <button onClick={this.onClick1}>page 1</button>
        <button onClick={this.onClick2}>page 2</button>
        {!pageName && <Home />}
        {pageName === "page1" && <Page1 />}
        {pageName === "page2" && <Page2 />}
      </div>
    );
  }
}

function Home() {
  return <h2>여기는 Homepage 입니다. 원하는 페이지 버튼을 누루시오.</h2>;
}

function Page1() {
  return <h3>여기는 Page 1 입니다.</h3>;
}

function Page2() {
  return <h3>여기는 Page 2 입니다.</h3>;
}

export default App;
