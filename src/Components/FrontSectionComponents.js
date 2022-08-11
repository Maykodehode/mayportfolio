import icon from "../Images/icon.png";
import linkedin from "../Images/linkedin.png";
import github from "../Images/github.png";
import image from "../Images/portrett.png";
import logos from "../Images/logos.png";

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
        <img className="pdficon" src={icon} alt="Download icon" />
      </a>
    </div>
  );
}

export function NavbarTwo() {
  return (
    <div className="NavbarTwo">
      <a href="https://www.linkedin.com/in/may-helen-bjerga-45020697/">
        <img
          src={linkedin}
          width="50px"
          height="50px"
          alt="LinkedIn logo, blue with white letters"
        ></img>
      </a>
      <a href="https://github.com/Maykodehode?tab=repositories">
        <img
          src={github}
          width="50px"
          height="50px"
          alt="Github logo, cat figure"
        ></img>
      </a>
    </div>
  );
}

export function Portrait() {
  return <img className="selfie" src={image} height="600px" alt="portrait" />;
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
        className="Logos"
        src={logos}
        alt="logo of figma, html, js, react, css"
      />
    </div>
  );
}
