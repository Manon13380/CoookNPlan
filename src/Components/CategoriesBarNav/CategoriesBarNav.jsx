import { Link, useLocation} from "react-router-dom";
import "../CategoriesBarNav/CategoriesBarNav.css";
import { useGetCategoriesQuery } from "../../features/api/ApiSlice";


const CategoriesBarNav = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();
  const location = useLocation();


  return (
    <ul id="CategoriesBarNav">
      {error ? (
        <div>Error: {error.message}</div>
      ) : isLoading ? (
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
