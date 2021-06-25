import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import {Typography} from '@material-ui/core';
import { Paper } from '@material-ui/core';
import NewsCard from './NewsCard';
import {fetchNews} from '../../redux/actions/news.action'

const useStyles = makeStyles((theme) => ({
    root: {
        width:"100%",
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        width: "100%",
        margin:"auto",
        marginTop: "20px",
        display:'flex',
        justifyContent:'center'
    },
    prodImg: {
        height: "250px",
        width: "100%"
    },
    newGridItem:{
        display:'flex',
        justifyContent:'center'
    }
}));

function NewsList(props) {
    const [state,setState] = useState([])
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state);

    useEffect(() => {
        fetchNews(dispatch);
    },[])
    const classes = useStyles();
    const news = globalState ? globalState.news.news : null


    const cardUiLiist = news ? (news.map((item, index) => {
        return (<Grid className={classes.newGridItem} item xs={4} key={index}>
            <NewsCard news={item} />
        </Grid>
        )
    })) : <CircularProgress />

    return (
        <div>
            <Grid container className={classes.container} spacing={5}>
                {cardUiLiist}
            </Grid>
        </div>

    )
}



export default NewsList;