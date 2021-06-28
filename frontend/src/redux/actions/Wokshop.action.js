import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
import {useDispatch, useSelector} from 'react-redux'
import { UsbOutlined } from '@material-ui/icons'
const workshopUrl = "/workshops";


export const fetchWorkshopsLoading = (data) =>  {
    return {
        type: ActionTypes.WORKSHOPS_LOADING,
        payload: data
    }
}

export const fetchWorkshopsSuccess = (data) =>  {
    return {
        type: ActionTypes.FETCH_WORKSHOPS_SUCCESS,
        payload: data
    }
}


export const fetchWorkshops = (dispatch) => {
    let isLoading = true;
        dispatch(fetchWorkshopsLoading(isLoading))
        axios.get(AppConstants.REST_URL_HOST + workshopUrl)
            .then(response => {
                console.log(response.data)
                dispatch(fetchWorkshopsSuccess(response.data))
                isLoading = false;
                dispatch(fetchWorkshopsLoading(isLoading))
            })
            .catch(error => {
                console.log(error)
                isLoading = false;
                dispatch(fetchWorkshopsLoading(isLoading))
            }) 
}

export const fetchWorkshopForTags = (dispatch,category) => {
    console.log(category)
    axios.get("http://localhost:9090/workshoptags/" +category.id + "/workshops")
    .then(response => {
        dispatch(fetchWorkshopsSuccess(response.data))
    })
    .catch(error => {
        isLoading = false;
        dispatch(fetchWorkshopsLoading(isLoading))
    }) 
}

export const updateWorkshop = (dispatch,workshop) => {
        console.log(workshop)
        axios.patch(AppConstants.REST_URL_HOST + workshopUrl,workshop)
            .then(response => {
                dispatch(updateWorkshopSuccess({...response.data}))
            })
            .catch(error => {
                console.log(error)
            }) 
}


export const removeWorkshopSlot = (dispatch,workshop) => {
    let workshopObj = workshop
    workshopObj.state = AppConstants.STATE_REQUESTED

    axios.patch(AppConstants.REST_URL_HOST + workshopUrl,workshopObj)
        .then(response => {
            dispatch(updateWorkshopSuccess({...response.data}))
        })
        .catch(error => {
            // console.log(error)
        }) 
}

export const updateWorkshopSuccess = (data) =>  {
    return {
        type: ActionTypes.UPDATE_WORKSHOP_SUCCESS,
        payload: data
    }
}


//CREATE

export const createWorkshop = (data,dispatch) => {
    const workshop = data;
    axios.post(AppConstants.REST_URL_HOST + workshopUrl,workshop)
        .then(response => {
            const id = response;
            console.log(id)
                    dispatch(createWorkshopSuccess(response.data))
        })

}

export const createWorkshopSuccess = (data) => {
    return {
        type: ActionTypes.CREATE_WORKSHOP_SUCCESS  ,
        payload: data
    }
}



export const deleteWorkshopsSuccess = (data) =>  {
    return {
        type: ActionTypes.DELETE_WORKSHOPS_SUCCESS,
        payload: data
    }
}


export const deleteWorkshop = (dispatch,workshopId) => {
    console.log(workshopId)
        axios.delete(AppConstants.REST_URL_HOST + workshopUrl + '/' + workshopId)
            .then(response => {
                console.log(response.data)
                dispatch(deleteWorkshopsSuccess(workshopId))
            })
            .catch(error => {
                console.log(error)
            }) 
}