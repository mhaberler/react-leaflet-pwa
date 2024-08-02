import React from 'react'
import { createRoot } from 'react-dom/client';

import './index.css'
import App from './App'
import 'leaflet/dist/leaflet.css'
import 'leaflet-gpx/gpx'

import { registerSW } from 'virtual:pwa-register'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App />);

registerSW()