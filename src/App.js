import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Components/Recipes.Component';

const App = () => {

  // Edaman api for food stuff
  const E_APP_ID = "d3dde79d"
  const E_APP_KEY = "e8722048d0c62c1cb467051f393dd1f5"

  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  // example Edaman api call
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${E_APP_ID}&app_key=${E_APP_KEY}`


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleReq)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    //console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  )
}

export default App;
