import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

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
                console.log(err);
            }
        }

        getCompanyData();

    }, [handle]);

    if (!companyData) {
        return (
            <div>
                LOADING...
            </div>
        )
    }

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
