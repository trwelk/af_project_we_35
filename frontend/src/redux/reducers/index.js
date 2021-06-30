import {combineReducers} from 'redux'
import { newsReducer } from './NewsReducer'
import { WorkshopReducer } from './WorkshopReducer'
import { WorkshopTagReducer } from './WorkshopTagReducer'
import { SuperUserReducer } from './SuperUserReducer'
import { AuthReducer } from './AuthReducer'
import { ResearchReducer } from './ResearchReducer'
import { keynoteReducer } from './KeynoteReducer'
import { EndUserReducer } from './EndUserReducer'
import { ResearchPaperReducer } from './ResearchPaperReducer'
import { WorkshopPropReducer } from './WorkshopPropReducer'

 const reducer = combineReducers({
    workshop:WorkshopReducer,
    workshopTag:WorkshopTagReducer,
    news:newsReducer,
    superuser: SuperUserReducer,
    auth: AuthReducer,
    keynote:keynoteReducer,
    enduser: EndUserReducer,
    research:ResearchReducer,
    researchPaper: ResearchPaperReducer,
    workshopProp: WorkshopPropReducer
})

export default reducer