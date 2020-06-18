import { createContext } from 'react';
import light from './light';

export default createContext({
  themeContext: light,
  toggleThemeContext: () => {},
});