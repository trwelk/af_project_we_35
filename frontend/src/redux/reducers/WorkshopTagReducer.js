import { ActionTypes } from "../constants/action-types";

const initialState = {
    workshopTags: [],
    isLoading: false,
    error: null
}
export const WorkshopTagReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_WORKSHOP_TAGS_SUCCESS:
            console.log(state, payload)
            return { ...state, workshopTags: payload }
        case ActionTypes.WORKSHOPS_TAGS_LOADING:
            return { ...state, isLoading: payload }
        default:
            return state;
    }
}