import { PropsWithChildren, useState } from "react";
import { createPortal } from "react-dom";
import { TbDownload, TbX, TbEye } from "react-icons/tb";
import "./styles/Landing.css";

const CVModal = ({ onClose }: { onClose: () => void }) =>
  createPortal(
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <span>Sanampreet_Singh_CV.pdf</span>
          <div className="cv-modal-actions">
            <a
              href="/Sanampreet_Singh.pdf"
              download="Sanampreet_Singh_CV.pdf"
              className="cv-modal-download"
              data-cursor="disable"
            >
              <TbDownload /> Download
            </a>
            <button className="cv-modal-close" onClick={onClose} data-cursor="disable">
              <TbX />
            </button>
          </div>
        </div>
        <div className="cv-modal-body">
          <iframe
            src="/Sanampreet_Singh.pdf"
            title="Sanampreet Singh CV"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>,
    document.body
  );

const Landing = ({ children }: PropsWithChildren) => {
  const [showCV, setShowCV] = useState(false);

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
            <button
              className="landing-cv-btn"
              onClick={() => setShowCV(true)}
              data-cursor="disable"
            >
              <TbEye /> View CV
            </button>
          </div>
        </div>
        {children}
      </div>

      {showCV && <CVModal onClose={() => setShowCV(false)} />}
    </>
  );
};

export default Landing;
