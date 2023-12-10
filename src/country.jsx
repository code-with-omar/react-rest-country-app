import React from 'react';
import './cssFile/country.css'
const Country = (props) => {
    const { name, flags, capital, population, area, independent, continents } = props.country;
    const heandleRemoveCountry = (name) => {
        props.onRemoveCountry(name);
    }
    return (
        <article className='country'>
            <div>
                <img src={flags.png} alt={flags.alt} className='flag' />
                <h2>Name : {name.common}</h2>
                <h2>Capital : {capital}</h2>
                <h2>Area : {area}</h2>
                <h2>Population : {population}</h2>
                {/* <h2>independent: {independent}</h2> */}
                <h2>Continents : {continents}</h2>
                <button className='btn' onClick={() => {
                    heandleRemoveCountry(name.common);
                }}>Remove Country</button>


            </div>
        </article>
    );
};

export default Country;
