import { useDispatch } from "react-redux";
import "../Modals/AddRecipeModal.css";
import { addRecipe } from "../../features/RecipeSlice";
import { addIngredient } from "../../features/IngredientSlice";
import axios from "axios";
import { useState } from "react";

const AddRecipeModal = ({
  isOpen,
  onClose,
  selectedRecipeId,
  selectedRecipe,
}) => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleAddRecipe = async () => {
    //mettre un toast si selecdate vide
    if (selectedDate != "") {
      await axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedRecipeId}`
        )
        .then((response) => {
          dispatch(
            addRecipe({
              recipe: response.data.meals[0],
              date: selectedDate,
            })
          );
          dispatch(
            addIngredient({
              recipe: response.data.meals[0],
              date: selectedDate,
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });

      onClose();
    }
  };
  const handleClickOutside = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <>
      <div id="modalOverlay" onClick={handleClickOutside}>
        <div id="modalContainer">
          <div className="relative">
            <p>
              Ajouter <b>{selectedRecipe}</b> à mon planning :
            </p>
            <input type="date" onChange={handleDateChange} required />
            <button className="validate" onClick={handleAddRecipe}>
              Valider
            </button>
            <button className="close-button" onClick={onClose}>
              &#x2715;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRecipeModal;
