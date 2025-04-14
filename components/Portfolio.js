"use client"; // Enables interactivity in Next.js
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Portfolio() {
  const fullText = "hi there! i'm freya.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = -1;
    const typingInterval = setInterval(() => {
      console.log(fullText[index]);
      index += 1;
      setTypedText((prevText) => prevText + fullText[index]);

      if (index === fullText.length - 1) {
        clearInterval(typingInterval);
      }
    }, 90); // Adjust typing speed (in ms)

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="bread">
      <div id="intro-sec">
        <Image
          src="/computer.png" // The image is accessed as if it's at the root
          alt="Logo"
          width={305} // Specify the width (in pixels)
          height={300} // Specify the height (in pixels)
          className="animated-image"
        />
        <h1 className="header-text">{typedText}</h1>
        <h2>Welcome to my portfolio page.</h2>
        <p>
          I'm a software engineer from Copenhagen, Denmark. I have a passion for
          building thoughtful, user-centered systems. I've contributed to
          innovative health tech products and developed tailored digital
          solutions for small businesses.
        </p>
      </div>

      <a href="mailto:freya.fuglo@gmail.com" className="email-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="email-icon"
        >
          <path d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z"></path>
          <path d="M3 3l9 9 9-9"></path>
        </svg>

        <span>Say Hi!</span>
      </a>

      <br></br>

      <div className="sections">
        <div id="about-me">
          <br />
          <br />
          <br />
          <h1 className="section-title">╰┈➤ about me</h1>

          <div className="about-content">
            <div className="about-text">
              <p>
                I recently graduated with an <b>AP degree</b> in{" "}
                <b>Computer Science</b> from{" "}
                <a
                  href="https://kea.dk/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blue-text"
                >
                  Copenhagen School of Design and Technology
                </a>
                . I have been building full-stack applications using
                technologies like: React, Next.js, Node.js, and PostgreSQL.
                <br />
                <br />
                In my free time, I love exploring UI designs, attending tech
                meetups, and tinkering with side projects.
              </p>
            </div>

            <div className="about-image">
              <Image
                src="/me.jpg"
                alt="Me"
                width={285}
                height={262}
                className="me"
              />
            </div>
          </div>
        </div>

        <div id="experience">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="section-title">╰┈➤ experience</h1>
          <p>
          <p>
            <strong>Full-stack Software Developer – Intern</strong>
            <br />
            DemensAI ApS, Lyngby · August 2024 – January 2025
          </p>
          <ul className="experience-list">
            <li>
              Built a speech data collection app used in early dementia
              detection research.
            </li>
            <li>
              Developed full-stack features using React, Next.js, Node.js, and
              PostgreSQL.
            </li>
            <li>
              Created wireframes and UI prototypes for patient-facing features.
            </li>
            <li>
              Designed and implemented the database schema using Sequelize ORM.
            </li>
            <li>
              Collaborated with researchers to ensure usability and clarity in
              the test flow.
            </li>
          </ul>

          <br />

          <p>
            <strong>Tutor</strong>
            <br />
            KEA – Copenhagen School of Design and Technology · August 2023 –
            January 2024
          </p>
          <ul className="experience-list">
            <li>
              Provided homework help in KEA’s CodeLab café for IT students.
            </li>
            <li>
              Assisted peers with technical challenges and code debugging.
            </li>
            <li>
              Strengthened communication and mentoring skills through one-on-one
              support.
            </li>
          </ul>

         

          <br />

          <p>
            <strong>Freelance Developer – Booking Platform</strong>
            <br />
            DroneVisioner · November 2023 – February 2024
          </p>
          <ul className="experience-list">
            <li>Designed and developed a custom booking site from scratch.</li>
            <li>
              Implemented a simple and intuitive interface for service selection
              and scheduling.
            </li>
            <li>
              Delivered a tailored solution to meet the client’s business needs.
            </li>
          </ul>
          </p>
        </div>

        <div id="projects">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="section-title">╰┈➤ projects</h1>
          <p>This section is under construction.</p>
        </div>
      </div>
    </div>
  );
}
