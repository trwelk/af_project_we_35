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
        case ActionTypes.CREATE_PRODUCTS_SUCCESS:
            return { ...state, products: [...state.products, payload] }
        case ActionTypes.REMOVE_FROM_PRODUCT:
            let products = state.products
            console.log("old prods", products, payload)

            let newProducts = products.filter(item => item.id != payload.id)
            console.log("new prods", newProducts)
            return { ...state, cartItems: newProducts }
        case ActionTypes.UPDATE_WORKSHOP_SUCCESS:
            let oldWorkshops = state.workshops
            let newWorkshops = oldWorkshops.filter(item => item.id != payload.id)
            newWorkshops.push(payload)
            return { ...state, workshops: newWorkshops }
        default:
            return state;
    }
}