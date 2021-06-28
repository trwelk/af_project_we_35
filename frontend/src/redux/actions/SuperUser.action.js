import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
const superuserUrl = "/superuser";


export const fetchSuperUsersLoading = (data) =>  {
    return {
        type: ActionTypes.SUPERUSERS_LOADING,
        payload: data
    }
}

export const fetchSuperUsersSuccess = (data) =>  {
    return {
        type: ActionTypes.FETCH_SUPERUSERS_SUCCESS,
        payload: data
    }
}

export const fetchSuperUsers = (dispatch) => {
    let isLoading = true;
        dispatch(fetchSuperUsersLoading(isLoading))
        axios.get(AppConstants.REST_URL_HOST + superuserUrl)
            .then(response => {
                dispatch(fetchSuperUsersSuccess(response.data))
                isLoading = false;
                dispatch(fetchSuperUsersLoading(isLoading))
            })
            .catch(error => {
                console.log(error)
                isLoading = false;
                dispatch(fetchSuperUsersLoading(isLoading))
            }) 
}

export const updateSuperUser = (dispatch,superuser) => {
    axios.put(AppConstants.REST_URL_HOST + superuserUrl,superuser)
        .then(response => {
            dispatch(updateSuperUserSuccess({...response.data}))
        })
        .catch(error => {
            console.log(error)
        }) 
}

export const updateSuperUserSuccess = (data) =>  {
    return {
        type: ActionTypes.UPDATE_SUPERUSER_SUCCESS,
        payload: data
    }
}

export const createSuperUser = (dispatch,superuser) => {
    axios.post(AppConstants.REST_URL_HOST + superuserUrl,superuser)
        .then(response => {
            dispatch(createSuperUserSuccess({...response.data}))
        })
        .catch(error => {
            console.log(error)
        }) 
}

export const createSuperUserSuccess = (data) =>  {
    return {
        type: ActionTypes.CREATE_SUPERUSER_SUCCESS,
        payload: data
    }
}

export const deleteSuperUser = (dispatch,superuser) => {
    console.log(superuser);
    axios.delete(AppConstants.REST_URL_HOST + superuserUrl + "/" + superuser.id)
        .then(response => {
            console.log(response);
            dispatch(deleteSuperUserSuccess(superuser))
        })
        .catch(error => {
            console.log(error)
        }) 
}

export const deleteSuperUserSuccess = (data) =>  {
    return {
        type: ActionTypes.DELETE_SUPERUSER_SUCCESS,
        payload: data
    }
}