import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const version = localStorage.getItem('gsa_theme_v');
      if (version === '2') {
        const stored = localStorage.getItem('gsa_theme');
        if (stored === 'dark' || stored === 'light') {
          return stored;
        }
      }
      localStorage.setItem('gsa_theme', 'dark');
      localStorage.setItem('gsa_theme_v', '2');
      return 'dark'; // Default is dark
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('gsa_theme', theme);
      localStorage.setItem('gsa_theme_v', '2');
      
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) {
        meta.content = theme;
      }
    } catch (e) {
      console.warn('Failed to persist theme:', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('gsa_theme', next);
        localStorage.setItem('gsa_theme_v', '2');
      } catch (e) {
        console.warn('Failed to save theme toggle:', e);
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
