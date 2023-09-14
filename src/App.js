import React, {useState, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import jwtDecode from 'jwt-decode';

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
        console.log("RUNNING USEEFFECT");
        console.log("CURRENT USER:", currentUser);
        console.log("RECEIVED TOKEN:", token);
        console.log("APPLIED JOB IDS:", appliedJobsIds);

        // Get user data from API
        async function fetchCurrentUser() {
            if (token) {
                try {
                    const {username} = jwtDecode(token);
                    JoblyApi.token = token;
                    const user = await JoblyApi.getCurrentUser(username);
                    setCurrentUser(user);
                    setAppliedJobsIds(new Set(user.applications));
                } catch(err) {
                    console.log("ERROR FETCHING CURRENT USER:", err);
                    setCurrentUser(null);
                }
            }

            setIsUserLoaded(true);
        }

        setIsUserLoaded(false);
        fetchCurrentUser();

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

    async function applyToJob(id) {
        if (hasAppliedToJob(id)) return;

        console.log("APPLYING FOR JOB WITH ID:", id);
        try {
            await JoblyApi.applyToJob(currentUser.username, id);
            setAppliedJobsIds(new Set([...appliedJobsIds, id]));
        } catch(err) {
            console.log("ERROR APPLYING TO JOB:", err);
        }
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
