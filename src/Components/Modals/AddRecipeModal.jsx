import { useDispatch } from "react-redux";
import "../Modals/AddRecipeModal.css";
import { useState } from "react";
import { fetchRecipesAndIngredients } from "../../app/Middlewares/Thunks/FetchRecipesAndIngredients";
import toastr from "toastr";

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
    if (selectedDate != "") {
      dispatch(fetchRecipesAndIngredients(selectedRecipeId, selectedDate));
      onClose();
      toastr.success("Recette ajouté au planning ", "Succès :", {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right",
        timeOut: 3000,
      });
    }else {
      toastr.warning("Aucune date selectionné !", "Attention", {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right",
        timeOut: 3000,
      });
    }
  };
  const handleClickOutside = (e) => {
    if (e.target.className === "modalOverlay") {
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <>
      <div className="modalOverlay" onClick={handleClickOutside}>
        <div className="modalContainer">
          <div className="relative">
            <p id="recipeInfo">
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
