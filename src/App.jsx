import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stpper from './components/Stpper';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider'; // Import Provider

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Provider>
            <Stpper />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
