import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

// import { createWorkshop } from '../../redux/actions/Wokshop.action';
import Paper, { Button } from '@material-ui/core';
import { AppConstants } from '../../redux/constants/constants';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    formCover: {
        width: "50%",
        margin: 'auto'
    },

    field: {
        marginTop: "45px"
    },
}));


export default function ConferenceDetails() {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({ name: "", description: "", month: "",year:"",dates:[] });
    const [selectedTags, setSelectedTags] = React.useState([]);
    const dispatch = useDispatch();
    const classes = useStyles();
    const globalState = useSelector((state) => state);


    useEffect(()=>{
        axios.get(AppConstants.REST_URL_HOST + '/conference')
        .then(response => {
            setState(response.data[0])

        })
        .catch(error => {
            console.log(error)
        }) 
    },[])

    const handleClick = () => {
        axios.put(AppConstants.REST_URL_HOST + '/conference',state)
        .then(response => {
            
        })

    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log(state)
    }
    const handleTagChange = (event) => {
        setSelectedTags(event.target.value);
    };

    if(state){
    return (
        <div className={classes.formCover}>

            <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                type="text"
                fullWidth
                value={state.name}
                onChange={handleChange}
                className={classes.field}
            />
            <TextField
                autoFocus
                margin="dense"
                name="month"
                label="Month"
                type="text"
                fullWidth
                value={state.month}
                onChange={handleChange}
                className={classes.field}
            />
                <TextField
                autoFocus
                margin="dense"
                name="year"
                label="year"
                type="text"
                fullWidth
                value={state.year}
                onChange={handleChange}
                className={classes.field}
            />
            <TextField
                id="outlined-multiline-static"
                label="Description"
                name="description"
                fullWidth
                multiline
                value={state.description}
                onChange={handleChange}
                className={classes.field}
                rows={4}
                variant="outlined"
            />
            <br />
            <br />
            <br />
            <Button onClick={handleClick} variant="contained" color="secondary">
                Submit
            </Button>
        </div>
    );
    }
    else{
        return <div>
            <CircularProgress style={{ marginTop: "200px" }} />
        </div>
    }
}
