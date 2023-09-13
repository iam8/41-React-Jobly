import React, {useState, useEffect} from "react";
import { useParams, Redirect } from "react-router-dom";

import JoblyApi from "../api";


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
            <p>
                {companyData.description}
            </p>
        </div>
    )
}


export default Company;
