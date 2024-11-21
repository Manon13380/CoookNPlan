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
                if (ingredient != null && ingredient != "") {
                    state.value.push({ "measure": measure, "ingredient": ingredient, "date": date , "recipe" : recipeName})
                }

            }
        },
    },
    selectors: {
        selectIngredient: (state) => state.value.slice().sort((a, b) => {        
            return new Date(a.date) - new Date(b.date);
          })
    }
})

export const { addIngredient } = IngredientSlice.actions
export const {selectIngredient} = IngredientSlice.selectors
export default IngredientSlice.reducer