import { useState } from "react";
import { scroller } from "react-scroll";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// PAGES
import CHED from './components/Projects/CHED'
import Filinventions from './components/Projects/Filinventions'
import Vortex from './components/Projects/Vortex'
import FoodCartel from './components/Projects/FoodCartel'
import Ninna from './components/Projects/Ninna'
import Quintas from './components/Projects/Quintas' 

function App() {
  const [pages, setPages] = useState({
    CHED: false,
    TheNorthern: false,
    Persephone: false,
    Filinventions: false,
    Vortex: false,
    FoodCartel: false,
    Ninna: false,
    Quintas: false,
  });

  const togglePage = (page) => {
    const check = !pages[page];
    setPages({...pages, [page]: check});
  }

  const viewProjects = () => {
    scroller.scrollTo("projects-container", {
      duration: 800,
      delay: 0,
      smooth: "easeOut",
    });
  }

  return (
    <>
      <Header viewProjects={viewProjects}/>
      <Projects togglePage={togglePage}/>
      <Contact />
      <CHED togglePage={togglePage} isPageShown={pages.CHED}/>
      <Filinventions togglePage={togglePage} isPageShown={pages.Filinventions}/>
      <Vortex togglePage={togglePage} isPageShown={pages.Vortex}/>
      <FoodCartel togglePage={togglePage} isPageShown={pages.FoodCartel}/>
      <Ninna togglePage={togglePage} isPageShown={pages.Ninna}/>
      <Quintas togglePage={togglePage} isPageShown={pages.Quintas}/>
    </>
  );
}

export default App;
