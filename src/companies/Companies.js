import React, {useState, useEffect} from "react";

import JoblyApi from "../api";
import SearchBar from "../shared/SearchBar";
import CompanyCard from "./CompanyCard";


function Companies() {
    const [companyList, setCompanyList] = useState(null);

    useEffect(() => {
        const fetchCompaniesOnMount = async () => {
            await searchFor();
        };

        fetchCompaniesOnMount();
    }, []);

    const searchFor = async (name) => {
        try {
            const results = await JoblyApi.getCompanies(name);
            setCompanyList(results);
        } catch(err) {
            console.log(err);
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
