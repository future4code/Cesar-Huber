import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme'
import MainContainer from './components/MainContainer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
