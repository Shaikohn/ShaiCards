import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "cards",
    initialState: {
        allCards: [],
        cards: [],
        filteredCards: [],
        adminFilteredCards: [],
        ip: "",
    },
    reducers: {
        getAllCards: (state, action) => {
            state.allCards = action.payload
            state.adminFilteredCards = action.payload
        },
        getCards: (state, action) => {
            state.cards = action.payload
        },
        getFilteredCards: (state, action) => {
            state.filteredCards = action.payload
        },
        clearCards: (state) => {
            state.cards = []
            state.filteredCards = []
        },
        filterByType: (state, {payload}) => {
            const cardType = state.allCards
            const filter = payload === 'All' ? state.allCards : payload === 'Users' ? cardType.filter((q) => q.user?.length > 0) : cardType.filter(q => ((q.type) || []).includes(payload))
            return {
                ...state,
                adminFilteredCards: filter
            }
        },
        orderByLikes: (state, action) => {
            const orderQuestionLikes = action.payload === "menos_likes" ?
                state.adminFilteredQuestions.slice().sort(function(a, b) {
                    if(parseInt(a.likes) < parseInt(b.likes)) {return -1}
                    if(parseInt(b.likes < a.likes)) {return 1}
                    return 0;
                }) : 
                state.adminFilteredQuestions.slice().sort(function(a, b) {
                    if(parseInt(a.likes) > parseInt(b.likes)) {return -1}
                    if(parseInt(a.likes) > parseInt(b.likes)) {return 1}
                    return 0;
        })
        return {
            ...state,
            adminFilteredQuestions: orderQuestionLikes,
        }
        },
        orderByDislikes: (state, action) => {
            const orderCardDislikes = action.payload === "menos_dislikes" ?
                state.adminFilteredCards.slice().sort(function(a, b) {
                    if(parseInt(a.dislikes) < parseInt(b.dislikes)) {return -1}
                    if(parseInt(b.dislikes < a.dislikes)) {return 1}
                    return 0;
                }) : 
                state.adminFilteredCards.slice().sort(function(a, b) {
                    if(parseInt(a.dislikes) > parseInt(b.dislikes)) {return -1}
                    if(parseInt(a.dislikes) > parseInt(b.dislikes)) {return 1}
                    return 0;
        })
        return {
            ...state,
            adminFilteredCards: orderCardDislikes,
        }
        },
    }
})

export const { getAllCards, getCards, getFilteredCards, clearCards, filterByType, orderByLikes, orderByDislikes } = cardSlice.actions
export default cardSlice.reducer