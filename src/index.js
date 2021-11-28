import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';

import App from './App.jsx';

import './styles/index.scss';

const theme = extendTheme({
    config: {
        useSystemColorMode: false,
        initialColorMode: 'dark',
    },
    colors: {
        customGray: {
            200: '#525966',
            300: '#5f6674',
            400: '#6a7280',
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
