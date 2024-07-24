import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Recipelist from '../assets/css/Recipelist.css'

function FoodList() {

    const YOUR_APP_ID = `af36a32f`;
    const YOUR_APP_KEY = "99ff91ba127c276412f6237cd4a7bd27";
  

 //   const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    const url = 'https://restcountries.com/v3.1/independent?status=true&fields=name,flags,languages,capital';
    const [countries,setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    
    useEffect(() => {
        axios
        .get(url)
        .then(res => {
           //console.log(res.data)
          setCountries(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[]);

  return (
    <div className="recipe-list">
    <h1>Recipe List</h1>
    <ul>
      {countries.map((country,key) => (
        <li key={key} className="product">
           
          <h2><a href={`/getCountryDetails/${country.cca2}`}>{country.name.common}</a></h2>
          <p><b>Capital : {country.capital}</b></p>
          <img src={country.flags.png} alt="recipe 1" />
         
        </li>
      ))}
    </ul>
    {selectedCountry && (
        <getCountryDetails country={selectedCountry} />
      )}
  </div>
  )
}

export default FoodList