import { useEffect } from "react";
import useApi from "../../Hook/UseApi";
import "../Recipe/Recipe.css";

const Recipe = ({ id }) => {
  const { data, isLoaded, error, fetchData } = useApi();
  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

  useEffect(() => {
    fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }, []);
  
  return (
    <>
      {error ? (
        <div>Error: {error.message}</div>
      ) : !isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img
            className="recipeImg"
            src={data.meals[0].strMealThumb}
            alt="RecipeImage"
          />
          <p className="textColor">{data.meals[0].strMeal}</p>
          <p className="textColor"> Ingrédients :</p>
          <ul className="ingredientContainer">
            {numbers.map((number) => {
              const ingredient = data.meals[0][`strIngredient${number}`];
              const measure = data.meals[0][`strMeasure${number}`];
              if (ingredient != null && ingredient !== "") {
                return (
                  <li key={number}>
                    {measure} {ingredient}
                  </li>
                );
              } 
            })}
          </ul>
          <p className="textColor">Instructions :</p>
          <p className="textColor">{data.meals[0].strInstructions}</p>
        </div>
      )}
    </>
  );
};

export default Recipe;
