import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Movie from "../Components/Movie";
import Login from "../Components/Login";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/movie">
                <Movie />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Switch>
    );
};

export default Routes;
