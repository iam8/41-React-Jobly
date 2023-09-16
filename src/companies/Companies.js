import React, {useState, useEffect} from "react";

import JoblyApi from "../api";
import SearchBar from "../shared/SearchBar";
import CompanyCard from "./CompanyCard";


/**
 * Route: /companies
 *
 * Display page with list of companies, filtered by company name entered in search bar.
 *
 * Displays all companies if nothing is entered in search bar.
 */
function Companies() {
    const [companyList, setCompanyList] = useState(null);

    useEffect(() => {

        /** Fetch companies, filtered by company name entered in search bar. */
        const fetchCompaniesOnMount = async () => {
            await searchFor();
        };

        fetchCompaniesOnMount();
    }, []);

    /** Filter companies by name entered in search bar and reload page. */
    const searchFor = async (name) => {
        try {
            const results = await JoblyApi.getCompanies(name);
            setCompanyList(results);
        } catch(err) {
            console.log("ERROR RETRIEVING COMPANY/IES:", err);
        }
    }

    if (!companyList) return <div>LOADING...</div>

    return (
        <div>
            <SearchBar searchFor={searchFor} />

            {companyList.length ? (
                <div>
                    {companyList.map((company) => {
                        return <CompanyCard
                            key={company.handle}
                            name={company.name}
                            desc={company.description}
                            logoUrl={company.logoUrl}
                            handle={company.handle}
                        />
                    })}
                </div>
            ) : (
                <p>No results found!</p>
            )}

        </div>
    )
}


export default Companies;
