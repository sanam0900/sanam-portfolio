import { useState } from "react";
import "./styles/Skills.css";

const skillCategories = [
  {
    tab: "CI/CD & Automation",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "GitLab CI/CD", level: 85 },
      { name: "ArgoCD", level: 80 },
      { name: "GitOps", level: 80 },
      { name: "Python", level: 85 },
      { name: "Bash / Shell", level: 90 },
      { name: "Groovy", level: 75 },
      { name: "Selenium", level: 70 },
    ],
  },
  {
    tab: "Cloud & Infrastructure",
    skills: [
      { name: "Kubernetes", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Helm", level: 80 },
      { name: "Ansible", level: 80 },
      { name: "Linux", level: 90 },
      { name: "HANA Cloud", level: 75 },
      { name: "VM Provisioning", level: 85 },
      { name: "HashiCorp Vault", level: 70 },
    ],
  },
  {
    tab: "SAP",
    skills: [
      { name: "SAP S/4HANA", level: 85 },
      { name: "SAP Payroll", level: 80 },
      { name: "SUM / SLCON", level: 80 },
      { name: "SAPHostAgent", level: 80 },
      { name: "HANA DB", level: 75 },
      { name: "MaxDB", level: 75 },
      { name: "ABAP (Config)", level: 65 },
      { name: "SAP Infrastructure APIs", level: 75 },
    ],
  },
  {
    tab: "Monitoring & Data",
    skills: [
      { name: "Grafana", level: 80 },
      { name: "Zabbix", level: 75 },
      { name: "Splunk", level: 70 },
      { name: "ARIMA Modelling", level: 75 },
      { name: "Time-Series Analysis", level: 75 },
      { name: "Python (pandas/numpy)", level: 80 },
      { name: "Git / SVN", level: 90 },
      { name: "PostgreSQL", level: 65 },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="skills-section section-container">
      <h3 className="skills-title">Technical Skills</h3>

      <div className="skills-tabs">
        {skillCategories.map((cat, i) => (
          <button
            key={i}
            className={`skills-tab ${i === active ? "skills-tab-active" : ""}`}
            onClick={() => setActive(i)}
            data-cursor="disable"
          >
            {cat.tab}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skillCategories[active].skills.map((skill) => (
          <div className="skill-row" key={skill.name}>
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-pct">{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
