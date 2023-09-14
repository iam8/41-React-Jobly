import React, {useState, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import JoblyApi from './api';
import NavBar from './navbar/NavBar';
import Routes from './routes/Routes';
import UserContext from './auth/UserContext';
import './App.css';



function App() {
    const [isUserLoaded, setIsUserLoaded] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [appliedJobsIds, setAppliedJobsIds] = useState(new Set());
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Get user data from API


        setIsUserLoaded(true);
    }, [token]);


    async function signup(userData) {
        console.log("USER SIGNUP DATA RECEIVED:", userData);
        try {
            const token = await JoblyApi.signup(userData);
            setToken(token);
            return {success: true};
        } catch(err) {
            console.log("ERROR SIGNING IN:", err);
            return {success: false, err};
        }
    }

    async function login(userData) {
        console.log("USER LOGIN DATA RECEIVED:", userData);
        try {
            const token = await JoblyApi.login(userData);
            setToken(token);
            return {success: true};
        } catch(err) {
            console.log("ERROR LOGGING IN:", err);
            return {success: false, err};
        }
    }

    async function logout() {
        console.log("LOGGING OUT");
        setCurrentUser(null);
        setToken(null);
    }

    function hasAppliedToJob(id) {
        return appliedJobsIds.has(id);
    }

    function applyToJob(id) {
        if (hasAppliedToJob(id)) return;

        console.log("APPLYING FOR JOB WITH ID:", id);
        setAppliedJobsIds(new Set([...appliedJobsIds, id]));
    }

    if (!isUserLoaded) return <div>LOADING...</div>

    return (
        <div className="App">
            <BrowserRouter>
                <UserContext.Provider
                    value={{currentUser, setCurrentUser, hasAppliedToJob, applyToJob}}
                >
                    <NavBar logout={logout}/>

                    <Routes
                        login={login}
                        signup={signup}
                    />

                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
