import axios from "axios";
import Swal from "sweetalert2";
/* import Swal from "sweetalert2"; */
export const AUTH = "AUTH";
export const LOGOUT = "LOGOUT";

/* const API = axios.create({baseURL: process.env.REACT_APP_BASE_URL}) */
const API = axios.create({baseURL: "http://localhost:3001/"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const signGoogle = (googleUser, closeModal, openNickNameModal, setLoading, navigateTo) => async(dispatch) => {
    setLoading(true)
    try {
        const { data } = await API.post("/user/googleUser", googleUser);
        dispatch({ type: AUTH, data });
        if(data.newUser) {
            closeModal()
            setLoading(false)
            openNickNameModal()
        } else {
            closeModal()
            setLoading(false)
            navigateTo("/")
        }
    } catch (e) {
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