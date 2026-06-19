import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">

        <p className="about-eyebrow">— About Me</p>

        <h2 className="about-statement">
          If it's manual,{" "}
          <span className="about-highlight">it should be automated.</span>
        </h2>

        <div className="about-body">
          <p>
            DevOps Engineer at <span className="about-tag">SAP</span> with 4+
            years of turning complex, error-prone operations into clean,
            automated pipelines. CI/CD, infrastructure provisioning,
            Kubernetes orchestration — if a human is doing it repeatedly,
            I'm writing the script that does it instead.
          </p>
          <p>
            Lately exploring how{" "}
            <span className="about-tag">intelligent tooling</span> can push
            automation further — smarter scheduling, predictive capacity
            planning, and systems that don't just run but adapt. Based in
            Budapest, StipendiumHungaricum Scholar.
          </p>
        </div>

        <div className="about-chips">
          <span>Automation-first</span>
          <span>Kubernetes</span>
          <span>Jenkins</span>
          <span>ArgoCD</span>
          <span>SAP S/4HANA</span>
          <span>Python</span>
          <span>Budapest 🇭🇺</span>
        </div>

      </div>
    </div>
  );
};

export default About;
