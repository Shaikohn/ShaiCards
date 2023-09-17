import axios from "axios"
import Swal from "sweetalert2"
import { getAllUnconfirmedCards } from "../slices/unconfirmedCardSlice"

export const getUnconfirmedCards = (setLoading) => async(dispatch) => {
    setLoading(true)
    try {
        const { data } = await axios.get('/unconfirmedCards/all')
        dispatch(getAllUnconfirmedCards(data))
        setLoading(false)
    }
    catch(e) {
        console.log(e)
        setLoading(false)
    }
}

export const addUnconfirmedCard = (cardData, closeCardModal, e, setCardData, initialState, setLoading) => async(dispatch) => {
    setLoading(true)
    try {
        const { data } = await axios.post(`/unconfirmedCards/addUnconfirmedCard`, cardData)
        dispatch(data)
        setLoading(false)
        closeCardModal()
        e.target.reset()
        setCardData(initialState)
        Swal.fire({
            title: "Éxito",
            text: "Tu carta será agregada pronto!",
            icon: "success",
            background: "#1a1a1a",
            color: '#fff',
            timer: 2000,
        })
    }
    catch(e) {
        Swal.fire({
            title: "Error",
            text: e.response.data.message,
            icon: "error",
            background: "#1a1a1a",
            color: '#fff',
            timer: 3000,
        })
        setLoading(false)
    }
}

export const deleteUnconfirmedQuestion = (_id, forceUpdate) => async() => {
    try {
        await axios.delete(`/unconfirmedCards/${_id}`)
        forceUpdate()
        Swal.fire({
            title: "Éxito",
            text: "Carta eliminada!",
            icon: "success",
            timer: 2000,
            background: "#1a1a1a",
            color: '#fff',
        });
    }
    catch(e) {
        console.log(e)
    }
}