import { createListenerMiddleware, current } from "@reduxjs/toolkit";

const tooManyIngredientsListener = createListenerMiddleware()

tooManyIngredientsListener.startListening({
    predicate : (action, currentstate,previousState) =>  {
        return currentstate.ingredients.value.length > 10
    },
    effect : (action, listenerApi) => {
        console.log("trop d'ingrédients ajoutés !!!!!")
    }
})

export default tooManyIngredientsListener.middleware