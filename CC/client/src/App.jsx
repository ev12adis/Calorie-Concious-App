import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import logo from './logo.svg';
import "./App.css";
import Home from "./routes/Home";
import Calc from "./routes/Calc";
import Places from "./routes/Places";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import { DataContextProvider } from "./context/DataContext";

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
    <DataContextProvider>
      <div /*className="container"*/>
        <Router>
          <Routes>
            <Route exact path='/'element={<Home />} />
            <Route exact path='/calc' element={<Calc />} />
            <Route exact path='/places' element={<Places />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </Router>
      </div>
    </DataContextProvider>
  );
};

export default App;
