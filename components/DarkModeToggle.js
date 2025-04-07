'use client';

export default function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <button className='toggle-dark-mode' onClick={toggleDarkMode}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
    
  );
}
