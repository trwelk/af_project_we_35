import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
import {useDispatch, useSelector} from 'react-redux'
import { UsbOutlined } from '@material-ui/icons'
const researchURL = "/researchpapers";



export const fetchResearchSuccess = (data) =>  {
    return {
        type: ActionTypes.FETCH_RESEARCH_SUCCESS,
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

