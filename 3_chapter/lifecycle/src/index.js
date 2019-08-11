import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import StateCounter from "./3_1_state_ex/StateCounter";
import StateDoubleCounter from "./3_1_state_ex/StateDoubleCounter";
import ConstructorEx from "./3_3_lifecycle_method/Constructor_method";
import DerivedStateFromProps from "./3_3_lifecycle_method/DerivedStateFromProps";
import RenderEx from "./3_3_lifecycle_method/RenderEx";

const routing = (
  <Router>
    <div>
      <div style={{ border: "3px solid" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stateEx1">State Counter</Link>
          </li>
          <li>
            <Link to="/StateEx2">State Double Counter</Link>
          </li>
          <li>
            <Link to="/ConstructorEx1">3.3.1 Constructor example</Link>
          </li>
          <li>
            <Link to="/getDerivedStateFromProps">
              3.3.2 getDerivedStateFromProps example
            </Link>
          </li>
          <li>
            <Link to="/renderEx">3.3.3 Render Example </Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/stateEx1" component={StateCounter} />
        <Route path="/StateEx2" component={StateDoubleCounter} />
        <Route path="/ConstructorEx1" component={ConstructorEx} />
        <Route
          path="/getDerivedStateFromProps"
          component={DerivedStateFromProps}
        />
        <Route path="/renderEx" component={RenderEx} />
      </div>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
