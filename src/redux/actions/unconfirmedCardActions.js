import axios from "axios"
import Swal from "sweetalert2"
import { getAllUnconfirmedQuestions } from "../slices/unconfirmedQuestionSlice"

export const getUnconfirmedQuestions = (setLoading) => async(dispatch) => {
    setLoading(true)
    try {
        const { data } = await axios.get('/unconfirmedQuestions/all')
        dispatch(getAllUnconfirmedQuestions(data))
        setLoading(false)
    }
    catch(e) {
        console.log(e)
        setLoading(false)
    }
}

export const addUnconfirmedQuestion = (questionData, closeQuestionModal, e, setQuestionData, initialState, setLoading) => async(dispatch) => {
    setLoading(true)
    try {
        const { data } = await axios.post(`/unconfirmedQuestions/nuevaPreguntaSinConfirmar`, questionData)
        dispatch(data)
        setLoading(false)
        closeQuestionModal()
        e.target.reset()
        setQuestionData(initialState)
        Swal.fire({
            title: "Éxito",
            text: "Tu pregunta será agregada pronto!",
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
        await axios.delete(`/unconfirmedQuestions/${_id}`)
        forceUpdate()
        Swal.fire({
            title: "Éxito",
            text: "Pregunta eliminada!",
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