import React, {useState} from "react";


/**
 * Search bar. Used on /companies and /jobs pages to allow filtering.
 *
 * Calls the searchFor method (passed by parent), which performs the actual filtering.
 */
function SearchBar({searchFor}) {
    const [searchTerm, setSearchTerm] = useState("");

    /** Call searchFor() to perform the filtering. */
    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchFor(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

    /** Update search bar field. */
    const handleChange = (evt) => {
        setSearchTerm(evt.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="searchTerm"
                    placeholder="Enter a search term"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}


export default SearchBar;
