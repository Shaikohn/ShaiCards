import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        allUsers: [],
        filteredUsers: [],
        user: null,
    },
    reducers: {
        getUsers: (state, action) => {
            state.allUsers = action.payload
            state.filteredUsers = action.payload
        },
        getUser: (state, action) => {
            state.user = action.payload
        },
        userByName: (state, action) => {
            const orderUsersName = action.payload === "name_asc" ?
                state.filteredUsers.slice().sort(function(a, b) {
                    if(a.name.toLowerCase() < b.name.toLowerCase()) {return -1}
                    if(b.name.toLowerCase() < a.name.toLowerCase()) {return 1}
                    return 0;
                }) : 
                state.filteredUsers.slice().sort(function(a, b) {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {return -1}
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {return 1}
                    return 0;
        })
        const orderAllUsersName = action.payload === "name_asc" ?
                state.allUsers.slice().sort(function(a, b) {
                    if(a.name.toLowerCase() < b.name.toLowerCase()) {return -1}
                    if(b.name.toLowerCase() < a.name.toLowerCase()) {return 1}
                    return 0;
                }) : 
                state.allUsers.slice().sort(function(a, b) {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {return -1}
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {return 1}
                    return 0;
        })
        return {
            ...state,
            allUsers: orderAllUsersName,
            filteredUsers: orderUsersName
        }
        },
        clearUser: (state) => {
            state.user = null
            localStorage.removeItem('profile')
        },
        clearUserDetails: (state) => {
            state.user = {}
        },
    }
})

export const { getUsers, getUser, userByName, clearUser, clearUserDetails } = userSlice.actions
export default userSlice.reducer