import { configureStore } from "@reduxjs/toolkit"
import RecipeSlice from '../features/RecipeSlice'
import IngredientSlice from '../features/IngredientSlice'
import tooManyIngredientsLListener from "../app/Middlewares/tooManyIngredientsListener"
import deleteRecipeListener from "../app/Middlewares/deleteRecipeListener"
import updateDateRecipeListener from "../app/Middlewares/updateDateRecipeListener"
import { apiSlice } from "../features/api/ApiSlice"


export const store = configureStore({
    reducer: {
        recipes: RecipeSlice,
        ingredients: IngredientSlice,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(tooManyIngredientsLListener, deleteRecipeListener, updateDateRecipeListener).concat(apiSlice.middleware)
})