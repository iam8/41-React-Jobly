import React, {useState} from "react";


function SearchBar({searchFor}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchFor(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

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
