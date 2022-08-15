import CodeLanguageLogos from "../Images/logos.png";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        <span className="boldtext">Phone: 984 39 413</span>
      </p>
      <p>
        <span className="boldtext">
          Email:{" "}
          <a href="mailto:maykodehode@gmail.com">maykodehode@gmail.com</a>
        </span>
      </p>
      <p>
        <span className="boldtext">Made with:</span>
      </p>
      <img
        className="footer-logos"
        src={CodeLanguageLogos}
        alt="logo react, html, css, javascript, figma"
      />
    </div>
  );
}
