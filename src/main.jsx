import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from 'react-router/dom';
import Layout from './layout/Layout.jsx';
import Home from './Component/Home.jsx';
import Timeline from './Component/Timeline.jsx';
import { router } from './Routes/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
