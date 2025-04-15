"use client";

export default function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <label className="theme-switch">
      <input type="checkbox" onChange={toggleDarkMode} />
      <span className="slider"></span>
    </label>
  );
}
