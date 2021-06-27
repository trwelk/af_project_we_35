import { ActionTypes } from "../constants/action-types";

const initialState = {
    superUsers: [],
    isLoading: false,
    error: null
}
export const SuperUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_SUPERUSERS_SUCCESS:
            return { ...state, superUsers: payload }
        case ActionTypes.CREATE_SUPERUSER_SUCCESS:
        case ActionTypes.UPDATE_SUPERUSER_SUCCESS:
            let oldUsers = state.superUsers
            let newUsers = oldUsers.filter(item => item.id != payload.id)
            newUsers.push(payload)
            return { ...state, superUsers: newUsers }
        case ActionTypes.DELETE_SUPERUSER_SUCCESS:
            let outdatedUsers = state.superUsers
            let updatedUsers = outdatedUsers.filter(item => item.id != payload.id) 
            return { ...state, superUsers: updatedUsers }      
        default:
            return state;
    }
}