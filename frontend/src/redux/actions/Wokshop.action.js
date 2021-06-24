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

export const updateWorkshop = (dispatch,stateObject) => {
        const {startTime,date,workshop,noOfHours} = stateObject
        workshop.startTime = startTime
        workshop.date = new Date(2021,5,date);
        workshop.noOfHours = noOfHours
        workshop.status = "approved"

        axios.patch(AppConstants.REST_URL_HOST + workshopUrl,workshop)
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