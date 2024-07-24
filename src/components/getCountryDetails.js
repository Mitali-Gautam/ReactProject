import React,{useState,useEffect} from 'react'
import axios from 'axios'

function getCountryDetails({match}) {

  const url = 'https://restcountries.com/v3.1/name/${match.params.cca2}?fullText=true';
  const [countryDetails,setCountryDetails] = useState([]);
  return (
    <div>getReceipe</div>
  )
}

export default getCountryDetails