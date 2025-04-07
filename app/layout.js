'use client';

import '../styles/globals.css';
import DarkModeToggle from '../components/DarkModeToggle';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode === 'true') {
      setIsDarkMode(true);
    } else if (savedMode === 'false') {
      setIsDarkMode(false);
    } else {
      // Default to system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  //logic with css
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <html lang="en">
        <body>
          <div className="layout-header-wrapper">
          <Header>
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </Header>
          </div>
          {children}
        </body>
    </html>
  );
}

