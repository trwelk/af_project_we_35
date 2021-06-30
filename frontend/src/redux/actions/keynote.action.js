import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
import {useDispatch, useSelector} from 'react-redux'
import { UsbOutlined } from '@material-ui/icons'
const keynoteURL = "/KEYNOTE";


export const fetchKeynotesLoading = (data) =>  {
    return {
        type: ActionTypes.KEYNOTE_LOADING,
        payload: data
    }
}

export const fetchKeynotesSuccess = (data) =>  {
    return {
        type: ActionTypes.FETCH_KEYNOTE_SUCCESS,
        payload: data
    }
}


export const fetchKeynote = (dispatch) => {
        axios.get(AppConstants.REST_URL_HOST + keynoteURL)
            .then(response => {
                dispatch(fetchKeynotesSuccess(response.data))

            })
            .catch(error => {
                console.log(error)
            }) 
}

export const updatKeynote = (dispatch,keynote) => {
    axios.put(AppConstants.REST_URL_HOST + keynoteURL,keynote)
        .then(response => {
            dispatch(updatKeynoteSuccess({...response.data}))
        })
        .catch(error => {
            console.log(error)
        }) 
}

export const updatKeynoteSuccess = (data) =>  {
    return {
        type: ActionTypes.UPDATE_KEYNOTE_SUCCESS,
        payload: data
    }
}

//CREATE

export const creatKeynote = (data,dispatch) => {
    const keynote = data;
    axios.post(AppConstants.REST_URL_HOST + keynoteURL,keynote)
        .then(response => {
            const id = response;
            console.log(id)
                    dispatch(creatKeynoteSuccess(response.data))
        })

}

export const creatKeynoteSuccess = (data) => {
    return {
        type: ActionTypes.CREATE_KEYNOTE_SUCCESS  ,
        payload: data
    }
}

export const deletKeynoteSuccess = (data) =>  {
    return {
        type: ActionTypes.DELETE_KEYNOTE_SUCCESS ,
        payload: data
    }
}


export const deletKeynote = (dispatch,keynoteId) => {
        axios.delete(AppConstants.REST_URL_HOST + keynoteURL + '/' + keynoteId)
            .then(response => {
                console.log(response.data)
                dispatch(deletKeynoteSuccess(keynoteId))
            })
            .catch(error => {
                console.log(error)
            }) 
}


  