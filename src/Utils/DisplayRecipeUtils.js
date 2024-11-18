import { useLocation } from "react-router-dom";
import useApi from "../Hook/UseApi";
import { useContext, useEffect } from "react";
import { MyContext } from "../assets/Context/AppContext";

const categoryApiMapping = {
  "/": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",
  "/Beef": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",
  "/Chicken": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken",
  "/Dessert": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",
  "/Lamb": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb",
  "/Miscellaneous": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous",
  "/Pasta": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta",
  "/Pork": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Pork",
  "/Seafood": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
  "/Side": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Side",
  "/Starter": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Starter",
  "/Vegan": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan",
  "/Vegetarian": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian",
  "/Breakfast": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast",
  "/Goat": "http://www.themealdb.com/api/json/v1/1/filter.php?c=Goat"
};

export const DisplayRecipesByCategories = () => {
  const {store, setStore} = useContext(MyContext)
  const { data, isLoaded, error, fetchData } = useApi();
  const location = useLocation();

  useEffect(() => {
    const apiUrl = categoryApiMapping[location.pathname];
      fetchData(apiUrl);
  }, [location.pathname]); 
  
  
  return { data, isLoaded, error };
};