import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Recipelist from '../assets/css/Recipelist.css'

function FoodList() {

    const YOUR_APP_ID = `af36a32f`;
    const YOUR_APP_KEY = "99ff91ba127c276412f6237cd4a7bd27";
  

 //   const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    const url = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=af36a32f&app_key=99ff91ba127c276412f6237cd4a7bd27&health=alcohol-free';
    const [foods,setFoods] = useState([]);
    const [capitalizedArray, setCapitalizedArray] = useState([]);

    const capitalizeFirstCharacter = (inputString) => {
        console.log(inputString)
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }
    
    useEffect(() => {
        axios
        .get(url)
        .then(res => {
           console.log("==")
           setFoods(res.data.hits)
        })
        .catch(err => {
            console.log(err)
        })
    },[]);

  return (
    <div className="recipe-list">
    <h1>Recipe List</h1>
    <ul>
      {foods.map((food,key) => (
        <li key={key} className="product">
           <img src={food.recipe.image} alt="recipe 1" />
          <h2>{food.recipe.label}</h2>
          <p>{capitalizeFirstCharacter(food.recipe.cuisineType[0])}</p>
          <p>{capitalizeFirstCharacter(food.recipe.mealType[0])}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default FoodList