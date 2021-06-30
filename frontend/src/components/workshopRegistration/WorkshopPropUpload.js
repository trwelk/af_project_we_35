import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputAdornment from '@material-ui/core/InputAdornment';
import { firebaseCon } from '../../base';
import { useDispatch, useSelector } from 'react-redux';
import { validateWorkshopProp, submitWorkshopProp } from '../../redux/actions/WorkshopProp.action';
import { regEndUser } from '../../redux/actions/EndUser.action';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: 20, 
        height:'50vh', 
        width:'80%', 
        margin:"20px auto",
        backgroundColor: '#ff3366',
        opacity: 0.8
    },
    iconStyle: {
        backgroundColor: '#FFF',
        color: '#ff3366'
    },
    textStyle: {
        color: '#FFF'
    },
    fieldStyle: {
        margin:"10px auto",
        color: '#000'   
    },
    margin: {
        margin: theme.spacing(1),
    }
}));


function WorkshopPropUpload () {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [state, setState] = React.useState({ title: "", description: "", conductor: "", email: ""});
    const [fileState, setFileState] = React.useState({ fileUpload: null, file: null});
    const globalState = useSelector((state) => state);
    const storageRef = firebaseCon.storage().ref();
    let history = useHistory();

    if(globalState.enduser.valid && state.conductor == ""){
        const conductor = globalState.enduser.enduser;
        setState({ title: "", conductor: conductor.fName, email: conductor.email});
    }

    //Event handlers
    const handleFinish = () => {
        let result = validateWorkshopProp(state,dispatch);
        if(result){
            console.log(result);
            // setFail({state: true, message: result})
        } else {
            fileState.fileUpload.on('state_changed',
            (snapshot) => {
                console.log(snapshot);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storageRef.child(`${fileState.file.name}`).getDownloadURL()
                .then(url => {
                    regEndUser({
                        email: state.email, 
                        type: "researcher", 
                        contact: globalState.enduser.enduser.contact, 
                        name: globalState.enduser.enduser.fName + " " + globalState.enduser.enduser.lName,
                        institution: globalState.enduser.enduser.institution},dispatch);
                    submitWorkshopProp({
                        title: state.title,
                        description: state.description,
                        conductor: state.conductor,
                        email: state.email,
                        link: url
                    });
                }).then(() => {
                    history.push('/');
                }),
                (error) => {
                    console.log(error);
                }
            });
        }
    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleUpload = (e) => {
        const file = e.target.files[0];
        const fileRef = storageRef.child(file.name);
        const upload = fileRef.put(file);
        setFileState({ fileUpload: upload, file: file});
    }

    return(
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <h2 className={classes.textStyle}><AssignmentIcon fontSize="large"/> Workshop Proposal Upload</h2>
                <TextField name="title" label="Workshop Title" placeholder="Enter Title" onChange={handleChange} fullWidth required className={classes.fieldStyle}/>
                <TextField name="description" label="Descriptiion" placeholder="Enter Descriptiion" onChange={handleChange} fullWidth required className={classes.fieldStyle}/>
                <TextField
                    className={classes.margin}
                    id="workshopProp"
                    label="Proposal Upload"
                    type="file"
                    onChange={handleUpload}
                    accept=".pdf"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="end">
                        <CloudUploadIcon />
                        </InputAdornment>
                    ),
                    }}
                />
            </Paper>
            <Button
                variant="contained"
                color="primary"
                onClick={handleFinish}
                className={classes.margin}
              >
                Finish
            </Button>
        </Grid>
    );
}

export default WorkshopPropUpload;