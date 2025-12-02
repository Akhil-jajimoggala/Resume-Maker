'use client';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}
