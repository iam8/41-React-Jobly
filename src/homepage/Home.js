import React, {useContext} from "react";
import { Link } from "react-router-dom";

import UserContext from "../auth/UserContext";


/**
 * Route: /
 *
 * Homepage of Jobly site.
 *  - When user is logged in: displays a welcome message.
 *  - When user is logged out: displays links to login and signup forms.
 */
function Home() {
    const {currentUser} = useContext(UserContext);

    /** Logged-out appearance for homepage. */
    function loggedOutHome() {
        return (
            <>
                <div>
                    <Link to="/signup">Sign up</Link>
                </div>
                <div>
                    <Link to="/login">Log in</Link>
                </div>
            </>
        )
    }

    /** Logged-in appearance for homepage. */
    function loggedInHome() {
        return (
            <>
                <h2>Welcome, {currentUser.firstName}</h2>
            </>
        )
    }

    return (
        <div className="Home">
            <h1>Jobly</h1>
            <h3>Apply for jobs from one spot, for free</h3>

            {currentUser ? loggedInHome() : loggedOutHome()}

        </div>
    )
}


export default Home;
