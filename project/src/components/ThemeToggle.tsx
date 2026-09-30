import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
<<<<<<< HEAD
    const stored = localStorage.getItem('aviu-theme');
=======
    const stored = localStorage.getItem('aiu-theme');
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
<<<<<<< HEAD
    localStorage.setItem('aviu-theme', dark ? 'dark' : 'light');
=======
    localStorage.setItem('aiu-theme', dark ? 'dark' : 'light');
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
