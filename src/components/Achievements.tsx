import { useEffect, useRef, useState } from "react";
import "./styles/Achievements.css";

const stats = [
  { value: 70, suffix: "%", label: "Faster System Provisioning" },
  { value: 90, suffix: "%", label: "Improved Delivery Efficiency" },
  { value: 4,  suffix: "+",  label: "Years of DevOps Experience" },
  { value: 50, suffix: "%", label: "Reduction in Manual Work" },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

const StatCard = ({ value, suffix, label, active }: typeof stats[0] & { active: boolean }) => {
  const count = useCountUp(value, active);
  return (
    <div className="achievement-card">
      <div className="achievement-number">
        <span className="achievement-count">{count}</span>
        <span className="achievement-suffix">{suffix}</span>
      </div>
      <p className="achievement-label">{label}</p>
    </div>
  );
};

const Achievements = () => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="achievements-section section-container" ref={ref}>
      <h3 className="title">By the Numbers</h3>
      <div className="achievements-grid">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} active={active} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
