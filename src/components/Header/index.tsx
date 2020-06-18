import React  from 'react';

import { Container } from './styles';
import Switch from 'react-switch';
import themes from '../../styles/themes';
// import ThemeContext from '../../styles/themes/context';

interface HeaderProps {
  theme: Theme,
  toggleTheme: VoidFunction
}

const Header: React.FC<HeaderProps> = (
  {
   theme, 
   toggleTheme 
  }) => {
  return (
    <Container theme={theme}>
    Theme Switcher
    <Switch 
      onClick={toggleTheme}
      checked={theme === themes.darkTheme}
      onChange={toggleTheme}
      onColor={themes.lightTheme.colors.primary}
      offColor={themes.darkTheme.colors.primary}
      height={15}
      handleDiameter={25}
      width={45}
      color=""
      checkedIcon={false}
      uncheckedIcon={false}
      />
  </Container>
  );
}

export default Header;