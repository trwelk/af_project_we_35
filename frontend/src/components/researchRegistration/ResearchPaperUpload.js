import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputAdornment from '@material-ui/core/InputAdornment';
import { firebaseCon } from '../../base';

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: 20, 
        height:'50vh', 
        width:'80%', 
        margin:"20px auto",
        backgroundColor: '#6c7a89',
        opacity: 0.8
    },
    iconStyle: {
        backgroundColor: '#FFF',
        color: '#6c7a89'
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

//Event Handlers
const handleUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseCon.storage().ref();
    const fileRef = storageRef.child(file.name);
    const upload = fileRef.put(file);
    upload.on('state_changed',
    (snapshot) => {
        console.log(snapshot);
    },
    (error) => {
        console.log(error);
    },
    () => {
        storageRef.child(`${file.name}`).getDownloadURL()
        .then(url => {
            console.log(url);
        }),
        (error) => {
            console.log(error);
        }
    });
}

function ResearchPaperUpload () {
    const classes = useStyles();

    return(
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <h2 className={classes.textStyle}><AssignmentIcon fontSize="large"/> Research Paper Upload</h2>
                <TextField name="topic" label="Paper Topic" placeholder="Enter Topic" fullWidth required className={classes.fieldStyle}/>
                <TextField
                    className={classes.margin}
                    id="researchPaper"
                    label="Paper Upload"
                    type="file"
                    onChange={handleUpload}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="end">
                        <CloudUploadIcon />
                        </InputAdornment>
                    ),
                    }}
                />
            </Paper>
        </Grid>
    );
}

export default ResearchPaperUpload;