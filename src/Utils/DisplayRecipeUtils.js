import { useLocation } from "react-router-dom";
import { useGetRecipesBySearchQuery, useGetRecipesQuery } from "../features/api/ApiSlice";

const categoryApiMapping = {
  "/": "Beef",
  "/Beef": "Beef",
  "/Chicken": "Chicken",
  "/Dessert": "Dessert",
  "/Lamb": "Lamb",
  "/Miscellaneous": "Miscellaneous",
  "/Pasta": "Pasta",
  "/Pork": "Pork",
  "/Seafood": "Seafood",
  "/Side": "Side",
  "/Starter": "Starter",
  "/Vegan": "Vegan",
  "/Vegetarian": "Vegetarian",
  "/Breakfast": "Breakfast",
  "/Goat": "Goat"
};

export const DisplayRecipesByCategories = ({searchTerm}) => {
 
  const location = useLocation();
  const category = searchTerm 
  ? searchTerm  
  : categoryApiMapping[location.pathname];  


const { data, error, isLoading } = searchTerm 
  ? useGetRecipesBySearchQuery(category)  
  : useGetRecipesQuery(category);  

  return { data, isLoading, error };
};