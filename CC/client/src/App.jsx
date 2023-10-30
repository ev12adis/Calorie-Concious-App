import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import logo from './logo.svg';
import "./App.css";
import Home from "./routes/Home";
import Calc from "./routes/Calc";

/*function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}*/

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/calc"  element={<Calc/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
