import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import HomePage from "./Home/Home";
import PhotoList from "./PhotoList/PhotoList";
import OneImage from "./OneImage/OneImage";

const Root = () => (
    <Router >
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact  path="/photos/:id" component={OneImage}/>
            <Route  path="/photos" component={PhotoList} />
        </Switch>
    </Router>
);

export default Root