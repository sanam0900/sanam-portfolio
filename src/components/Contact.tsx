import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/sanampreet3052/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — sanampreet3052
              </a>
            </p>
            <p>
              <a
                href="mailto:sanampreet0900@gmail.com"
                data-cursor="disable"
              >
                sanampreet0900@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science Engineering, Obuda University, Budapest — 2018–2022
            </p>
            <p>
              StipendiumHungaricum Scholar — awarded by the Hungarian Government
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/sanampreet3052/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              DevOps Engineer <br /> <span>Sanampreet Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
