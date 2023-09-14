import { createSlice } from "@reduxjs/toolkit";

export const unconfirmedCardSlice = createSlice({
    name: "unconfirmedCards",
    initialState: {
        allUnconfirmedCards: [],
        filteredUnconfirmedCards: [],
    },
    reducers: {
        getAllUnconfirmedCards: (state, action) => {
            state.allUnconfirmedCards = action.payload
            state.filteredUnconfirmedCards = action.payload
        },
        filterUnconfirmedByType: (state, {payload}) => {
            const cardType = state.allUnconfirmedCards
            const filter = payload === 'All' ? state.allUnconfirmedCards : cardType.filter(q => ((q.type) || []).includes(payload))
            return {
                ...state,
                filteredUnconfirmedCards: filter
            }
        },
    }
})

export const { getAllUnconfirmedCards, filterUnconfirmedByType} = unconfirmedCardSlice.actions
export default unconfirmedCardSlice.reducer