import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
import {useDispatch, useSelector} from 'react-redux'
import { UsbOutlined } from '@material-ui/icons'
const workshopTagUrl = "/workshoptags";


export const fetchWorkshopTagsLoading = (data) =>  {
    return {
        type: ActionTypes.WORKSHOPS_TAGS_LOADING,
        payload: data
    }
}

export const fetchWorkshopTagSuccess = (data) =>  {
    return {
        type: ActionTypes.FETCH_WORKSHOP_TAGS_SUCCESS,
        payload: data
    }
}


export const fetchWorkshopTags = (dispatch) => {
    let isLoading = true;
        dispatch(fetchWorkshopTagsLoading(isLoading))
        axios.get(AppConstants.REST_URL_HOST + workshopTagUrl)
            .then(response => {
                console.log(response.data)
                dispatch(fetchWorkshopTagSuccess(response.data))
                isLoading = false;
                dispatch(fetchWorkshopTagsLoading(isLoading))
            })
            .catch(error => {
                console.log(error)
                isLoading = false;
                dispatch(fetchWorkshopTagsLoading(isLoading))
            }) 
}

