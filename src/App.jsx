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
import { ButtonCache, ButtonInfo, ButtonLocation, ButtonRemove, InputLabel } from './components/Buttons'

export default function App() {

  const [location, setLocation] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [removeCache, setRemoveCache] = useState(false)
  const inputRef = useRef()

  const resetFileUploader = () => inputRef.current.value = ''

  // Aunque en principio se dispara el checkLocation al recargar la pagina, como este metdoo verifica que este cargado el mapa (y no lo esta hasta que se dispara el useEffect siguiente) no ocurre ningun cambio, solo se inicializa «location» a false
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
          <InputLabel htmlFor="input-track"><FaPaperclip /></ InputLabel>
          <ButtonInfo
            title='Get Info'
            onClick={() => {
              setShowModal(!showModal)
              setRemoveCache(false)
            }}><MdInfo /></ButtonInfo>
          <ButtonLocation
            style={{ backgroundColor: !location ? 'greenyellow' : 'magenta' }}
            title='Start Geolocation'
            onClick={() => setLocation(!location)}><MdLocationOn /></ButtonLocation>
          <ButtonRemove
            title='Remove the track from the map'
            onClick={removeTrack}><MdDelete /></ButtonRemove>
          <ButtonCache
            title='Remove Map Cache'
            onClick={() => {
              setShowModal(!showModal)
              setRemoveCache(true)
            }}><MdCached /></ ButtonCache>

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
 *
 * SOBRE LA CREACION DE SNIPPETS PARA REACT:
 * https://levelup.gitconnected.com/use-code-snippets-in-vs-code-to-create-react-components-faster-56fe5327896c#:~:text=Step%201%3A%20Go%20to%20User,4%3A%20Write%20your%20code%20snippet!
 *
 * SOBRE EXPORTAR POR DEFAULT UNA CONSTANTE ARROW FUNCTION EN REACT:
 * https://stackoverflow.com/questions/34676984/cannot-export-const-arrow-function
 */