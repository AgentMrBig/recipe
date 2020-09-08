import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Recipe from './Components/RecipeWithTabs.Component';

// STYLED COMPONENTS START
const AppContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
`
const SearchForm = styled.form`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchBar = styled.input`
  width: 50%;
  border: 1px solid gray;
  padding: 10px;
`

const SearchButton = styled.button`
  background: lightcoral;
  border: 1px solid gray;
  padding: 10px 20px;
  color: whitesmoke;
`

const RecipesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
// STYLED COMPONENTS END



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
    <AppContainer>
      <SearchForm onSubmit={getSearch}>
        <SearchBar  
          type="text" 
          value={search}
          onChange={updateSearch}
        />
        <SearchButton 
          type="submit">Search</SearchButton>
      </SearchForm>
      <RecipesContainer >
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </RecipesContainer>
    </AppContainer>
  )
}

export default App;
