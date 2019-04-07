import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import HomePage from "./Home/Home";
import PhotoList from "./PhotoList/PhotoList";
import { Provider }from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'


import thunk from 'redux-thunk'
import OneImage from "./OneImage/OneImage";

const store = createStore(
    reducers,
    applyMiddleware(thunk));

const Root = () => (
    <Provider store={store}>
        <Router >
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact  path="/photos/:id" component={OneImage}/>
            <Route  path="/photos" component={PhotoList} />
        </Switch>
    </Router>
    </Provider>
);

export default Root