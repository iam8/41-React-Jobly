import React, {useState, useEffect} from "react";

import JoblyApi from "../api";
import SearchBar from "../shared/SearchBar";
import JobCard from "./JobCard";


function Jobs() {
    const [jobList, setJobList] = useState(null);

    useEffect(() => {
        const fetchJobsOnMount = async () => {
            await searchFor();
        }

        fetchJobsOnMount();
    }, []);

    const searchFor = async (title) => {
        try {
            const results = await JoblyApi.getJobs(title);
            setJobList(results);
        } catch(err) {
            console.log(err);
        }
    }

    if (!jobList) return <div>LOADING...</div>

    // TODO: replace map code below with JobCardList render

    return (
        <div>
            <SearchBar searchFor={searchFor}/>

            {jobList.length ? (
                <div>
                    {jobList.map((job) => {
                        return <JobCard
                            key={job.id}
                            title={job.title}
                            salary={job.salary}
                            equity={job.equity}
                            companyName={job.companyName}
                        />
                    })}
                </div>
            ) : (
                <p>No results found!</p>
            )}
        </div>
    )
}


export default Jobs;
