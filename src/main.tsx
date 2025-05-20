import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './app/styles/global.css';
import App from './app/App';
import { Providers } from './app/providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
