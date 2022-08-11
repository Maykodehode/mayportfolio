import "./App.css";
import Footer from "./Components/FooterSectionComponents";
import AboutMe from "./Components/AboutMeSectionComponents";
import Projects from "./Components/ProjectSectionComponents";
import {
  NavbarOne,
  NavbarTwo,
  Portrait,
  FrontText,
} from "./Components/FrontSectionComponents";

function App() {
  return (
    <>
      <div className="content-wrapper">
        <NavbarOne />
        <NavbarTwo />
        <FrontText />
        <Portrait />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
