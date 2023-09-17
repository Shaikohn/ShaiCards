import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import { useModal } from '../../components/Modals/useModal'
import CardModal from '../../components/Modals/CardModal'

const Home = () => {
  const [isOpenCardModal, openCardModal, closeCardModal] = useModal(false);


  return (
    <div>
      <Navbar />
      <p className='homeText'> Un juego de cartas humorístico y provocativo en el que los jugadores compiten para crear las respuestas más graciosas o inapropiadas a preguntas y declaraciones</p>
      <button className='joinButton'>Unirse a una partida</button>
      <br />
      <button className='createButton'>Crear partida</button>
      <br />
      <button className='joinButton' onClick={openCardModal}>Sugerir nueva carta</button>
      <CardModal isOpenCardModal={isOpenCardModal} closeCardModal={closeCardModal} />
    </div>
  )
}

export default Home