import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Country from './country.jsx';
import './cssFile/countries.css'
const Countries = (props) => {
    return (
        <div>
            <section className='countries'>
                {props.countries.map((country) => {
                    const newCountry = { ...country, id: uuidv4() }; // Create new object with spread operator
                    return <Country country={newCountry} key={newCountry.id} onRemoveCountry={props.onRemoveCountry} />;
                })}
            </section>
        </div>
    );
};

export default Countries;
