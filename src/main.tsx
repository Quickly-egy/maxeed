import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'animate.css';
import "./i18n";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <App />
  // {/* </StrictMode>, */ }
)
