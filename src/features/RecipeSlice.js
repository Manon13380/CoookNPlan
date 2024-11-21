import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const RecipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            state.value.push({ recipe: action.payload.recipe, date: action.payload.date })
        },
        deleteRecipe : (state, action) => {
            state.value = state.value.filter((recipe) => recipe.recipe.idMeal !== action.payload);   
        },
        updateDateRecipe : (state, action) => {
            const recipeToUpdate = state.value.find((recipe) => recipe.recipe.idMeal === action.payload.id);
            recipeToUpdate.date = action.payload.date
        }
        }
      });


export const { addRecipe, deleteRecipe,updateDateRecipe } = RecipeSlice.actions;
export default RecipeSlice.reducer;