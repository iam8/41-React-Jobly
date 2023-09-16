import React from "react";
import { Link } from "react-router-dom";


/** Display basic information about a company. */
function CompanyCard({name, desc, logoUrl, handle}) {

    return (
        <Link to={`/companies/${handle}`}>
            <h3>{name}</h3>
            {logoUrl &&
                <img
                    src={logoUrl}
                    alt={name}
                />
            }

            <div>{desc}</div>
        </Link>
    )
}


export default CompanyCard;
