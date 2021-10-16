import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'leaflet/dist/leaflet.css'
import 'leaflet-gpx/gpx'
import { registerSW } from 'virtual:pwa-register'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

registerSW()