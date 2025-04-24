"use client";
import { useInView } from "react-intersection-observer";

const ExperienceBlock = ({ role, workPlace, period, tasks }) => {
  const { ref, inView } = useInView({ triggerOnce: true,
    threshold: 0.35, }); //evt gøre lidt kortere, med display li elementer en for en

  return (
    <div className="experience-block">
      <p>
        <strong>
          <span className="role">{role}</span>
          {" @ "}
          <span className="workplace">{workPlace}</span>
        </strong>
        <br />
        <span className="period">{period.toUpperCase()}</span>
      </p>

      <ul ref={ref} className={`experience-list ${inView ? "is-visible" : ""}`}>
        {tasks.map((item, index) => (
          <li key={index} style={{ "--li-delay": `${index * 0.15}s` }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceBlock;
