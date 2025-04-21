"use client";
import { useInView } from "react-intersection-observer";

const ExperienceBlock = ({ role, workPlace, period, tasks }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="experience-block" ref={ref}>
      <p>
        <strong>
          <span className="role">{role}</span>
          {" @ "}
          <span className="workplace">{workPlace}</span>
        </strong>
        <br />
        <span className="period">{period.toUpperCase()}</span>
      </p>

      <ul className={`experience-list ${inView ? "is-visible" : ""}`}>
        {tasks.map((item, index) => (
          <li key={index} style={{ "--li-delay": `${index * 0.1}s` }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceBlock;
