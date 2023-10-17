import { TfiClose } from "react-icons/tfi";
import Modals from "./Modals";
import "./CardModal.css"
import { useReducer, useState } from "react";
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux"
import { addUnconfirmedCard } from "../../redux/actions/unconfirmedCardActions";

export default function CardModal({isOpenCardModal, closeCardModal}) {

    const [loading, setLoading] = useState(false)
    const initialState = { type: '', user: '', text: '' }
	const [cardData, setCardData] = useState(initialState)
    const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
    const dispatch = useDispatch()

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
            text: "Elige un tipo de carta!",
            icon: "error",
            background: "#1a1a1a",
            color: '#fff',
            timer: 3000,
            })
        } else if(cardData.user.length < 1) {
            Swal.fire({
            title: "Error",
            text: "Escribe tu nombre o el que quieras!",
            icon: "error",
            background: "#1a1a1a",
            color: '#fff',
            timer: 3000,
            })
        }  else {
            dispatch(addUnconfirmedCard(cardData, forceUpdate, e, setCardData, initialState, setLoading))
        }
    }
    
    return (
        <Modals isOpenModal={isOpenCardModal} closeModal={closeCardModal}>
				<div className="d-flex">
					    <h3 className="title">Sugerir una carta</h3>
					    <div>
							<button onClick={closeCardModal} style={{background: 'none', border: 'none', marginLeft: '25px', outline: 'none'}}>
								<TfiClose size={25} color="red" />
							</button>
						</div>
					</div>
                    <p style={{marginBottom: 0}}>Elige el tipo de carta!</p>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-4" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="type" value="question" />
                                    <label className="labelMargin">Pregunta</label>
                                </div>
                                <div>
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="type" value="answer" />
                                    <label className="labelMargin">Respuesta</label>
                                </div>
                            </div>
                            <input type="text" autoComplete='off' name="user" className="form-control nameInput" placeholder="Escribe tu nombre o el que quieras" onChange={handleChange} />
					        <textarea autoComplete='off' name="text" className="form-control textArea" placeholder="Escribe el contenido de la carta" onChange={handleChange} />
						    <button style={{borderRadius: '5px', textDecoration: 'none'}} className="btn btn-success mt-2" type="submit">Enviar</button>
					    </form>
        </Modals>
    )
}