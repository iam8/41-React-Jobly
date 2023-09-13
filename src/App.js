import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";

import NavBar from './navbar/NavBar';
import Routes from './routes/Routes';
import UserContext from './auth/UserContext';
import './App.css';


function App() {
    const [currentUser, setCurrentUser] = useState(null);

    async function signup(userData) {
        console.log("USER SIGNUP DATA RECEIVED:", userData);
    }

    async function login(userData) {
        console.log("USER LOGIN DATA RECEIVED:", userData);
    }

    async function logout() {
        console.log("LOGGING OUT");
    }

    function hasAppliedToJob(id) {
        return false;
    }

    function applyToJob(id) {
        console.log("APPLYING FOR JOB WITH ID:", id);
    }

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
