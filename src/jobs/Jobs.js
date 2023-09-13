import React, {useState, useEffect} from "react";

import JoblyApi from "../api";
import SearchBar from "../shared/SearchBar";
import JobCardList from "./JobCardList";
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

    return (
        <div>
            <SearchBar searchFor={searchFor}/>

            {jobList.length ? (
                <JobCardList jobList={jobList}/>
            ) : (
                <p>No results found!</p>
            )}

        </div>
    )
}


export default Jobs;
