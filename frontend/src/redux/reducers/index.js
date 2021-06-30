import {combineReducers} from 'redux'
import { newsReducer } from './NewsReducer'
import { WorkshopReducer } from './WorkshopReducer'
import { WorkshopTagReducer } from './WorkshopTagReducer'
import { SuperUserReducer } from './SuperUserReducer'
import { AuthReducer } from './AuthReducer'
import { ResearchReducer } from './ResearchReducer'
import { keynoteReducer } from './KeynoteReducer'

 const reducer = combineReducers({
    workshop:WorkshopReducer,
    workshopTag:WorkshopTagReducer,
    news:newsReducer,
    superuser: SuperUserReducer,
    auth: AuthReducer,
    research:ResearchReducer,
    keynote:keynoteReducer
})

export default reducer