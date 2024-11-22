import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery: fetchBaseQuery({baseUrl: "https://www.themealdb.com/api/json/v1/1"}),
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query:(category) => `filter.php?c=${category}`
        }),
        getCategories: builder.query({
            query:() => `categories.php`
        }),
        getRecipesBySearch: builder.query({ 
            query:(searchTerm) => `search.php?s=${searchTerm}`

        }),
        getRecipeById: builder.query({
             query:(id) => `lookup.php?i=${id}`
        })
    })
})

export const { useGetRecipesQuery, useGetCategoriesQuery, useGetRecipesBySearchQuery, useGetRecipeByIdQuery } = apiSlice;


