'use client';
import React from 'react';

export default function Header({ children }) {
  return (
    <header className="win95-header">
      <div className="left-section">
        <a href="#" className="freya-btn">Freya Fuglø</a>
        <nav className="nav-buttons">
          <button>Home</button>
          <button>About</button>
          <button>Experience</button>
          <button>Projects</button>
        </nav>
      </div>
      <div className="right-section">
        {children} {/* This will be the toggle button */}
      </div>
    </header>
  );
}

