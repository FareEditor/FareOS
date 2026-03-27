import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './LanguageContext';
import { Keystatic } from '@keystatic/core/ui';
import keystaticConfig from './keystatic.config';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);

const Main = () => {
  if (window.location.pathname.startsWith('/keystatic')) {
    return <Keystatic config={keystaticConfig as any} />;
  }

  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
