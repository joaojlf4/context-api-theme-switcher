import React, { useState } from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import ThemeContext from './styles/themes/context';
import themes from './styles/themes';

function App() {

  const [themeContext, setTheme] = useState(themes.lightTheme);

  function toggleThemeContext() {
    setTheme(themeContext === themes.lightTheme ? themes.darkTheme : themes.lightTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={{ themeContext, toggleThemeContext }}>
        <ThemeContext.Consumer>
          {({ themeContext, toggleThemeContext }) => (
            <>
              <GlobalStyle theme={themeContext}/> 
              <Header theme={themeContext} toggleTheme={toggleThemeContext}/>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
