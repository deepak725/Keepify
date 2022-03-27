
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux"
import {Dummy} from "./components/dummy.component"
import { createBrowserHistory,createMemoryHistory } from "history";
import  rootReducer  from './store/Reducers/index'
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import {  Router, Route } from "react-router-dom";
 
require('dotenv').config();
const store = createStore(rootReducer, applyMiddleware(thunk))

let createHistory
createHistory = createBrowserHistory
 

ReactDOM.render(
    <Provider  store={store}>
    {/* <Router history={createHistory()}> */}
    <Router>
    <Routes>
            <Route exact path='*' element={<App />} />
            <Route  path='/Dashboard' element={<Dummy />} />
    </Routes>        
    </Router>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();