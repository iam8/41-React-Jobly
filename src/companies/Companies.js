import React, {useState, useEffect} from "react";

import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";


function Companies() {
    const [companyList, setCompanyList] = useState(null);

    useEffect(() => {
        const fetchCompaniesOnMount = async () => {
            try {
                setCompanyList(await JoblyApi.getAllCompanies());
            } catch(err) {
                console.log(err);
            }
        };

        fetchCompaniesOnMount();
    }, []);

    if (!companyList) return <div>LOADING...</div>

    return (
        <div>
            {companyList.map((company) => {
                return <CompanyCard
                    key={company.handle}
                    name={company.name}
                    desc={company.description}
                    logoUrl={company.logo_url}
                    handle={company.handle}
                />
            })}
        </div>
    )
}


export default Companies;
