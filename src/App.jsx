import { useEffect, useRef, useState } from 'react'
import {
  checkLocation,
  displayTrack,
  initMap,
  openFile,
  removeTrack
} from './handlers'
import './App.css'
import { MdLocationOn } from 'react-icons/md'
import { FaPaperclip } from 'react-icons/fa'
import { MdCached } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { MdInfo } from 'react-icons/md'
import { Modal } from './components/Modal'

export default function App() {

  const [location, setLocation] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [removeCache, setRemoveCache] = useState(false)
  const inputRef = useRef()

  const resetFileUploader = () => inputRef.current.value = ''


  useEffect(() => {
    checkLocation()
  }, [location])

  useEffect(() => {
    initMap()
    // Redraw the track if it exists in LocalStorage when starting the app
    const data = window.localStorage.getItem('gpx')
    data ? displayTrack(data) : null
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3>App GPS con Leaflet y React js</h3>
        <div className="controls">
          <label className='input-label' htmlFor="input-track"><FaPaperclip /></label>
          <button
            title='Get Info'
            onClick={() => {
              setShowModal(!showModal)
              setRemoveCache(false)
            }}
            className='btn info'>
            <MdInfo />
          </button>
          <button
            title='Start Geolocation'
            onClick={() => setLocation(!location)}
            className='btn location'>
            <MdLocationOn />
          </button>
          <button
            title='Remove the track from the map'
            onClick={removeTrack}
            className='btn remove'>
            <MdDelete />
          </button>
          <button
            title='Remove Map Cache'
            onClick={() => {
              setShowModal(!showModal)
              setRemoveCache(true)
            }}
            className='btn cache'>
            <MdCached />
          </button>
          <input ref={inputRef} type="file" accept="application/gpx+xml" id="input-track" onClick={resetFileUploader} onChange={openFile} />
        </div>
        <div id="map"></div>
        <Modal showModal={showModal} setShowModal={setShowModal} removeCache={removeCache} />
      </header>
    </div>
  )
}

/**
 * SOBRE EL USO useRef. VER:
 * https://www.youtube.com/watch?v=D2ElJVzriCk
 */