import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Windmill } from '@windmill/react-ui'
import './scripts/init-firebase'
import myTheme from './theme/myTheme'
import { AuthProvider, useAuth } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Windmill usePreferences theme={myTheme}>
        <App />
      </Windmill>
    </AuthProvider>

  </React.StrictMode>
);
