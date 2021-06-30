import { ActionTypes } from "../constants/action-types";

const initialState = {
    keynote: [],
    isLoading: false,
    error: null
}
export const keynoteReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_KEYNOTE_SUCCESS:
            console.log(state, payload)
            return { ...state, keynote: payload }
        case ActionTypes.KEYNOTE_LOADING:
            return { ...state, isLoading: payload }
        case ActionTypes.CREATE_KEYNOTE_SUCCESS:
            return { ...state, keynote: [...state.keynote, payload] }
        case ActionTypes.UPDATE_KEYNOTE_SUCCESS:
            let oldkeynote = state.keynote
            let newkeynote = oldkeynote.filter(item => item.id != payload.id)
            newkeynote.push(payload)
            return { ...state, keynote: newkeynote }
        default:
            return state;
    }
}