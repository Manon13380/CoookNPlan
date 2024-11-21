import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import "../Planning/Planning.css";
import { useDispatch, useSelector } from "react-redux";
import { useToggle } from "../../Hooks/useToggle";
import { deleteRecipe, updateDateRecipe } from "../../features/RecipeSlice";
import { useState } from "react";
import toastr from "toastr";

const Planning = () => {
  const recipes = useSelector((state) => state.recipes.value);
  const [isModalOpen, toggleModal] = useToggle();
  const [infoEvent, setInfoEvent] = useState("");
  const dispatch = useDispatch();


  const events = recipes.map((recipe) => ({
    title: recipe.recipe.strMeal,
    date: recipe.date,
    id: recipe.recipe.idMeal,
  }));



  const showEvent = (info) => {
    toggleModal();
    setInfoEvent(info.event);
  };

  const handleClickOutside = (e) => {
    if (e.target.className === "modalOverlay") {
      toggleModal();
    }
  };

  const handleDeleteRecipe = () => {
    dispatch(deleteRecipe(infoEvent.id));
    toggleModal();
    toastr.success("Recette supprimé du planning", "Succès :", {
      closeButton: true,
      progressBar: true,
      positionClass: "toast-bottom-right",
      timeOut: 3000,
    });
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }
  const handleEventDrop = (info) => {
    dispatch(updateDateRecipe({id : info.event._def.publicId, date : formatDate(info.event.start)}));
  };
  return (
    <>
      <h2 className="title">Planning des repas</h2>
      <div id="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={showEvent}
          eventDrop={handleEventDrop}
          headerToolbar={{
            left: "title",
            center: "",
            right: "prev,next today",
          }}
          selectable={true}
          editable={true}
          height="auto"
        />
      </div>
      {isModalOpen && (
        <div className="modalOverlay" onClick={handleClickOutside}>
          <div className="modalContainer modalPlanning">
            <div className="relative">
              <p>
                Voulez-vous supprimer <b>{infoEvent.title}</b> ?
              </p>
              <div>
                <button onClick={handleDeleteRecipe} className="delete-btn">
                  Supprimer
                </button>
                <button className="cancel-btn" onClick={toggleModal}>
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Planning;
