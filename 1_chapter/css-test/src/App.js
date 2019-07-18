import React, { Component } from "react";
import Button from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Button4 from "./Button4";
import Box from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import Box5 from "./Box5";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h3>쌩 css - (이름 충돌)</h3>
          <Button size="big" />
          <Button size="small" />
          <Box size="big" />
          <Box size="small" />
        </div>
        <hr />
        <div>
          <h3>css-module</h3>
          <Button2 size="big" />
          <Button2 size="small" />
        </div>
        <hr />
        <div>
          <h3>classnames 모듈(?)</h3>
          <Button3 size="big" />
          <Button3 size="small" />
          <Box2 size="big" />
          <Box2 size="small" />
        </div>
        <hr />
        <div>
          <h3>Sass</h3>
          <Button4 size="big" />
          <Button4 size="small" />
          <Box3 size="big" />
          <Box3 size="small" />
        </div>
        <hr />
        <div>
          <h3>css-in-js (비 동적 박스생성)</h3>
          <Box4 size="big" />
          <Box4 size="small" />
        </div>
        <hr />
        <div>
          <h3>css-in-js (동적 박스생성)</h3>
          <Box5 size="big" />
          <Box5 size="small" />
        </div>
      </>
    );
  }
}
export default App;
