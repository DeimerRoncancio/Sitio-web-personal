import { useEffect, useRef, useState } from "react";
import { DEFAULT_THEME, THEMES } from "../constants/themes";

const THEME_CLASSES = THEMES.map(({ value }) => `theme-${value}`);

// Anything that isn't a known theme (including the old 'dark'/'light'
// values) falls back to the default.
function readStoredTheme() {
  const stored = localStorage.getItem('theme');
  return THEMES.some(({ value }) => value === stored) ? stored : DEFAULT_THEME;
}

/**
 * Navy is the base palette (:root) and keeps the `dark` class for Tailwind's
 * dark: variants. Every other theme gets `themed`, which maps the --theme-*
 * tokens onto its palette, plus its own `theme-<name>` class.
 */
function applyThemeClass(theme) {
  const html = document.documentElement;
  html.classList.remove('dark', 'themed', 'light', ...THEME_CLASSES);
  html.classList.add(theme === 'navy' ? 'dark' : 'themed', `theme-${theme}`);
}

export default function useChangeTheme() {
  const [showToggleTheme, setShowToggleTheme] = useState(false);
  const menuRef = useRef(null);
  const [theme, setTheme] = useState(readStoredTheme);

  const toggleShowTheme = () => setShowToggleTheme(prevValue => !prevValue);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    setShowToggleTheme(false);
  };

  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  useEffect(() => {
    const closeLinks = (evt) => {
      if (menuRef.current && !menuRef.current.contains(evt.target))
        setShowToggleTheme(false);
    }

    if (showToggleTheme) document.addEventListener('mousedown', closeLinks);
    return () => document.removeEventListener('mousedown', closeLinks);
  }, [showToggleTheme]);

  return {
    menuRef, theme, showToggleTheme, toggleShowTheme, toggleTheme
  }
}
