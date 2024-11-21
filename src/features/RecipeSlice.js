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
        }
      });


export const { addRecipe } = RecipeSlice.actions;
export default RecipeSlice.reducer;