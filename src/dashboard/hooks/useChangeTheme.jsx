import { useEffect, useRef, useState } from "react";

export default function useChangeTheme() {
  const [showToggleTheme, setShowToggleTheme] = useState(false);
  const menuRef = useRef(null);

  const [theme, setToggleTheme] = useState(() => {
    const storageTheme = localStorage.getItem('theme');
    if (storageTheme) return storageTheme;
    return 'system';
  });

  const toggleShowTheme = () => setShowToggleTheme(prevValue => prevValue === true ? false : true);

  const toggleTheme = (newTheme) => {
    setToggleTheme(newTheme)

    if (newTheme === 'light')
      localStorage.setItem('theme', 'light');
    else if (newTheme ==='dark')
      localStorage.setItem('theme', 'dark');
    else
      localStorage.removeItem('theme');

    toggleShowTheme(false);
  };

  const changeClassTheme = (theme) => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('html').classList.remove('light');
    } else {
      document.querySelector('html').classList.add('light');
      document.querySelector('html').classList.remove('dark');
    }
  }

  useEffect(() => {
    if (theme === 'dark') changeClassTheme('dark');
    else if (theme === 'light') changeClassTheme('light');
    else
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        changeClassTheme('dark');
      else
        changeClassTheme('light');

  }, [theme])

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