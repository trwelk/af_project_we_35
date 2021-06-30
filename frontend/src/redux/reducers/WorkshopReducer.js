import { ActionTypes } from "../constants/action-types";

const initialState = {
    workshops: [],
    isLoading: false,
    error: null
}
export const WorkshopReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_WORKSHOPS_SUCCESS:
            console.log(state, payload)
            return { ...state, workshops: payload }
        case ActionTypes.WORKSHOPS_LOADING:
            return { ...state, isLoading: payload }
        case ActionTypes.CREATE_WORKSHOP_SUCCESS:
            return { ...state, workshops: [...state.workshops, payload] }
        case ActionTypes.UPDATE_WORKSHOP_SUCCESS:
            let oldWorkshops = state.workshops
            let newWorkshops = oldWorkshops.filter(item => item.id != payload.id)
            newWorkshops.push(payload)
            return { ...state, workshops: newWorkshops }
        case ActionTypes.DELETE_WORKSHOPS_SUCCESS:
            let remainingWorkshops = state.workshops.filter(item => item.id != payload)
            return { ...state, workshops: remainingWorkshops }
        default:
            return state;
    }
}