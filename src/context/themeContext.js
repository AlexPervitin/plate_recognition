import React, { useContext, useState, createContext } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { GlobalStyle } from '@/theme/globalStyle';
import { lightTheme, darkTheme } from '@/theme/theme';
import { APP_THEME } from '@/common/constants';
const ThemeContext = createContext();
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem(APP_THEME) || 'dark');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    const nextValue = isDarkTheme ? 'light' : 'dark';
    setTheme(nextValue);
    localStorage.setItem(APP_THEME, nextValue);
  };
  const setDefaultTheme = () => {
    setTheme('dark');
    localStorage.setItem(APP_THEME, 'dark');
  };
  const value = {
    toggleTheme,
    isDarkTheme,
    setDefaultTheme,
    theme,
  };
  return (
    <ThemeContext.Provider value={value}>
      <ThemeProviderStyled theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
