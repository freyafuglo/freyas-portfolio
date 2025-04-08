'use client';

import '../styles/globals.css';
import DarkModeToggle from '../components/DarkModeToggle';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference (like when refreshing the page- it remembers their prev theme)
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
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
      <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const savedMode = localStorage.getItem('darkMode');
                  if (savedMode === 'true') {
                    document.documentElement.classList.add('dark-mode');
                  } else {
                    document.documentElement.classList.add('light-mode');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
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

