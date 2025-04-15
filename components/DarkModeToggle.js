'use client';

export default function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <button className='toggle-dark-mode' onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
    
  );
}
