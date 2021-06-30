import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
const endUserUrl = "/enduser";


export const regEndUser = (data,dispatch) => {
    axios.post(AppConstants.REST_URL_HOST + endUserUrl,data)
        .then(response => {
            console.log(response);
        })

}

export const validateEndUserReg = (data,dispatch) =>  {
    if(data.email == null || data.email == ""){
     return "Email Cannot be empty"
    }
    else if(data.fName == null || data.fName == ""){
      return "First Name Cannot be empty"
    }
    else if(data.lName == null || data.lName == ""){
      return "Last Name Cannot be empty"
    }
    else if(data.institution == null || data.institution == ""){
      return "Institution Cannot be empty"
    }
    else if(data.contact == null || data.contact == ""){
      return "Contact Cannot be empty"
    }
    else{
      if(dispatch){
        dispatch({
          type: ActionTypes.VALIDATE_ENDUSER_SUCCESS,
          payload: data
        });
      }
      return null;
    }
    
 }


