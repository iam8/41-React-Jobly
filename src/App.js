import React from 'react';
import {BrowserRouter} from "react-router-dom";

import NavBar from './navbar/NavBar';
import Routes from './routes/Routes';
import './App.css';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar logout={() => {console.log("Running the logout function")}}/>

                <main>
                    <Routes
                        login={() => {console.log("Running the login function")}}
                        signup={() => {console.log("Running the signup function")}}
                    />
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
