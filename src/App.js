import React from 'react';
import {BrowserRouter} from "react-router-dom";

import Routes from './routes/Routes';
import './App.css';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes
                    login={() => {console.log("Running the login function")}}
                    signup={() => {console.log("Running the signup function")}}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
