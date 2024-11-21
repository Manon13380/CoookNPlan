import { Link, useLocation} from "react-router-dom";
import "../CategoriesBarNav/CategoriesBarNav.css";
import useApi from "../../Hooks/UseApi";
import { useEffect } from "react";

const CategoriesBarNav = () => {
  const { data, isLoaded, error, fetchData } = useApi();
  const location = useLocation();

  useEffect(() => {
    fetchData("https://www.themealdb.com/api/json/v1/1/categories.php");
  }, []);


  return (
    <ul id="CategoriesBarNav">
      {error ? (
        <div>Error: {error.message}</div>
      ) : !isLoaded ? (
        <div>Loading...</div>
      ) : (
        data.categories.map((category) => (
          <li key={category.idCategory}>
            <Link to={`/${category.strCategory}`}
              className={
                location.pathname === "/" && category.strCategory === "Beef"
                  ? "focus"
                  : ""
              }
            >
              {category.strCategory}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default CategoriesBarNav;
