import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
import {useDispatch, useSelector} from 'react-redux'
import { UsbOutlined } from '@material-ui/icons'
const newsURL = "/news";



export const fetchNewsSuccess = (data) =>  {
    return {
        type: ActionTypes.FETCH_NEWS_SUCCESS,
        payload: data
    }
}


export const fetchNews = (dispatch) => {
        axios.get(AppConstants.REST_URL_HOST + newsURL)
            .then(response => {
                dispatch(fetchNewsSuccess(response.data))

            })
            .catch(error => {
                console.log(error)
            }) 
}
