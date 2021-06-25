import { ActionTypes } from "../constants/action-types";

const initialState = {
    news: [],
    isLoading: false,
    error: null
}
export const newsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_NEWS_SUCCESS:
            console.log(state, payload)
            return { ...state, news: payload }
        case ActionTypes.NEWS_LOADING:
            return { ...state, isLoading: payload }
        case ActionTypes.CREATE_NEWS_SUCCESS:
            return { ...state, news: [...state.news, payload] }
        case ActionTypes.UPDATE_NEWS_SUCCESS:
            let oldnews = state.news
            let newnews = oldnews.filter(item => item.id != payload.id)
            newnews.push(payload)
            return { ...state, news: newnews }
        default:
            return state;
    }
}