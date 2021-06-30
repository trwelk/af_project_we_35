import { ActionTypes } from "../constants/action-types";

const initialState = {
    enduser: null,
    next: false,
    valid: false
}
export const EndUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.VALIDATE_ENDUSER_SUCCESS:
            console.log(payload);
            return { enduser: payload, next: true, valid: true };
        case ActionTypes.ENDUSER_REGISTER_NEXT:
            console.log(payload);
            return { enduser: state.enduser, next: false, valid: true };
        default:
            return state;
    }
}