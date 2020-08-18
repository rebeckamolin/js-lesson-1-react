import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          JS Lesson 1
          <MyButton title="Tryck här" />
          <MyButton title="eller här"/>
          <MyButton title="varför inte här"/>
        </p>

        <h1>Rebecka Molin</h1>
        <p>Nackademin Fend19</p>
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
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
