import { PropsWithChildren } from "react";
import { TbDownload } from "react-icons/tb";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SANAMPREET
              <br />
              <span>SINGH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>DevOps &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cloud</div>
              <div className="landing-h2-2">Automation</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Automation</div>
              <div className="landing-h2-info-1">Cloud</div>
            </h2>
            <a
              className="landing-cv-btn"
              href="/Sanampreet_Singh.pdf"
              download="Sanampreet_Singh_CV.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              <TbDownload /> Download CV
            </a>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
