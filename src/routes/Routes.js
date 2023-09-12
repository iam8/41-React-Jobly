import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


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

            </Route>

            <Route exact path="/companies">

            </Route>

            <Route exact path="/jobs">

            </Route>

            <Route exact path="/login">

            </Route>

            <Route exact path="/signup">

            </Route>

            <Route exact path="/profile">

            </Route>

            <Redirect to="/" />
        </Switch>
    )
}


export default Routes;
