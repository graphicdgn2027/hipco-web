import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/webflow/home.css';
import './styles/global.css';
import './styles/grid.css';
import { initThirdParty } from './utils/thirdParty';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

initThirdParty();
