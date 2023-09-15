import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <p className='homeText'> Un juego de cartas humorístico y provocativo en el que los jugadores compiten para crear las respuestas más graciosas o inapropiadas a preguntas y declaraciones</p>
      <button className='joinButton'>Unirse a una partida</button>
      <br />
      <button className='createButton'>Crear partida</button>
      <br />
      <button className='joinButton'>Sugerir nueva carta</button>
    </div>
    
  )
}

export default Home