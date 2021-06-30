import { ActionTypes } from "../constants/action-types";

const initialState = {
    workshopProp: null,
    finish: false,
    valid: false
}
export const WorkshopPropReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.VALIDATE_WORKSHOP_PROPOSAL_SUCCESS:
            return { workshopProp: payload, finish: true, valid: true };
        case ActionTypes.WORKSHOP_PROPOSAL_NEXT:
            return { workshopProp: payload, finish: false, valid: true };
        default:
            return state;
    }
}