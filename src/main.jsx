import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import { Context } from './Components/utils/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <CssBaseline />
    <Context>
      <App/>
    </Context>
    </BrowserRouter>
);


