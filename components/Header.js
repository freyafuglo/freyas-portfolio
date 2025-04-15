"use client";
import React from "react";
import { FaFolder, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header({ children }) {
  const githubLink = "https://github.com/freyafuglo";
  const linkedinLink = "https://www.linkedin.com/in/freya-fugl%C3%B8-a05aa021a/";
  const email = "mailto:freya.fuglo@gmail.com";

  return (
    <header className="win95-header">
      <div className="left-section">
        <a href="#" className="freya-btn">
          Freya Fuglø
        </a>
        <nav className="nav-buttons">
          <a href="#">
            <button>Home</button>
          </a>
          <a href="#about-me">
            <button>About</button>
          </a>
          <a href="#experience">
            <button>Experience</button>
          </a>
          <a href="#projects">
            <button>Projects</button>
          </a>
        </nav>
      </div>
      <div className="right-section">
        <div className="link-btns">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={email}>
            <FaEnvelope />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>          
        </div>

      </div>
      {children} {/* This will be the toggle button */}
    </header>
  );
}
