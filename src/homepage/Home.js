import React, {useContext} from "react";
import { Link } from "react-router-dom";

import UserContext from "../auth/UserContext";


function Home() {
    const {currentUser} = useContext(UserContext);

    function loggedOutHome() {
        return (
            <>
                <div>
                    Sign in or log in
                </div>
            </>
        )
    }

    function loggedInHome() {
        return (
            <>
                <h2>Welcome, {currentUser.username}</h2>
            </>
        )
    }

    return (
        <div className="Home">
            <h1>Jobly</h1>
            <h3>Apply for jobs from one spot, for free</h3>

            {
                currentUser ?
                    loggedInHome()
                :
                    loggedOutHome()
            }

        </div>
    )
}


export default Home;
