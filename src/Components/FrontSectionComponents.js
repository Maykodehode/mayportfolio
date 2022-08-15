import pdfIcon from "../Images/icon.png";
import linkedInLogo from "../Images/linkedin.png";
import githubLogo from "../Images/github.png";
import polygonLogo from "../Images/polygons1.png";
import codeLanguageLogos from "../Images/logos.png";

export function NavbarOne() {
  return (
    <div className="NavbarOne">
      <h1>
        <a href="#projects">Projects</a>
      </h1>
      <h1>
        <a href="#aboutme">About me</a>
      </h1>
      <a href="https://1drv.ms/b/s!AvHm0FmgWKt1mcNRmYS73Z1Z6SwCbA?e=SrcmIF">
        <h1>CV</h1>
      </a>
      <a href="https://1drv.ms/b/s!AvHm0FmgWKt1mcNRmYS73Z1Z6SwCbA?e=SrcmIF">
        <img className="pdficon" src={pdfIcon} alt="Download icon" />
      </a>
      <div className="lineNav line"></div>
    </div>
  );
}

export function NavbarTwo() {
  return (
    <div className="NavbarTwo">
      <a href="https://www.linkedin.com/in/may-helen-bjerga-45020697/">
        <img
          className="emphasize"
          src={linkedInLogo}
          width="50px"
          height="50px"
          alt="LinkedIn logo, blue with white letters"
        ></img>
      </a>
      <a href="https://github.com/Maykodehode?tab=repositories">
        <img
          className="emphasize"
          src={githubLogo}
          width="50px"
          height="50px"
          alt="Github logo, cat figure"
        ></img>
      </a>
    </div>
  );
}

export function Polygons() {
  return (
    <img
      className="frontpage-logo"
      src={polygonLogo}
      height="700em"
      alt="Two triangles ontop of eachother in different angles, logo"
    />
  );
}

export function FrontText() {
  return (
    <div className="title">
      <h1>May</h1>
      <h1>
        <span className="graytext">Junior</span>{" "}
        <span className="colortext">Front</span>end
      </h1>
      <h1>
        Deve<span className="colortext">loper</span>
      </h1>
      <img
        className="emphasize"
        src={codeLanguageLogos}
        alt="logo of figma, html, js, react, css"
      />
    </div>
  );
}
