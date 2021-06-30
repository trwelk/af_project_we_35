import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
import {useDispatch, useSelector} from 'react-redux'
import { UsbOutlined } from '@material-ui/icons'
const newsURL = "/news";


export const fetchNewsTagsLoading = (data) =>  {
    return {
        type: ActionTypes.WORKSHOPS_TAGS_LOADING,
        payload: data
    }
}

export const fetchNewsTagSuccess = (data) =>  {
    return {
        type: ActionTypes.FETCH_NEWS_TAGS_SUCCESS,
        payload: data
    }
}


export const fetchNewsTags = (dispatch) => {
    let isLoading = true;
        dispatch(fetchNewsTagsLoading(isLoading))
        axios.get(AppConstants.REST_URL_HOST + "/newstags")
            .then(response => {
                console.log(response.data)
                dispatch(fetchNewsTagSuccess(response.data))
                isLoading = false;
                dispatch(fetchNewsTagsLoading(isLoading))
            })
            .catch(error => {
                console.log(error)
                isLoading = false;
                dispatch(fetchNewsTagsLoading(isLoading))
            }) 
}

