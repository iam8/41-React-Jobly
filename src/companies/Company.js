import React, {useState, useEffect} from "react";
import { useParams, Redirect } from "react-router-dom";

import JoblyApi from "../api";
import JobCard from "../jobs/JobCard";


function Company() {
    const { handle } = useParams();
    const [companyData, setCompanyData] = useState(null);

    // Fetch company data from API
    useEffect(() => {

        const getCompanyData = async () => {
            try {
                setCompanyData(await JoblyApi.getCompany(handle));
            } catch(err) {
                console.log("API ERROR:", err);
                setCompanyData({});
            }
        }

        getCompanyData();

    }, [handle]);

    if (!companyData) return <div>LOADING...</div>
    if (!Object.keys(companyData).length) return <Redirect to="/" />

    return (
        <div>
            <h2>{companyData.name}</h2>
            <div>
                {companyData.description}
            </div>
            <div>
                {companyData.jobs.map((job) => {
                    return <JobCard
                        key={job.id}
                        title={job.title}
                        salary={job.salary}
                        equity={job.equity}
                    />
                })}
            </div>
        </div>
    )
}


export default Company;
