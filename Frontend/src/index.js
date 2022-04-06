
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./index.css";
import Inside from "./Inside";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux"
import App from "./App"
import { createBrowserHistory,createMemoryHistory } from "history";
import  rootReducer  from './store/Reducers/index'
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import {  Router, Route } from "react-router-dom";
import {Dummy} from "./Components/dummy.component"
import Notes from "./Components/Notes/Notes";
import Todo from "./Components/Todo/Todo";
import Profile from "./Components/Profile/Profile";
require('dotenv').config();
const store = createStore(rootReducer, applyMiddleware(thunk))

// let createHistory
// createHistory = createBrowserHistory
 

ReactDOM.render(
    <Provider  store={store}>
    {/* <Router history={createHistory()}> */}
    <Router>
    <Routes>
            <Route exact path='*' element={<App />} />
            <Route path='/Dashboard' element={<Inside />}>
            <Route path="/Dashboard/notes" element={<Notes />} />
          <Route path="/Dashboard/todo" element={<Todo />} />
          <Route path="/Dashboard/profile" element={<Profile />} />
          </Route>
    </Routes>        
    </Router>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();