import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import { useModal } from '../../components/Modals/useModal'
import CardModal from '../../components/Modals/CardModal'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Home = () => {

  const initialState = { text: '', type: '' }
	const [cardData, setCardData] = useState(initialState)
  const [isOpenCardModal, openCardModal, closeCardModal] = useModal(false);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setCardData({...cardData, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(cardData.text.length < 4) {
  Swal.fire({
    title: "Error",
    text: "Debe tener un mínimo de 4 caracteres!",
    icon: "error",
    background: "#1a1a1a",
    color: '#fff',
    timer: 3000,
  })
} else if(cardData.text.length > 200) {
        Swal.fire({
    title: "Error",
    text: "Debe tener un máximo de 200 caracteres!",
    icon: "error",
    background: "#1a1a1a",
    color: '#fff',
    timer: 3000,
  })
} else if(cardData.type.length < 1) {
        Swal.fire({
    title: "Error",
    text: "Elige una categoría!",
    icon: "error",
    background: "#1a1a1a",
    color: '#fff',
    timer: 3000,
  })
    } else {
        /* dispatch(addAdminQuestion(questionData, forceUpdate, e, setQuestionData, initialState, setLoading)) */
    }
}

  return (
    <div>
      <Navbar />
      <p className='homeText'> Un juego de cartas humorístico y provocativo en el que los jugadores compiten para crear las respuestas más graciosas o inapropiadas a preguntas y declaraciones</p>
      <button className='joinButton'>Unirse a una partida</button>
      <br />
      <button className='createButton'>Crear partida</button>
      <br />
      <button className='joinButton' onClick={openCardModal}>Sugerir nueva carta</button>
      <CardModal isOpenCardModal={isOpenCardModal} closeCardModal={closeCardModal} handleSubmit={handleSubmit} handleChange={handleChange} loading={loading} />
    </div>
  )
}

export default Home