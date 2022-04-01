import React from 'react';
// newer way of using react DOM with createRoot  for react 18 and above
// import everything as REACTDOMClient from 'react-dom' module
import * as ReactDOMClient from 'react-dom/client'
import './index.css';
import App from './app/index.tsx';

// create a root container
const rootContainer = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootContainer)

root.render(<App/>);
