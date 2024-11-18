import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AppContext from "../assets/Context/AppContext";

const Router = () => {
  return (
    <AppContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />
      </Routes>
    </AppContext>
  );
};

export default Router;
