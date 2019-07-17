import React from "react";
import logo from "./logo.svg";
import "./App.css";
import smallImage from "./small.jpeg";
import bigImage from "./big.jpeg";
import TodoList from "./TodoList";

console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
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
