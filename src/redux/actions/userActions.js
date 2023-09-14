import axios from "axios";
import Swal from "sweetalert2";
/* import Swal from "sweetalert2"; */
import { getUser, getUsers } from "../slices/userSlice";

export const getAllUsers = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/user/users/all')
        dispatch(getUsers(data))
    }
    catch(e) {
        console.log(e)
    }
}

export const getUserById = (_id) => async(dispatch) => {
    try {
        const { data } = await axios.get(`/user/user/${_id}`)
        dispatch(getUser(data))
    }
    catch(e) {
        console.log(e)
    }
}

export const createNickName = (_id, nickName, closeNickNameModal, navigateTo, setLoading) => async(dispatch) => {
    setLoading(true) 
    try {
        const { data } = await axios.patch(`/user/editUserNickName/${_id}`, nickName)
        dispatch(getUser(data))
        navigateTo("/")
        Swal.fire({
            title: "Éxito",
            text: "Nombre creado!",
            icon: "success",
            timer: 2000,
            background: "#1a1a1a",
            color: '#fff',
        })
        setLoading(false)
        closeNickNameModal()
        /* forceUpdate() */
    }
    catch(e) {
        Swal.fire({
            title: "Error",
            text: e.response.data.message,
            icon: "error",
            timer: 2000,
            background: "#1a1a1a",
            color: '#fff',
        })
        setLoading(false)
    }
}