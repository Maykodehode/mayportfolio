// IMPORT OF IMAGES FROM THE IMAGES FOLDER
import homebutton from "../Images/homebtn.png";
import codeImg from "../Images/codeImg.png";
import calculatorImg from "../Images/calc.browser.jpg";
import polygons from "../Images/polygons.png";
import githubLogo from "../Images/github.png";
import cssTransitionsImg from "../Images/css.transitions.jpg";

// FUNCTION THAT RETURNS HTML FOR THE PROJECT SECTION //
export default function Projects() {
  return (
    <>
      <div className="container">
        <section className="AboutMeTitle">
          <div className="lineOne line"></div>
          <div className="lineTwo line"></div>
          <div className="lineThree line"></div>
          <div className="lineFour line"></div>
          <h1 id="projects">Projects</h1>
          <div className="lineFive line"></div>
          <div className="lineSix line"></div>
          <div className="lineSeven line"></div>
          <div className="lineEight line"></div>
        </section>
      </div>

      {/* PROJECT SECTION */}
      <section className="project-area">
        <div className="code-card card">
          <img
            className="polygons"
            src={polygons}
            alt="Two triangles ontop of eachother in different angles, logo"
          ></img>
          <img className="card-img" src={codeImg} alt="JavaScript code"></img>
          <div>
            <h3 className="project-h3">javaScript Methods</h3>
            <p className="project-p">
              My solutions to some javaScript tasks I got at Kodehode.
            </p>
            <a href="https://github.com/Maykodehode/Javascript-methods">
              <div className="button">
                <img
                  className="github-button"
                  src={githubLogo}
                  alt="Github logo"
                ></img>
                <p className="githubbuttontext">Github Link</p>
              </div>
            </a>
          </div>
        </div>

        {/* PROJECT CARD: CALCUALTOR */}
        <div className="calculator-card card">
          <img
            className="polygons"
            src={polygons}
            alt="Two triangles ontop of eachother in different angles, logo"
          ></img>
          <img
            className="card-img"
            src={calculatorImg}
            alt="Calculator, dark blue with white buttons"
          ></img>
          <h3 className="project-h3">Calculator</h3>
          <p className="project-p">
            Calculator made in React as a pre-summer project at Kodehode.
          </p>

          {/* GITHUB LINK BUTTON */}
          <a href="https://github.com/Maykodehode/Calculator">
            <div className="button">
              <img
                className="github-button"
                src={githubLogo}
                alt="Github logo"
              ></img>
              <p className="githubbuttontext">Github Link</p>
            </div>
          </a>
        </div>

        {/* PROJECT CARD: CSS TRANSITIONS */}
        <div className="css-transitions-card card">
          <img
            className="polygons"
            src={polygons}
            alt="Two triangles ontop of eachother in different angles, logo"
          ></img>
          <img
            className="card-img"
            src={cssTransitionsImg}
            alt="Different css transitions"
          ></img>
          <h3 className="project-h3">CSS Transitions</h3>
          <p className="project-p">
            A task from Kodehode, which I had a lot of fun working with.
          </p>

          {/* GITHUB LINK BUTTON */}
          <a href="https://github.com/Maykodehode/CSS-transitions">
            <div className="button">
              <img
                className="github-button"
                src={githubLogo}
                alt="Github logo"
              ></img>
              <p className="githubbuttontext">Github Link</p>
            </div>
          </a>
        </div>
      </section>

      {/* HOME BUTTON */}
      <div className="homebtn">
        <a href="#top">
          <img className="homebutton" src={homebutton} alt="home button" />
        </a>
      </div>
    </>
  );
}
