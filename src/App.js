import Banner from "./Components/Banner";
import Blog from "./Components/Blog";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import GridFive from "./Components/GridFive";
import GridFour from "./Components/GridFour";
import GridList from "./Components/GridList";
import GridOne from "./Components/GridOne";
import GridSix from "./Components/GridSix";
import GridThree from "./Components/GridThree";
import GridTwo from "./Components/GridTwo";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Search from "./Components/Search";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Hero />
      <Dropdown />
      <GridOne />
      <GridTwo />
      <GridThree />
      <GridFour />
      <GridFive />
      <GridSix />
      <Banner />
      <GridList />
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;
