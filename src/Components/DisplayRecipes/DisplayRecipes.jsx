import { Link } from "react-router-dom";
import { DisplayRecipesByCategories } from "../../Utils/DisplayRecipeUtils";
import "../DisplayRecipes/DisplayRecipes.css";
import AddRecipeModal from "../Modals/AddRecipeModal";
import { useToggle } from "../../Hooks/useToggle";
import { useState } from "react";

const DisplayRecipes = ({ searchTerm }) => {
  const { data, isLoading, error } = DisplayRecipesByCategories({ searchTerm });
  const [isModalOpen, toggleModal] = useToggle();
  const [selectedRecipeId, setSelectedRecipeId] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const openModalWithRecipe = (idMeal, recipe) => {
    setSelectedRecipeId(idMeal); 
    setSelectedRecipe(recipe)
    toggleModal();
  };

  return (
    <div>
      <div id="recipesContainer">
        {error ? (
          <div>Error: {error.message}</div>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : data.meals != null ? (
          data.meals.map((recipe) => (
            <div key={recipe.idMeal} className="recipeItem">
              <Link to={`/Recipe/${recipe.idMeal}`}>
                <img
                  className="recipeImage"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                />
              </Link>
              <p>{recipe.strMeal}</p>
              <button onClick={()=>{openModalWithRecipe(recipe.idMeal, recipe.strMeal)}} className="addPlanning">
                Ajouter à mon planning
              </button>
            </div>
          ))
        ) : (
          <div className="recipeItem">
            <p>Pas de recette pour la recherche '{searchTerm}'</p>
          </div>
        )}
        {isModalOpen && (
          <AddRecipeModal
            onClose={toggleModal}
            isOpen={isModalOpen}
            selectedRecipeId = {selectedRecipeId}
            selectedRecipe = {selectedRecipe}
          ></AddRecipeModal>
        )}
      </div>
    </div>
  );
};

export default DisplayRecipes;
