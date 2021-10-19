import React, { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { removeCacheMap } from '../handlers'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  max-width: 90vw;
  min-height: 150px;
  padding-bottom: .8rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #aaa;
  color: #000;
  position: relative;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  header {
    background-color: purple;
    width: 100%;
  }
  
  h4 {
    font-size: calc(.8rem + 1.9vmin);
    margin: 2rem 0 0 0;
    color: white;
  }

  ul {
    font-size: 1rem;
    text-align: left;
    padding-right: 1rem;
  }

  p {
    margin: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
  }
`

const CloseModalButton = styled(MdClose)`
  color: white;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 25px;
  height: 25px;
  padding: 0;
  z-index: 10;
`

const CacheContent = styled.div`
  display: flex;
  width: 100%;  
  justify-content: flex-end;

  button {
    margin-right: .8rem;
    padding: 5px 20px;
    background: #141414;
    border-radius: 6px;
    color: yellow;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
`

export const Modal = ({ showModal, setShowModal, removeCache }) => {
  
  const info = JSON.parse(window.localStorage.getItem('info'))

  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <header>
                  {
                    !removeCache ? <h4>Info del Track</h4> : <h4>Eliminar Cache de Mapas</h4>
                  }
                </header>

                {
                  !removeCache
                    ? (info ?
                      (<ul>
                        <li><strong>Nombre</strong>: {info.name}</li>
                        <li><strong>Distancia</strong>: {info.distance}</li>
                        <li><strong>Máxima Elevación</strong>: {info.maxElevation}</li>
                        <li><strong>Tiempo</strong>: {info.time}</li>
                      </ul>) : <p>No hay track cargado ☹️</p>)
                    : <>
                        <p>Sin conexión, no podrás ver mapas 🤔</p>
                        <CacheContent>
                          <button onClick={() => {
                              removeCacheMap()
                              setShowModal(prev => !prev)
                            }}>
                            <MdDelete />
                          </button>
                        </CacheContent>
                      </>
                }

              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}

/**
 * MODAL. VER:
 * https://www.codavilla.com/posts/react-modal-popup-tutorial-using-hooks
 * https://github.com/briancodex/react-modal-v1
 * https://www.youtube.com/watch?v=d3aI1Dt0Z50
 */