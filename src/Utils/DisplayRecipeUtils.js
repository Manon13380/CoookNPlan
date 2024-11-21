import { useLocation } from "react-router-dom";
import useApi from "../Hooks/UseApi";
import { useEffect } from "react";

const categoryApiMapping = {
  "/": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",
  "/Beef": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",
  "/Chicken": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken",
  "/Dessert": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",
  "/Lamb": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb",
  "/Miscellaneous": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous",
  "/Pasta": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta",
  "/Pork": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork",
  "/Seafood": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
  "/Side": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side",
  "/Starter": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter",
  "/Vegan": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan",
  "/Vegetarian": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian",
  "/Breakfast": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast",
  "/Goat": "https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat"
};

export const DisplayRecipesByCategories = ({searchTerm}) => {
  const { data, isLoaded, error, fetchData } = useApi();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "") {
      fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    } else {
      const apiUrl = categoryApiMapping[location.pathname];
      fetchData(apiUrl);
    }

  }, [location.pathname, searchTerm]);


  return { data, isLoaded, error };
};