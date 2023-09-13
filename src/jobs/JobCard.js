import React, {useContext, useState} from "react";
import UserContext from "../auth/UserContext";


function JobCard({id, title, salary, equity, companyName}) {
    const {hasAppliedToJob, applyToJob} = useContext(UserContext);
    const [hasApplied, setHasApplied] = useState(false);

    const handleApply = () => {
        if (hasAppliedToJob(id)) return;

        applyToJob(id);
        setHasApplied(true);
    }

    return (
        <div>
            <h5>{title}</h5>

            {companyName !== undefined &&
                <div>Company: {companyName}</div>
            }

            {salary &&
                <div>Salary: {salary}</div>
            }

            {equity !== null &&
                <div>
                    Equity: {equity}
                </div>
            }

            <button onClick={handleApply}>Apply</button>
        </div>
    )
}


export default JobCard;
