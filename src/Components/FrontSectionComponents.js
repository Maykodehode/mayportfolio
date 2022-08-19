import pdfIcon from "../Images/icon.png";
import linkedInLogo from "../Images/linkedin.png";
import githubLogo from "../Images/github.png";
import polygonLogo from "../Images/polygons1.png";
import codeLanguageLogos from "../Images/logos.png";
import cv from "../cvFile/CV.maybjerga.pdf";

// FUNCTION THAT RETURNS HTML FOR THE FRONTPAGE SECTION //
export function NavbarOne() {
  return (
    // NAVBAR - TOP LEFT //
    <div className="NavbarOne">
      <h1>
        <a href="#projects">Projects</a>
      </h1>
      <h1>
        <a href="#aboutme">About me</a>
      </h1>
      {/* PDF ICON, WITH LINK FOR DOWNLOADING CV */}
      <a href={cv} download>
        <h1>CV</h1>
      </a>
      <a href={cv} download>
        <img className="pdficon" src={pdfIcon} alt="Download icon" />
      </a>
      <div className="lineNav line"></div>
    </div>
  );
}

// FUNCTION RETURNING IMAGE - LOGOS WITH LINKS - TOP RIGHT - LINKEDIN AND GITHUB //
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

// FUNCTION RETURNING POLYGONS LOGO/IMAGE - MIDDLE RIGHT //
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

// FUNCTION RETURNING TITLE - NAME - PROFESSION - MIDDLE LEFT //
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

      {/* FUNCTION RETURNING IMAGE - LANGUAGE LOGOS - SCALES IN SIZE ON HOVER */}
      <img
        className="emphasize"
        src={codeLanguageLogos}
        alt="logo of figma, html, js, react, css"
      />
    </div>
  );
}
