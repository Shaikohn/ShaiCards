import axios from "axios";
import { getAllQuestions, getFilteredQuestions, getQuestions, getUserIp } from "../slices/questionSlice";
import Swal from "sweetalert2";

export const getAllTheQuestions = (setLoading) => async(dispatch) => {
    setLoading(true)
    try {
        const { data } = await axios.get('/questions/all')
        dispatch(getAllQuestions(data))
        setLoading(false)
    }
    catch(e) {
        console.log(e)
        setLoading(false)
    }
}

export const getPersonales = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/personales')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getProfundas = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/profundas')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getCasuales = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/casuales')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getPicantes = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/picantes')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getYoNuncaNunca = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/yoNuncaNunca')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getQuePrefieresSituaciones = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/quePrefieresSituaciones')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getQuePrefieresCosas = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/quePrefieresCosas')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getAnecdota = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/anecdota')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getSoyMasDe = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/soyMasDe')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getTopTres = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/top')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getRetoOShot = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/retoOShot')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getRetos = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/retos')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getQuienDeTusAmigosEs = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/quienDeTusAmigos')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getMatarCogerOCasarse = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/matarCogerOCasarse')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getQuePrefieresBizarro = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/quePrefieresBizarro')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const getfrasesQueSePuedenDecirEnElSexoY = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/questions/frasesQueSePuedenDecirEnElSexoY')
        dispatch(getQuestions(data.questions))
        dispatch(getFilteredQuestions(data.filteredQuestions))
    }
    catch(e) {
        console.log(e)
    }
}

export const addLike = (_id, page, max, setPage, objectIp) => async(dispatch) => {
    try {
        const { data } = await axios.patch(`/questions/${_id}/like`, objectIp)
        dispatch(data)
        if(page < max) {
            setPage(page + 1)
        }
    }
    catch(e) {
        if(page < max) {
            setPage(page + 1)
        }
    }
}

export const addDislike = (_id, page, max, setPage, objectIp) => async(dispatch) => {
    try {
        const { data } = await axios.patch(`/questions/${_id}/dislike`, objectIp)
        dispatch(data)
        if(page < max) {
            setPage(page + 1)
        }
    }
    catch(e) {
        if(page < max) {
            setPage(page + 1)
        }
    }
}

export const addQuestion = (questionData, forceUpdate) => async(dispatch) => {
    try {
        const { data } = await axios.post(`/questions/nuevaPregunta`, questionData)
        dispatch(data)
        forceUpdate()
        Swal.fire({
            title: "Éxito",
            text: "Pregunta subida!",
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

export const addAdminQuestion = (questionData, forceUpdate, e, setQuestionData, initialState, setLoading) => async(dispatch) => {
    setLoading(true)
    try {
        const { data } = await axios.post(`/questions/nuevaPreguntaAdmin`, questionData)
        dispatch(data)
        setLoading(false)
        e.target.reset()
        setQuestionData(initialState)
        forceUpdate()
        Swal.fire({
            title: "Éxito",
            text: "Pregunta subida!",
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

export const deleteQuestion = (_id, forceUpdate) => async() => {
    try {
        await axios.delete(`/questions/${_id}`)
        Swal.fire({
            title: "Éxito",
            text: 'Pregunta eliminada!',
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

export const deleteUserQuestion = (_id, forceUpdate, user) => async() => {
    try {
        await axios.delete(`/questions/${user}/${_id}`)
        Swal.fire({
            title: "Éxito",
            text: 'Pregunta eliminada!',
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

export const getIp = () => async(dispatch) => {
    try {
        axios.get('https://api.ipify.org?format=json')
            .then((res) => dispatch(getUserIp(res.data.ip)))
    }
    catch(e) {
        console.log(e)
    }
}