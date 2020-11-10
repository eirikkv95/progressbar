import React from 'react';

import styled from 'styled-components';
import Sun from '../Image/sun.svg';
import Moon from '../Image/moon.svg';
import useLocalStorageState from '../useHooks/localStorageHook';

const ThemeToggler = () => {
  const [theme, setTheme] = useLocalStorageState('Theme-storage');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

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
