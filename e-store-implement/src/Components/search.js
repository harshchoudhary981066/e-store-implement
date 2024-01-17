import React from "react";

import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = React.useState("");

    //Debouncing timer to avoid multiple search requests
    React.useEffect(() => {
        const delay = setTimeout(() => { //Delay is the name for the timer here
            if (searchTerm) {
                navigate("/search?s=" + searchTerm); //The line navigates from here for whatever is searched
            }
        }, 500);

        return () => clearTimeout(delay); //Once the browser closes, it clears the timeot so it does not fire again
    }, [searchTerm, navigate]);

    const handleChange = (ev) => {
        setSearchTerm(ev.target.value);
    };

    return (
        <div id="search">
            <label>Search</label>
            <input type="text" name="search" onChange={handleChange} />
        </div>
    );
};

export default Search;