"use client";
//import React from "react";

const ExperienceBlock = ({ title, period, tasks }) => {
    return (
      <div className="experience-block">
        <p>
          <strong>{title}</strong>
          <br />
          {period}
        </p>
        <ul className="experience-list">
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
  