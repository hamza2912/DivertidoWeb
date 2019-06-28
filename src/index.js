import React from "react";

import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import promise from "redux-promise";

import reducers from "./reducers";

//Import Pages

import HomePage from "./components/HomePage";
import About from "./components/About";
import Games from "./components/Games";
import Blog from "./components/Blog";
import Contact_us from "./components/Contact_us";


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(

<Provider store={createStoreWithMiddleware(reducers)}>

<BrowserRouter>

<Switch>

    <Route path="/games" component={Games} />
    <Route path="/blog" component={Blog} />
    <Route path="/contact_us" component={Contact_us} />
    <Route path="/about" component={About} />
    <Route path="/" component={HomePage} />

</Switch>

 </BrowserRouter>

 </Provider>,

document.querySelector(".myapp-container")
);
