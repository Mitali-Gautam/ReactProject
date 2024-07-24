import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
//import FoodList from './components/FoodList.js';
import Signup from './components/Signup.js';
import Registration from './components/Registration.js';
import CountriesListingPage from './components/CountriesListingPage.js';
import CountryDetailsPage from './components/CountryDetailsPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Registration/>} />
        <Route path="/countries" element = {<CountriesListingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
