import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import {Typography} from '@material-ui/core';
import { Paper } from '@material-ui/core';
import KeynoteCard from './KeynoteCard';
import { AppConstants } from '../../redux/constants/constants';

const useStyles = makeStyles((theme) => ({
    root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    display:'flex', 
    flexDirection:'row',
    justifyContent:'center',
    marginTop:"10px"
  },
  paperCover:{
      background:"grey",
      height:"600px",
      width:"30%"
  },
  hrClass:{
      width:"50px",
      margin:"auto",
    display: "block",
     height: "1px",
    border: "0",
    borderTop: "5px solid grey",
     padding: 0 ,
     marginTop:"5px"

  },
  keyNoteHomeHead:{
      marginTop:"60px"
  }
}));

function KeynoteList(props) {
    const [state,setState] = useState([])

    const dispatch = useDispatch();
    const classes = useStyles();
    const keynoteList = []

    useEffect(() => {
        axios.get(AppConstants.REST_URL_HOST + "/keynotes")
        .then(response => {
            console.log(response)
            setState(response.data)
        })
        .catch(error => {
            console.log(error)
            isLoading = false;
            
        }) 
    },[])

   if(state){
        for(let i = 0 ; i < 3 ; i++){
            keynoteList.push(
                <KeynoteCard key={i} data={state[i]}/>
            )
        }
   }

  return (
    <div>
              <Typography className={classes.keyNoteHomeHead} variant="h4" marked="center" align="center" component="h2">
        KEYNOTE SPEAKERS
      </Typography>
      <hr className={classes.hrClass}/>
    <Container className={classes.root} component="section">
        {keynoteList}            
    </Container>
    </div>
  );
}



export default KeynoteList;