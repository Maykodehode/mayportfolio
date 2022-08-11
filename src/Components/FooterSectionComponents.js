import logos from "../Images/logos.png";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        <span className="boldtext">Phone: 984 39 413</span>
      </p>
      <p>
        <span className="boldtext">Email: maykodehode@gmail.com</span>
      </p>
      <p>
        <span className="boldtext">Made with:</span>
      </p>
      <img
        className="footer-logos"
        src={logos}
        alt="logo react, html, css, javascript, figma"
      />
    </div>
  );
}
