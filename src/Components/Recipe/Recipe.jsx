import "../Recipe/Recipe.css";
import { useGetRecipeByIdQuery } from "../../features/api/ApiSlice";
import { Link } from "react-router-dom";

const Recipe = ({ id }) => {
  const { data, error, isLoading, isSuccess } = useGetRecipeByIdQuery(id);
  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <>
      {error ? (
        <div>Error: {error.message}</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        isSuccess && (
          <div id="recipeContainer">
            <Link to="/">
              <button className="return-button">Retour à l'accueil</button>
            </Link>
            <h2 className="title">
              {data.meals[0].strMeal} ({data.meals[0].strArea}){" "}
            </h2>
            <h3 className="title category">
              Category : {data.meals[0].strCategory}
            </h3>
            <img
              className="recipeImg"
              src={data.meals[0].strMealThumb}
              alt="RecipeImage"
            />
            <h3 className="textColor"> Ingrédients :</h3>
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
            <h3 className="textColor">Instructions :</h3>
            <p className="textColor instructionRecipe">
              {data.meals[0].strInstructions}
            </p>
          </div>
        )
      )}
    </>
  );
};

export default Recipe;
