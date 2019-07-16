import React from "react";
import logo from "./logo.svg";
import "./App.css";
import smallImage from "./small.jpeg";
import bigImage from "./big.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={smallImage} alt="small" />
        <img src={bigImage} alt="big" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to react. Time to Study!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
