import React, {useContext, useState, useEffect} from "react";
import UserContext from "../auth/UserContext";


function JobCard({id, title, salary, equity, companyName}) {
    const {hasAppliedToJob, applyToJob} = useContext(UserContext);
    const [hasApplied, setHasApplied] = useState();

    useEffect(() => {
        setHasApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);

    const handleApply = async () => {
        if (hasAppliedToJob(id)) return;

        await applyToJob(id);
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

            <button
                onClick={handleApply}
                disabled={hasApplied}
            >
                    {hasApplied ? <span>Applied</span> : <span>Apply</span>}
            </button>
        </div>
    )
}


export default JobCard;
