import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';

const root = ReactDOMClient.createRoot(document.getElementById("app")!);
root.render(<App message="Platzi ESBuild Example" />);