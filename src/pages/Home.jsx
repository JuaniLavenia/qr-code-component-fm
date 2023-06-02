import QR from "../assets/images/image-qr-code.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="mainContainer">
        <div className="card cardPrincipal">
          <img src={QR} className="card-img-top img-fluid imgQR" alt="..." />
          <div className="card-body textDiv">
            <h2 className="card-title text-center">
              Improve your front-end skills by building projects
            </h2>
            <p className="card-text text-center descrp">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
