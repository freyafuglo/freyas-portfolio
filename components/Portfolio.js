"use client"; // Enables interactivity in Next.js
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer"; // Import the hook
import ProjectCard from "./ProjectCard";
import ExperienceBlock from "./ExperienceBlock"; // adjust path as needed
import Image from "next/image";
import Footer from "./Footer";

export default function Portfolio() {
  const fullText = "hi there! i'm freya.";
  const [typedText, setTypedText] = useState("");
  const [hasMounted, setHasMounted] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("BLAST");
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    //threshold: 0.15,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const { ref: expRef, inView: expInView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const { ref: techRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: projRef, inView: projInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: footRef, inView: footInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const projectList = [
    {
      title: "DroneVisioner – Backend",
      description:
        "REST API for the drone photography booking platform 'DroneVisioner'. Stores bookings with dates in the database.",
      techList: ["Java", "Spring Boot", "MySQL"],
      githubLink: "https://github.com/Munira1212/DroneVisioner_backend",
    },
    {
      title: "DroneVisioner – Frontend",
      description:
        "User-friendly frontend for the website of 'DroneVisioner', where you can read about and book the drone photographer in question.",
      techList: ["HTML", "JavaScript", "CSS"],
      githubLink: "https://github.com/UgbaadMohamed/DroneVisionerFrontend",
      liveLink: "http://dronevisioner.dk/",
    },
    {
      title: "KinoXP – Backend",
      description:
        "Cinema management system using Spring Boot. Handles movie management and stores ticket bookings with dates and seat info via ticket ID.",
      techList: ["Java", "Spring Boot", "MySQL"],
      githubLink: "https://github.com/FMIU-ONAV/KinoXP_backend",
    },
    {
      title: "KinoXP – Frontend",
      description:
        "JavaScript-based interface for browsing movies, booking/reserving tickets, and picking seats.",
      techList: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/FMIU-ONAV/KinoXP_frontend",
    },
    {
      title: "Bilabonnement",
      description:
        "Full-stack car subscription platform. Includes login system and booking functionality for renting cars.",
      techList: ["HTML", "Java", "CSS", "MySQL"],
      githubLink: "https://github.com/UgbaadMohamed/Bilabonnement",
    },
    {
      title: "Make A Wish",
      description:
        'Wishlist app - similar concept as "Ønskeskyen". Stores wishes in a MySQL database.',
      techList: ["Java", "HTML", "CSS", "MySQL"],
      githubLink: "https://github.com/UgbaadMohamed/MakeAWishProject",
    },
  ]; //more scalable way of adding proj cards, w/o having to repeat animationDelay

  useEffect(() => {
    setHasMounted(true);
  }, []); //sørger for at den når til js før den viser noget på skærmen (for at undgå hydration issue)

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

  function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkScreen = () => setIsMobile(window.innerWidth <= breakpoint);

      checkScreen(); // run once on mount
      window.addEventListener("resize", checkScreen);

      return () => window.removeEventListener("resize", checkScreen);
    }, [breakpoint]);

    return isMobile;
  }

  const isMobile = useIsMobile();

  return (
    <div className="bread">
      <div id="intro-sec">
        {hasMounted && (
          <Image
            src="/computer.PNG" // The image is accessed as if it's at the root. ændrede til PNG i caps lock fordi vercel er case sensitive
            alt="A cool computer"
            width={280} // Specify the width (in pixels)
            height={280} // Specify the height (in pixels) 5 mindre evt.
            className="animated-image"
            priority
          />
        )}
        <h1 className="header-text">{typedText}</h1>
        {hasMounted && (
          <div
            ref={introRef}
            className={`${
              hasMounted && introInView
                ? "intro-fade-in-up"
                : "intro-hidden-before-animate"
            }`}
          >
            <h2>Welcome to my portfolio page.</h2>

            <p>
              I'm a software engineer from Copenhagen, Denmark. I have a passion
              for building thoughtful, user-centered systems. I've contributed
              to innovative health tech products and developed tailored digital
              solutions for small businesses.
            </p>

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
          </div>
        )}
      </div>

      <br></br>

      <div className="sections">
        {hasMounted && (
          <div
            id="about-me"
            ref={aboutRef}
            className={`${
              hasMounted && aboutInView
                ? "about-fade-in-up"
                : "about-hidden-before-animate"
            }`}
          >
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
                  technologies like:{" "}
                </p>
                <ul
                  ref={techRef}
                  className={`experience-list tech ${
                    inView ? "is-visible" : ""
                  }`}
                >
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "PostgreSQL",
                    "Java",
                    "Python",
                  ].map((tech, index) => (
                    <li key={tech} style={{ "--li-delay": `${index * 0.15}s` }}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <p>
                  In my free time, I love learning about philosophical theories,
                  keeping up with scientific developments, and spending time in
                  nature. I also enjoy tinkering with side projects (currently,
                  I'm exploring TypeScript for a personal project).
                </p>
              </div>

              <div className="about-image">
                <Image
                  src="/Freya_Portræt.png"
                  alt="Me"
                  width={225}
                  height={291}
                  className="me"
                />
              </div>
            </div>
          </div>
        )}

        {hasMounted && (
          <div
            id="experience"
            ref={expRef}
            className={`${
              hasMounted && expInView
                ? "exp-fade-in-up"
                : "exp-hidden-before-animate"
            }`}
          >
            <br />
            <br />
            <br />
            <h1 className="section-title">╰┈➤ experience</h1>
            <div className="experience-content">
              <div className="experience-buttons">
                <button onClick={() => setSelectedExperience("BLAST")}>
                  {isMobile ? "00." : "BLAST"}
                </button>
                <button onClick={() => setSelectedExperience("DemensAI")}>
                  {isMobile ? "01." : "DemensAI"}
                </button>
                <button onClick={() => setSelectedExperience("KEA")}>
                  {isMobile
                    ? "02."
                    : "Copenhagen School of Design and Technology"}
                </button>
                <button onClick={() => setSelectedExperience("DroneVisioner")}>
                  {isMobile ? "03." : "DroneVisioner"}
                </button>
              </div>

              {selectedExperience === "BLAST" && (
                <ExperienceBlock
                  role="Fullstack Software Engineer Intern"
                  workPlace="BLAST"
                  period="Aug 2025 – Present"
                  tasks={[""]}
                />
              )}

              {selectedExperience === "DemensAI" && (
                <ExperienceBlock
                  role="Software Developer Intern"
                  workPlace="DemensAI"
                  period="Aug 2024 – Jan 2025"
                  tasks={[
                    "Built a full-stack application from scratch for collecting speech (audio) and metadata through a step-by-step test, used in early dementia detection research.",
                    "Designed the database schema using Sequelize ORM and PostgresSQL, and implemented inclusive, patient-facing features with React, React-use-wizard, Next.js, and Node.js.",
                    "Developed features for the production app, including a results page that integrates a machine learning API to visualize speech analysis for clinicians and patients. Collaborated closely with researchers and deployed the solution using Azure Virtual Machines.",
                  ]}
                />
              )}

              {selectedExperience === "KEA" && (
                <ExperienceBlock
                  role="Tutor"
                  workPlace="Copenhagen School of Design and Technology"
                  period="AUG 2023
              – JAN 2024"
                  tasks={[
                    "Provided guidance in KEA’s Code Lab, assisting IT students with coursework and debugging challenges.",
                    "Supported peers in understanding technical concepts and improving their coding skills.",
                    "Fostered an inclusive and encouraging environment through one-on-one mentoring and peer support.",
                  ]}
                />
              )}

              {selectedExperience === "DroneVisioner" && (
                <ExperienceBlock
                  role="Freelance Developer"
                  workPlace="DroneVisioner"
                  period="Nov 2023 – Feb 2024"
                  tasks={[
                    "Designed and developed a full-stack drone photography booking platform from scratch.",
                    "Built a user-friendly frontend where customers can explore services and schedule bookings.",
                    "Implemented a RESTful API with Java and Spring Boot, storing bookings and customer data in a MySQL database.",
                  ]}
                />
              )}
            </div>
          </div>
        )}

        {hasMounted && (
          <div
            id="projects"
            ref={projRef}
            className={`${
              hasMounted && projInView
                ? "proj-fade-in-up"
                : "proj-hidden-before-animate"
            }`}
          >
            <br />
            <br />
            <br />
            <h1 className="section-title">╰┈➤ projects</h1>

            <div className="projects-grid">
              {projectList.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  index={index}
                  triggerAnimation={projInView}
                  {...project}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {hasMounted && (
        <div
          ref={footRef}
          className={`${
            hasMounted && footInView
              ? "foot-fade-in-up"
              : "foot-hidden-before-animate"
          }`}
        >
          <Footer />
        </div>
      )}
    </div>
  );
}
