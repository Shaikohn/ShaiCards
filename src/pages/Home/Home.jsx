import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import { useModal } from '../../components/Modals/useModal'
import CardModal from '../../components/Modals/CardModal'
import { useState } from 'react'
import io from 'socket.io-client'
import Game from '../Game/Game'
import RoomModal from '../../components/Modals/RoomModal'

const Home = () => {

  const socket = io.connect("http://localhost:3001")
  const [isOpenCardModal, openCardModal, closeCardModal] = useModal(false);
  const [isOpenRoomModal, openRoomModal, closeRoomModal] = useModal(false);



  return (
    <div>
          <div>
            <Navbar />
      <p className='homeText'> Un juego de cartas humorístico y provocativo en el que los jugadores compiten para crear las respuestas más graciosas o inapropiadas a preguntas y declaraciones</p>
        {/* <button className='joinButton'>Unirse a una partida</button>
      <br /> */}
      <button className='createButton' onClick={() => openRoomModal()}>Crear partida</button>
      <br />
      <button className='joinButton' onClick={openCardModal}>Sugerir nueva carta</button>
      <CardModal isOpenCardModal={isOpenCardModal} closeCardModal={closeCardModal} />
      <RoomModal isOpenRoomModal={isOpenRoomModal} closeCardModal={closeRoomModal} />
          </div>
    </div>
  )
}

export default Home