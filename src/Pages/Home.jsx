import CategoriesBarNav from "../Components/CategoriesBarNav/CategoriesBarNav";
import DisplayRecipes from "../Components/DisplayRecipes/DisplayRecipes";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <main>
        <CategoriesBarNav></CategoriesBarNav>
        <DisplayRecipes></DisplayRecipes>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
