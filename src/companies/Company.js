import React from "react";
import { useParams } from "react-router-dom";


function Company() {
    const { handle } = useParams();

    return (
        <div>
            COMPANY DETAILS
            Company name received: {handle}
        </div>
    )
}


export default Company;
