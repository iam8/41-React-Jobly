import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";

import NavBar from './navbar/NavBar';
import Routes from './routes/Routes';
import UserContext from './auth/UserContext';
import './App.css';


function App() {
    const [currentUser, setCurrentUser] = useState(null);

    function hasAppliedToJob(id) {

    }

    function applyToJob(id) {

    }

    return (
        <div className="App">
            <BrowserRouter>
                <UserContext.Provider
                    value={{currentUser, setCurrentUser, hasAppliedToJob, applyToJob}}
                >
                    <NavBar logout={() => {console.log("Running the logout function")}}/>

                    <Routes
                        login={() => {console.log("Running the login function")}}
                        signup={() => {console.log("Running the signup function")}}
                    />

                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
