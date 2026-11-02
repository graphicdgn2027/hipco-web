import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/webflow/home.css';
import './styles/global.css';
import './styles/grid.css';
import { initThirdParty } from './utils/thirdParty';

/** Remove the splash loader once React finishes its first paint. */
function dismissLoader() {
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.classList.add('ldr-hidden');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  }
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// Dismiss loader after first render settles (~200ms after first frame)
requestAnimationFrame(() => setTimeout(dismissLoader, 200));

initThirdParty();
