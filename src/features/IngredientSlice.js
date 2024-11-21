import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const IngredientSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        addIngredient: (state, action) => {
            for (let i = 0; i < 20; i++) {
                let ingredient = action.payload.recipe[`strIngredient${i}`];
                let measure = action.payload.recipe[`strMeasure${i}`] || "";
                let date = action.payload.date
                let recipeName = action.payload.recipe.strMeal
                let recipeId = action.payload.recipe.idMeal
                if (ingredient != null && ingredient != "") {
                    state.value.push({ "measure": measure, "ingredient": ingredient, "date": date, "recipe": recipeName, "originalIndex": state.value.length, "recipeId": recipeId })
                }

            }
        },
        updateIngredient: (state, action) => {
            const ingredientToUpdate = state.value.find((ingredient) => ingredient.originalIndex === action.payload.originalIndex);
            ingredientToUpdate.measure = action.payload.measure
            ingredientToUpdate.date = action.payload.date
        },
        deleteIngredient: (state, action) => {
            state.value = state.value.filter((ingredient) => ingredient.originalIndex !== action.payload.originalIndex);

        },
        removeIngredients: (state, action) => {
            state.value = state.value.filter((ingredient) => ingredient.recipeId !== action.payload)
        },
        updateDateIngredient: (state, action) => {       
            state.value = state.value.map((ingredient) => {
                if (ingredient.recipeId === action.payload.id) {
                    return { ...ingredient, date: action.payload.date};
                }
                return ingredient;
            });
        }
    },
    selectors: {
        selectIngredient: (state) => state.value.slice().sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        })
    }
})


export const { addIngredient, updateIngredient, deleteIngredient, removeIngredients, updateDateIngredient } = IngredientSlice.actions
export const { selectIngredient } = IngredientSlice.selectors
export default IngredientSlice.reducer