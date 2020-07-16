import React, { useEffect, useState } from "react";
import Recipe from "./Component/Recipe";
import "./App.css";

function App() {
  const APP_ID = "c736daf0";
  const APP_KEY = "23a9431aee92da88a15ae8fc69f66cf3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const get = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    get();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="container">
      <div className="campos">
      <form onSubmit={getSearch}>
        <h2>🥙What would you like to eat ?🍲</h2> <br></br>
        <div className="inputs">
          <input
            
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="botao" type="submit">
            Search
          </button>
          </div>
        
      </form>
      </div>
      <div className="recipe">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;

// curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
// className="recipe"