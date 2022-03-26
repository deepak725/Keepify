
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux"
// import store from "./store"
import { createBrowserHistory,createMemoryHistory } from "history";
import  rootReducer  from './store/Reducers/index'
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
require('dotenv').config();
const store = createStore(rootReducer, applyMiddleware(thunk))

let createHistory

if (process.env.BROWSER) {
  
    createHistory = createBrowserHistory
} else {
  
    createHistory = createMemoryHistory
}

ReactDOM.render(
    <Provider  store={store}>
    <BrowserRouter history={createHistory()}>
        <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();