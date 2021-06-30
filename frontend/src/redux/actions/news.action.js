import axios from 'axios'
import {ActionTypes} from  '../constants/action-types'
import {AppConstants} from '../constants/constants'
import {useDispatch, useSelector} from 'react-redux'
import { UsbOutlined } from '@material-ui/icons'
const newsURL = "/news";


export const fetchNewsLoading = (data) =>  {
    return {
        type: ActionTypes.NEWS_LOADING,
        payload: data
    }
}

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

export const updateNews = (dispatch,news) => {
    axios.patch(AppConstants.REST_URL_HOST + newsURL,news)
        .then(response => {
            dispatch(updateNewsSuccess({...response.data}))
        })
        .catch(error => {
            console.log(error)
        }) 
}

export const updateNewsSuccess = (data) =>  {
    return {
        type: ActionTypes.UPDATE_NEWS_SUCCESS,
        payload: data
    }
}

//CREATE

export const createNews = (data,dispatch) => {
    const news = data;
    axios.post(AppConstants.REST_URL_HOST + newsURL,news)
        .then(response => {
            const id = response;
            console.log(id)
                    dispatch(createNewsSuccess(response.data))
        })

}

export const createNewsSuccess = (data) => {
    return {
        type: ActionTypes.CREATE_NEWS_SUCCESS  ,
        payload: data
    }
}

export const deleteNewsSuccess = (data) =>  {
    return {
        type: ActionTypes.DELETE_NEWS_SUCCESS ,
        payload: data
    }
}


export const deleteNews = (dispatch,newsId) => {
    console.log(newsId)
        axios.delete(AppConstants.REST_URL_HOST + newsURL + '/' + newsId)
            .then(response => {
                console.log(response.data)
                dispatch(deleteNewsSuccess(newsId))
            })
            .catch(error => {
                console.log(error)
            }) 
}

