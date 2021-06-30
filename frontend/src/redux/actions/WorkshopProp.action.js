import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
const workshopsUrl = "/workshops";


export const submitWorkshopProp = (data) => {
    console.log(data);
    axios.post(AppConstants.REST_URL_HOST + workshopsUrl,data)
        .then(response => {
            console.log(response);
        })
}

export const validateWorkshopProp = (data,dispatch) =>  {
    if(data.title == null || data.title == ""){
     return "Title Cannot be empty"
    }
    else if(data.description == null || data.description == ""){
      return "Description Cannot be empty"
     }
    else{
      dispatch({
        type: ActionTypes.VALIDATE_WORKSHOP_PROPOSAL_SUCCESS,
        payload: data
      });
      return null;
    }
    
 }


