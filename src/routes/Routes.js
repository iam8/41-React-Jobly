import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../homepage/Home";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import Companies from "../companies/Companies";
import Company from "../companies/Company";
import Jobs from "../jobs/Jobs";
import EditProfileForm from "../profiles/EditProfileForm";


/**
 * All routes for Jobly website.
 *
 * Props:
 *  - login(): log in an existing user
 *  - signup(): register a new user
 **/
function Routes({login, signup}) {

    return (
        <Switch>
            <Route exact path="/companies/:handle">
                <Company />
            </Route>

            <Route exact path="/companies">
                <Companies />
            </Route>

            <Route exact path="/jobs">
                <Jobs />
            </Route>

            <Route exact path="/login">
                <LoginForm />
            </Route>

            <Route exact path="/signup">
                <SignupForm />
            </Route>

            <Route exact path="/profile">
                <EditProfileForm />
            </Route>

            <Route exact path="/">
                <Home />
            </Route>

            <Redirect to="/" />
        </Switch>
    )
}


export default Routes;
