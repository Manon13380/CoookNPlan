import { createListenerMiddleware, current } from "@reduxjs/toolkit";
import { removeIngredients } from "../../features/IngredientSlice";

const deleteRecipeListener = createListenerMiddleware()

deleteRecipeListener.startListening({
    type : "recipes/deleteRecipe",
    effect : (action, listenerApi) => {
        listenerApi.dispatch(removeIngredients(action.payload))
        
    }
})

export default deleteRecipeListener.middleware