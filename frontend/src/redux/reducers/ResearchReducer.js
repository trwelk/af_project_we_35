import { ActionTypes } from "../constants/action-types";

const initialState = {
    researchPapers: [],
    isLoading: false,
    researchLink:"",
    error: null
}
export const ResearchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_RESEARCH_SUCCESS:
            console.log(state, payload)
            return { ...state, researchPapers: payload }
        case ActionTypes.RESEARCH_LOADING:
            return { ...state, isLoading: payload }
        case ActionTypes.CREATE_RESEARCH_SUCCESS:
            return{ ...state, researchPapers: [...state.researchPapers, payload]}
        case ActionTypes.UPDATE_RESEARCH_SUCCESS:
            let oldResearch = state.researchPapers
            let newResearch = oldResearch.filter(item => item.id != payload.id)
            newResearch.push(payload)
            return { ...state, researchPapers: newResearch }
        case ActionTypes.DELETE_RESEARCH_SUCCESS:
            let remainingData = state.researchPapers.filter(item => item.id != payload)
            return { ...state, researchPapers: remainingData }
        case ActionTypes.SET_RESEARCH_LINK:
            return{...state,researchLink:payload}
        default:
            return state;
    }
}