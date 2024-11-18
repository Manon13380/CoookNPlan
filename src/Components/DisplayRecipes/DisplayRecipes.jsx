import { MyContext } from "../../assets/Context/AppContext";
import { DisplayRecipesByCategories } from "../../Utils/DisplayRecipeUtils";
import "../DisplayRecipes/DisplayRecipes.css";
import { useContext } from "react";
const DisplayRecipes = () => {
  const { data, isLoaded, error } = DisplayRecipesByCategories();
  const { store, setStore } = useContext(MyContext);
  
  return (
    <div id="recipesContainer">
      {error ? (
        <div>Error: {error.message}</div>
      ) : !isLoaded ? (
        <div>Loading...</div>
      ) : (
        data.meals
          .filter(
            (recipe) =>
              store.searchTerm === "" ||
              recipe.strMeal
                .toLowerCase()
                .includes(store.searchTerm.toLowerCase())
          )
          .map((recipe) => (
            <div key={recipe.idMeal} className="recipeItem">
              <img
                className="recipeImage"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
              <p>{recipe.strMeal}</p>
              <button className="addPlanning">Ajouter à mon planning</button>
            </div>
          ))
      )}
    </div>
  );
};

export default DisplayRecipes;
