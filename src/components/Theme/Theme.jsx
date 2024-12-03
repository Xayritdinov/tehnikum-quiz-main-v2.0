import React, { useState } from 'react'

export const Theme = () => {  
  const [theme, setTheme] = useState('light')  

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme === "dark" ? "dark-theme" : "";
  };
  
  return (
    <nav>
        <label className="theme-toggle">
            <input 
              id='theme-toggle-checkbox'
              type="checkbox" 
              onChange={toggleTheme} 
              checked={theme === "dark"} 
            />
            <span className="slider"></span>
        </label>
    </nav>
  )
}
