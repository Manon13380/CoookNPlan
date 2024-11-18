import { Link, useLocation } from "react-router-dom";
import "../Header/Header.css";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../assets/Context/AppContext";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { store, setStore } = useContext(MyContext);
  const location = useLocation();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (searchTerm.length >= 3) {
        setStore({ ...store, searchTerm: searchTerm });
      } else {
        setStore({ ...store, searchTerm: "" });
      }
    }, 500);

    return () => clearTimeout(timerRef.current);
  }, [searchTerm]);

  useEffect(() => {
    setSearchTerm("");
  }, [location.pathname])

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
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          id="search"
          type="text"
          placeholder="Rechercher une recette"
          value={searchTerm}
        />
      </div>
    </>
  );
};

export default Header;
