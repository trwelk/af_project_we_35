import {combineReducers} from 'redux'
import { WorkshopReducer } from './WorkshopReducer'

 const reducer = combineReducers({
    workshop:WorkshopReducer,
})

export default reducer