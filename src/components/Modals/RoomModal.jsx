import { TfiClose } from "react-icons/tfi";
import Modals from "./Modals";
import "./CardModal.css"
import { useState } from "react";
import Swal from 'sweetalert2'
import io from 'socket.io-client'

export default function RoomModal({isOpenRoomModal, closeRoomModal}) {

    const socket = io.connect("http://localhost:3001")
    const initialState = { room: '', password: ''}
	const [room, setRoom] = useState(initialState)

    const handleChange = (e) => {
        setRoom({...room, [e.target.name]: e.target.value})
    }

    const joinRoom = () => {
        if(room !== "") {
            const r = room.room + " " + room.password
            socket.emit("join_room", r)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(room.room < 1) {
            Swal.fire({
                title: "Error",
                text: "Ingrese una sala!",
                icon: "error",
                background: "#1a1a1a",
                color: '#fff',
                timer: 3000,
            })
        } else if(room.password.length < 6) {
            Swal.fire({
                title: "Error",
                text: "La contraseña debe tener un minimo de 6 caracteres!",
                icon: "error",
                background: "#1a1a1a",
                color: '#fff',
                timer: 3000,
            })
        } else {
            joinRoom()
        }
    }
    
    return (
        <Modals isOpenModal={isOpenRoomModal} closeModal={closeRoomModal}>
				<div className="d-flex">
					    <h3 className="title">Unete a una partida</h3>
					    <div>
							<button onClick={closeRoomModal} style={{background: 'none', border: 'none', marginLeft: '25px', outline: 'none'}}>
								<TfiClose size={25} color="red" />
							</button>
						</div>
					</div>
                    <p style={{marginBottom: 0}}>Escribe los datos de la partida</p>
                        <form onSubmit={handleSubmit} noValidate>
                            <input type="text" autoComplete='off' name="room" className="form-control nameInput" placeholder="Escribe el nombre de la sala" onChange={handleChange} />
					        <input type="text" autoComplete='off' name="password" className="form-control nameInput" placeholder="Escribe la contraseña" onChange={handleChange} />
						    <button style={{borderRadius: '5px', textDecoration: 'none'}} className="btn btn-success mt-2" type="submit">Enviar</button>
					    </form>
        </Modals>
    )
}