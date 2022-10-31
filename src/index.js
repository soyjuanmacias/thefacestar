import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import * as serviceWorker from './config/serviceWorker';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import theme from './theme';
import reportWebVitals from './config/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Providers = () => {
  return <BrowserRouter>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>;
};

root.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);

serviceWorker.unregister();
reportWebVitals();
