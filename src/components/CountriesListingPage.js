import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

function CountriesListingPage() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
        .get('https://restcountries.com/v3.1/all')
        .then((response) => {
            setCountries(response.data)
        })
        .catch((error) => {
            console.error("error")
        })
    }, []);

  return (
    <div>
        <h1>CountriesListingPage</h1>
        <ul>
            {Array.isArray(countries) && countries.map((country) => {
                <li>
                    <Link to={`/countries/${country.name.common}`}> {country.name.common} </Link>
                </li>
            })}
        </ul>
    </div>
  )
}

export default CountriesListingPage;