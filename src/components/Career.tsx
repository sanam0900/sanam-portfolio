import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>SAP</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Platform engineering and DevOps at SAP. Spearheading CI/CD pipeline
              design with Git, Jenkins, and Kubernetes. Orchestrating ArgoCD for
              GitOps-based deployments, and automating provisioning workflows for
              SAP cloud infrastructure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>SAP · Budapest</h5>
              </div>
              <h3>2022–25</h3>
            </div>
            <p>
              Contributed to a MaxDB to S/4HANA migration by automating
              provisioning and operational workflows. Automated SAP Payroll
              system provisioning from VM build to OnStockReady. Achieved 70%
              increase in system provisioning speed and 90% improvement in
              delivery efficiency. Maintained Git/SVN version control systems
              for seamless team collaboration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Obuda University, Budapest</h5>
              </div>
              <h3>2018–22</h3>
            </div>
            <p>
              StipendiumHungaricum Scholar — awarded by the Hungarian Government.
              Graduated with a degree in Computer Science Engineering from Obuda
              University, Budapest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
