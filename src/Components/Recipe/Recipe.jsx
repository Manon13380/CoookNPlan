
import "../Recipe/Recipe.css";
import { useGetRecipeByIdQuery } from "../../features/api/ApiSlice";

const Recipe = ({ id }) => {
 const { data, error, isLoading } = useGetRecipeByIdQuery(id)
  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);


  return (
    <>
      {error ? (
        <div>Error: {error.message}</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2 className="title">{data.meals[0].strMeal}</h2>
          <img
            className="recipeImg"
            src={data.meals[0].strMealThumb}
            alt="RecipeImage"
          />
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
