import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sun from '../Image/sun.svg';
import Moon from '../Image/moon.svg';

const ThemeToggler = () => {
  const [theme, setTheme] = useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const THEME_STORAGE = 'Theme-storage';

  useEffect(() => {
    const storageTheme = localStorage.getItem(THEME_STORAGE);
    console.log(storageTheme);
    if (storageTheme) {
      setTheme(storageTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE, theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <Button onClick={() => setTheme(nextTheme)}>
      {theme === 'light' ? (
        <img src={Moon} alt="Moon" />
      ) : (
        <img src={Sun} alt="Sun" />
      )}
    </Button>
  );
};

export default ThemeToggler;

const Button = styled.button`
  margin-right: 2rem;
  background: none;
  border: none;
  cursor: pointer;
`;
