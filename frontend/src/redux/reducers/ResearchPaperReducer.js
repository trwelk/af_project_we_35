import { ActionTypes } from "../constants/action-types";

const initialState = {
    researchPaper: [],
    finish: false,
    valid: false
}
export const ResearchPaperReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.VALIDATE_RESEARCH_PAPER_SUCCESS:
            return { researchPaper: payload, finish: true, valid: true };
        case ActionTypes.RESEARCH_PAPER_NEXT:
            return { researchPaper: payload, finish: false, valid: true };
        default:
            return state;
    }
}