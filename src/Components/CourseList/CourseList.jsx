import { useDispatch, useSelector } from "react-redux";
import { selectIngredient } from "../../features/IngredientSlice";
import "../CourseList/CourseList.css";
import { useState } from "react";

const CourseList = () => {
  const ingredients = useSelector((state) => selectIngredient(state));
  const dispatch = useDispatch();
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValues, setEditValues] = useState({
    measure: "",
    date: "",
  });

  const handleEditClick = (index, ingredient) => {
    setEditingIndex(index);
    setEditValues({ measure: ingredient.measure, date: ingredient.date});
  };
  console.log(ingredients)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
  };

  const handleValidateClick = (index) => {
    // dispatch(updateIngredient(editValues));
    setEditingIndex(null);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
  return (
    <>
      <h2>Ma liste de course :</h2>
      {ingredients.length > 0 ? (
        <ul id="ingredientList">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              {editingIndex === index ? (
                <span className="ingredient-info">
                  <input
                    type="text"
                    name="measure"
                    value={editValues.measure}
                    onChange={handleInputChange}
                    className="edit-input"
                  />{" "}
                  <b>{ingredient.ingredient}</b> pour le{" "}
                  <input
                    type="date"
                    name="date"
                    value={editValues.date}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                  <br /> <em>(recette : {ingredient.recipe})</em>
                </span>
              ) : (
                <span className="ingredient-info">
                  <b>
                    {ingredient.measure} {ingredient.ingredient}{" "}
                  </b>{" "}
                  pour le {formatDate(ingredient.date)}
                  <br />
                  <em>(recette : {ingredient.recipe})</em>
                </span>
              )}

              <div className="action-buttons">
                {editingIndex === index ? (
                  <button
                    className="validate-btn"
                    onClick={() => handleValidateClick(index)}
                  >
                    Valider
                  </button>
                ) : (
                  <button
                    className="update-btn"
                    onClick={() => handleEditClick(index, ingredient)}
                  >
                    Modifier
                  </button>
                )}
                <button className="delete-btn">Supprimer</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune recette ajouter au planning</p>
      )}
    </>
  );
};

export default CourseList;
