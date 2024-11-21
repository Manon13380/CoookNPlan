import { configureStore } from "@reduxjs/toolkit"
import RecipeSlice from '../features/RecipeSlice'
import IngredientSlice from '../features/IngredientSlice'
import tooManyIngredientsLListener from "../app/Middlewares/tooManyIngredientsListener"
import deleteRecipeListener from "../app/Middlewares/deleteRecipeListener"
import updateDateRecipeListener from "../app/Middlewares/updateDateRecipeListener"


export const store = configureStore({
    reducer: {
        recipes: RecipeSlice,
        ingredients: IngredientSlice
    },
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(tooManyIngredientsLListener, deleteRecipeListener, updateDateRecipeListener)
})