import { createListenerMiddleware, current } from "@reduxjs/toolkit";
import { updateDateIngredient } from "../../features/IngredientSlice";


const updateDateRecipeListener = createListenerMiddleware()

updateDateRecipeListener.startListening({
    type : "recipes/updateDateRecipe",
    effect : (action, listenerApi) => {
        listenerApi.dispatch(updateDateIngredient(action.payload))
    }
})

export default updateDateRecipeListener.middleware