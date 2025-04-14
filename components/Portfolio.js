"use client"; // Enables interactivity in Next.js
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Portfolio() {
  const fullText = "hey there! i'm freya";
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
        innovative health tech products and developed tailored digital solutions
        for small businesses.
      </p>

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
                technologies like React, Next.js, Node.js, and PostgreSQL.
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
            I recently graduated with a degree in computer science and have been
            building full-stack applications using technologies like React,
            Next.js, Node.js, and PostgreSQL.
            <br />
            <br />
            In my free time, I love exploring retro UI designs (like this one
            👾), attending tech meetups, and tinkering with side projects.
          </p>
        </div>

        <div id="projects">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="section-title">╰┈➤ projects</h1>
          <p>
            I recently graduated with a degree in computer science and have been
            building full-stack applications using technologies like React,
            Next.js, Node.js, and PostgreSQL.
            <br />
            <br />
            In my free time, I love exploring retro UI designs (like this one
            👾), attending tech meetups, and tinkering with side projects.
          </p>
        </div>
      </div>
    </div>
  );
}
