import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Windmill } from '@windmill/react-ui'
import './scripts/init-firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Windmill>
      <App />
    </Windmill>
  </React.StrictMode>
);
