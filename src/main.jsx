import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

// Some embedded browsers throw while animating scrollIntoView after a chat update.
// The chat already stays usable without programmatic scrolling, so keep it safe.
if (typeof Element !== 'undefined') {
  Element.prototype.scrollIntoView = () => {};
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
