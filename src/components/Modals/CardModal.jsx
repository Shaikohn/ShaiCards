import { TfiClose } from "react-icons/tfi";
import Modals from "./Modals";
import "./CardModal.css"


export default function CardModal({isOpenCardModal, closeCardModal, handleSubmit, handleChange, loading}) {

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
                                    <input className="form-check-input" type="radio" name="typeOption" value="question" />
                                    <label className="labelMargin">Pregunta</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio" name="typeOption" value="answer" />
                                    <label className="labelMargin">Respuesta</label>
                                </div>
                            </div>
                            <input type="text" autoComplete='off' name="text" className="form-control nameInput" placeholder="Escribe tu nombre o el que quieras" onChange={handleChange} />
					        <textarea autoComplete='off' name="text" className="form-control textArea" placeholder="Escribe el contenido de la carta" onChange={handleChange} />
						    <button style={{borderRadius: '5px', textDecoration: 'none'}} className="btn btn-success mt-2" type="submit">Enviar</button>
					    </form>
        </Modals>
    )
}