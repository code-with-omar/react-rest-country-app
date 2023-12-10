import React, { useEffect, useState } from 'react'
const Search = (props) => {

    const [searchCountry, setSearchCountry] = useState("");

    const heandleSearchCountry = (e) => {
        setSearchCountry(e.target.value);
    }


    useEffect(() => {
        props.onSearch(searchCountry)
    }, [searchCountry])


    return (
        <div style={{ textAlign: "center", boxSizing: "border-box" }}>
            <input type="text" placeholder='Search Country' value={searchCountry} onChange={heandleSearchCountry} />
        </div>
    )
}

export default Search
