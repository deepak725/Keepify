import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Login from "./Components/login.component";
import {Routes} from "react-router-dom";
//sample
import SignUp from "./Components/signup.component";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Keepify</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/signin"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Routes>
            <Route exact path='/' element={<Login/>} /> 
            <Route path="/signin" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
