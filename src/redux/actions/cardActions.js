import axios from "axios";
import { getAllCards } from "../slices/cardSliceSlice";
import Swal from "sweetalert2";

export const getTheCards = (setLoading) => async(dispatch) => {
    setLoading(true)
    try {
        const { data } = await axios.get('/cards/all')
        dispatch(getAllCards(data))
        setLoading(false)
    }
    catch(e) {
        console.log(e)
        setLoading(false)
    }
}

export const addLike = (_id) => async(dispatch) => {
    try {
        const { data } = await axios.patch(`/cards/${_id}/like`)
        dispatch(data)
    }
    catch(e) {
        console.log(e)
    }
}

export const addDislike = (_id) => async(dispatch) => {
    try {
        const { data } = await axios.patch(`/cards/${_id}/dislike`)
        dispatch(data)
    }
    catch(e) {
        console.log(e)
    }
}

export const addCard = (cardData, forceUpdate) => async(dispatch) => {
    try {
        const { data } = await axios.post(`/cards/addCard`, cardData)
        dispatch(data)
        forceUpdate()
        Swal.fire({
            title: "Éxito",
            text: "Carta subida!",
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
        console.log(e)
    }
}

export const addAdminQuestion = (cardData, forceUpdate, e, setCardData, initialState, setLoading) => async(dispatch) => {
    setLoading(true)
    try {
        const { data } = await axios.post(`/cards/addCardByAdmin`, cardData)
        dispatch(data)
        setLoading(false)
        e.target.reset()
        setCardData(initialState)
        forceUpdate()
        Swal.fire({
            title: "Éxito",
            text: "Carta subida!",
            icon: "success",
            background: "#1a1a1a",
            color: '#fff',
            timer: 2000,
        })
    }
    catch(e) {
        setLoading(false)
        Swal.fire({
            title: "Error",
            text: e.response.data.message,
            icon: "error",
            background: "#1a1a1a",
            color: '#fff',
            timer: 3000,
        })
    }
}

export const deleteCard = (_id, forceUpdate) => async() => {
    try {
        await axios.delete(`/cards/${_id}`)
        Swal.fire({
            title: "Éxito",
            text: 'Carta eliminada!',
            icon: "success",
            background: "#1a1a1a",
            color: '#fff',
            timer: 2000,
        })
        forceUpdate()
    }
    catch(e) {
        Swal.fire({
            title: "Error",
            text: 'Algo falló!',
            icon: "error",
            background: "#1a1a1a",
            color: '#fff',
            timer: 3000,
        })
    }
}