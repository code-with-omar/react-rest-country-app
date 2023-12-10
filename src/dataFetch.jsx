import React, { useEffect, useState } from 'react';
import Countries from './countries.jsx';
import Search from './search.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cssFile/dataFetch.css'
const DataFetch = () => {
    const url = "https://restcountries.com/v3.1/all";
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filteringCountires, setFilteringCountry] = useState([]);

    const fetchData = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const responseData = await response.json();
            setCountries(responseData);
            setFilteringCountry(responseData);
            setLoading(false);
            setError(null);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };
    // Data fetch function genaration 
    useEffect(() => {
        fetchData(url);
    }, []);

    // useEffect(() => {
    //     console.log(countries);
    // }, [countries]);
    const removeCountry = (name) => {

        const filter = filteringCountires.filter((country) => country.name.common !== name);
        setFilteringCountry(filter);

        toast.success("Remove Country", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }

    //heandleSearch
    const heandleSearch = (searchValue) => {
        const value = searchValue.toLowerCase();
        const NewCountries = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value);
        });
        setFilteringCountry(NewCountries);
    }
    return <>
        <h1>Country App</h1>
        <Search onSearch={heandleSearch} />
        {isLoading && <h2>Loadding</h2>}
        {error && <h2>{error.message}</h2>}
        {countries && <Countries countries={filteringCountires} onRemoveCountry={removeCountry} />}
        <ToastContainer />
    </>;
};

export default DataFetch;
