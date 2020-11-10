import { useState, useEffect } from 'react';

export default function useLocalStorageState(key, defaultValue = 'light') {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem(key) || defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, theme);
    document.body.dataset.theme = theme;
  }, [key, theme]);

  return [theme, setTheme];
}
