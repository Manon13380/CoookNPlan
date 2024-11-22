import { Link, useLocation, useParams } from "react-router-dom";
import "../Header/Header.css";
import { useEffect, useState } from "react";
import CategoriesBarNav from "../CategoriesBarNav/CategoriesBarNav";
import DisplayRecipes from "../DisplayRecipes/DisplayRecipes";
import Recipe from "../Recipe/Recipe";
import CourseList from "../CourseList/CourseList";
import Planning from "../Planning/Planning";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const { id } = useParams();
  const isRecipePage = location.pathname.startsWith("/Recipe/");

  useEffect(() => {
    setSearchTerm("");
  }, [location.pathname]);

  return (
    <>
      <div id="header">
        <ul className="BarNav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Courses">Courses</Link>
          </li>
          <li>
            <Link to="/Planning">Planning</Link>
          </li>
        </ul>
        <h1 id="Title">CookNPlan</h1>
        {location.pathname != "/Courses"  && location.pathname != "/Planning"  && !location.pathname.startsWith("/Recipe") &&(
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          id="search"
          type="text"
          placeholder="Rechercher une recette"
          value={searchTerm}
        />)}
      </div>
      <main>
        {location.pathname === "/Courses" ? (
          <CourseList></CourseList>
        ): location.pathname === "/Planning" ?(<Planning></Planning>): (
          <>
            <CategoriesBarNav />
            {isRecipePage ? (
              <Recipe id={id} />
            ) : (
              <DisplayRecipes searchTerm={searchTerm} />
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Header;
