import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from "@fullcalendar/react";
import "../Planning/Planning.css";
import { useSelector } from "react-redux";



const Planning = () => {
    const recipes = useSelector((state)=> state.recipes.value)
    
    const events = recipes.map(recipe => ({
        title: recipe.recipe.strMeal,
        date: recipe.date,    
        id : recipe.recipe.idMeal
      }));

    
  return (
    <>
      <p>Planning</p>
      <div id="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events} 
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
    </>
  );
};

export default Planning;
