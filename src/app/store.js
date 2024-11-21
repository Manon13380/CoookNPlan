import { configureStore } from "@reduxjs/toolkit"
import RecipeSlice from '../features/RecipeSlice'
import IngredientSlice from '../features/IngredientSlice'


export const store = configureStore({
    reducer: {
        recipes: RecipeSlice,
        ingredients: IngredientSlice
    }
})