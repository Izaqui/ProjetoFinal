import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import Header  from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './hooks/AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <BrowserRouter>
        <AuthProvider>
        <Header />
          <Routes />
          </AuthProvider>
        </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
