import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footerContent">
        <h5>
          Challenge by:
          <Link
            to="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          . Coded by{" "}
          <Link to="https://github.com/JuaniLavenia">Juani Lavenia</Link>
        </h5>
      </div>
    </>
  );
}

export default Footer;
