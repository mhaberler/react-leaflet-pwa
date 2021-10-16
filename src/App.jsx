import { useEffect, useState } from 'react'
import {
  checkLocation,
  displayTrack,
  initMap,
  openFile,
  removeCacheMap,
  removeTrack } from './handlers'
import './App.css'

const locationClasses = 'btn location'
const removeClasses = 'btn remove'
const cacheClasses = 'btn cache'

export default function App() {

  const [location, setLocation] = useState(false)

  useEffect(() => {
    checkLocation()
  }, [location])

  useEffect(() => {    
    initMap()
    // Redraw the track if it exists in LocalStorage when starting the app
    const data = window.localStorage.getItem('gpx');
    if (data && data.length !== 0) {
      displayTrack(data)
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Ejemplo de App con Leaflet y React js</h3>
        <div className="controls">
          <label className='input-label' htmlFor="input-track">Seleccionar Track…</label>
          <button
            title='Start Geolocation'
            onClick={() => setLocation(!location)}
            className={locationClasses}>
              📌
          </button>
          <button
            title='Remove the track from the map'
            onClick={removeTrack}
            className={removeClasses}>
              🗑️
          </button>
          <button
            title='Remove Map Cache'
            onClick={removeCacheMap}
            className={cacheClasses}>
              🗺️
          </button>
        </div>
        <input type="file" accept="application/gpx+xml" id="input-track" onChange={openFile} />
        <div id="map"></div>
      </header>
    </div>
  )
}