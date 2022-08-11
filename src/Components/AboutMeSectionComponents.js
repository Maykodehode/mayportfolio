import imageTwo from "../Images/picture.png";
import homebutton from "../Images/homebtn.png";

export default function AboutMe() {
  return (
    <div className="container">
      <section className="AboutMeTitle">
        <div className="lineOne line"></div>
        <div className="lineTwo line"></div>
        <div className="lineThree line"></div>
        <div className="lineFour line"></div>
        <h1 id="aboutme">About Me</h1>
        <div className="lineFive line"></div>
        <div className="lineSix line"></div>
        <div className="lineSeven line"></div>
        <div className="lineEight line"></div>
      </section>

      <section className="intro-text">
        <p className="textOne">
          My name is May, I am 32 years old and I'm taking a very exciting{" "}
          <span className="boldtext">
            {" "}
            Frontend Developer course in Stavanger called Kodehode
          </span>
          . The course involves 6 months of theory and 6 months of practice,
          where I learn{" "}
          <span className="boldtext">
            HTML, CSS, javaScript, React and Figma
          </span>
          .
        </p>
        <div>
          <p className="textTwo">
            When my shaman isnt keeping the hunters alive in World of Warcraft,
            I am often on the <span className="boldtext">floorball </span>{" "}
            court, where I am or have been both an eliteseries player, club
            leader and a referee.
          </p>

          <p className="textTwo">
            A bit of OCD also comes in handy when it comes to{" "}
            <span className="boldtext">tidiness, order and system</span>, and
            I'm probably above average{" "}
            <span className="boldtext"> detailoriented</span>. My friends would
            probably describe me as{" "}
            <span className="boldtext">the funny one</span> in the group,
            despite a few Sahara jokes occasionally.
          </p>

          <p className="textTwo">
            4 months of travel through North America, Indonesia and Australia
            has also taught me a lot about different cultures,{" "}
            <span className="boldtext">
              cooperation and the importance of good communication
            </span>
            .
          </p>
        </div>
        <img
          className="picture"
          src={imageTwo}
          height="460px"
          alt="me in grand canyon"
        ></img>
      </section>

      <div className="homebtn">
        <a href="#top">
          <img src={homebutton} alt="home button" />
        </a>
      </div>
    </div>
  );
}
