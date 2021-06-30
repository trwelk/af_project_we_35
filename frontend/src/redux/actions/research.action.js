import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
import {useDispatch, useSelector} from 'react-redux'
import { UsbOutlined } from '@material-ui/icons'
const researchURL = "/researchpapers";


export const createResearch = (data,dispatch) => {
    const research = data;
    axios.post(AppConstants.REST_URL_HOST + researchURL,Research)
        .then(response => {
            const id = response;
            console.log(id)
                    dispatch(createResearchSuccess(response.data))
        })

}

export const fetchResearchSuccess = (data) =>  {
    return {
        type: ActionTypes.FETCH_RESEARCH_SUCCESS,
        payload: data
    }
}

export const updateResearchLink = (data) =>  {
    return {
        type: ActionTypes.SET_RESEARCH_LINK,
        payload: data
    }
}

export const fetchResearch = (dispatch) => {
        axios.get(AppConstants.REST_URL_HOST + researchURL)
            .then(response => {
                dispatch(fetchResearchSuccess(response.data))

            })
            .catch(error => {
                console.log(error)
            }) 
}



export const updateResearch = (dispatch,research) => {
    axios.put(AppConstants.REST_URL_HOST + researchURL,research)
        .then(response => {
            dispatch(updateResearchSuccess({...response.data}))
        })
        .catch(error => {
            // console.log(error)
        }) 
}

export const updateResearchSuccess = (data) =>  {
    console.log(data)
    return {
        type: ActionTypes.UPDATE_RESEARCH_SUCCESS,
        payload: data
    }
}


export const validateResearchObj = (data) =>  {
    if(data.paperLink == null || data.paperLink == ""){
     return "Field paperLink Cannot be empty"
   }
   else if(data.paperUploader == null || data.paperUploader == ""){
     return "Field paperUploader Cannot be empty"
   }
   else if(data.paperTopic == null || data.paperTopic == ""){
     return "Field paperTopic Cannot be empty"
   }
   else if(data.email == null || data.email == ""){
     return "Field Email Cannot be empty"
   }
   else if(data.id == null || data.id == ""){
    return "Field id Cannot be empty"
  }
   else
   return null;
 }

 

 export const deleteResearchSuccess = (data) =>  {
    return {
        type: ActionTypes.DELETE_RESEARCH_SUCCESS ,
        payload: data
    }
}


export const deleteResearch = (dispatch,ResearchId) => {
        axios.delete(AppConstants.REST_URL_HOST + researchURL + '/' + ResearchId)
            .then(response => {
                dispatch(deleteResearchSuccess(ResearchId))
            })
            .catch(error => {
                console.log(error)
            }) 
}


export const createResearchSuccess = (data) => {
    return {
        type: ActionTypes.CREATE_RESEARCH_SUCCESS  ,
        payload: data
    }
}