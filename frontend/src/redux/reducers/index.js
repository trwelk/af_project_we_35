import {combineReducers} from 'redux'
import { newsReducer } from './NewsReducer'
import { WorkshopReducer } from './WorkshopReducer'
import { WorkshopTagReducer } from './WorkshopTagReducer'
import { SuperUserReducer } from './SuperUserReducer'
import { ResearchReducer } from './ResearchReducer'

 const reducer = combineReducers({
    workshop:WorkshopReducer,
    workshopTag:WorkshopTagReducer,
    news:newsReducer,
    superuser: SuperUserReducer,
    research:ResearchReducer
})

export default reducer