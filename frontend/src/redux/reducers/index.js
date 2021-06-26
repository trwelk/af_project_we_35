import {combineReducers} from 'redux'
import { newsReducer } from './NewsReducer'
import { WorkshopReducer } from './WorkshopReducer'
import { WorkshopTagReducer } from './WorkshopTagReducer'
import { ResearchReducer } from './ResearchReducer'

 const reducer = combineReducers({
    workshop:WorkshopReducer,
    workshopTag:WorkshopTagReducer,
    news:newsReducer,
    research:ResearchReducer
})

export default reducer