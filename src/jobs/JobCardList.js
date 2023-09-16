import React from "react";

import JobCard from "./JobCard";


/** Render a list of JobCard components. Each JobCard displays basic info about a job. */
function JobCardList({jobList}) {

    return (
        <div>
            {jobList.map((job) => {
                return <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyName={job.companyName}
                />
            })}
        </div>
    )
}


export default JobCardList;
