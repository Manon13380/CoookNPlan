import axios from "axios";
import { addRecipe } from "../../../features/RecipeSlice";
import { addIngredient } from "../../../features/IngredientSlice";

export const fetchRecipesAndIngredients = (selectedRecipeId, selectedDate) => async dispatch => {
    await axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedRecipeId}`
    )
    .then((response) => {
      dispatch(
        addRecipe({
          recipe: response.data.meals[0],
          date: selectedDate,
        })
      );
      dispatch(
        addIngredient({
          recipe: response.data.meals[0],
          date: selectedDate,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });

}