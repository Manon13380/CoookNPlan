import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import RecipePage from "../Pages/RecipePage";
import CoursesPage from "../Pages/CoursesPage";
import PlanningPage from "../Pages/PlanningPage";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />
        <Route path="/Recipe/:id" element={<RecipePage/>}></Route>
        <Route path='/Courses' element={<CoursesPage/>}></Route>
        <Route path="/Planning" element={<PlanningPage/>}></Route>
      </Routes>
  );
};

export default Router;
