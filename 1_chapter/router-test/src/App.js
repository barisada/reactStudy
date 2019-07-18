import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Rooms from "./Rooms";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: 20, border: "5px solid gray" }}>
          <Link to="/">홈</Link>
          <br />
          <Link to="/photo">사진 </Link>
          <br />
          <Link to="/rooms">방 소개</Link>
          <br />
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/photo" component={Photo} />
        <Route path="/rooms" component={Rooms} />
      </BrowserRouter>
    );
  }
}

function Home() {
  return <h2>이곳은 홈페이지 입니다.</h2>;
}
function Photo() {
  return <h2>이곳에서 사진을 감상하시오.</h2>;
}

export default App;
