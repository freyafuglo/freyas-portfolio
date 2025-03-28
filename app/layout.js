'use client';

import '../styles/globals.css';
import DarkModeToggle from '../components/DarkModeToggle';
import { useState, useEffect } from 'react';

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
        <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        {children}
      </body>
    </html>
  );
}

