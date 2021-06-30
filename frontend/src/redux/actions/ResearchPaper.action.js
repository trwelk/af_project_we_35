import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
const researchPaperUrl = "/researchpapers";


export const submitResearchPaper = (data,dispatch) => {
    axios.post(AppConstants.REST_URL_HOST + researchPaperUrl,data)
        .then(response => {
            console.log(response);
        })
}

export const validateResearchPaper = (data,dispatch) =>  {
    if(data.topic == null || data.topic == ""){
     return "Topic Cannot be empty"
    }
    else{
      dispatch({
        type: ActionTypes.VALIDATE_RESEARCH_PAPER_SUCCESS,
        payload: data
      });
      return null;
    }
    
 }


