import React, {useContext} from "react";
import { Redirect } from "react-router-dom";

import UserContext from "../auth/UserContext";


function ProtectedRoute({children}) {
    const {currentUser} = useContext(UserContext);

    if (!currentUser) return <Redirect to="/" />

    return children;
}


export default ProtectedRoute;
