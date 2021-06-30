import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: 20, 
        height:'70vh', 
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


function ResearcherForm () {
    const classes = useStyles();

    return(
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <h2 className={classes.textStyle}><AssignmentIndIcon fontSize="large"/> Researcher Details </h2>
                <TextField name="email" label="Email" placeholder="Enter Email" fullWidth required className={classes.fieldStyle}/>
                <TextField name="fName" label="First Name" placeholder="Enter First Name" fullWidth required className={classes.fieldStyle}/>
                <TextField name="lName" label="Last Name" placeholder="Enter Last Name" fullWidth required className={classes.fieldStyle}/>
                <TextField name="institution" label="Institution" placeholder="Enter Institution" fullWidth required className={classes.fieldStyle}/>
                <TextField type="number" name="contact" label="Contact" placeholder="Enter Contact Number" fullWidth required className={classes.fieldStyle}/>
            </Paper>
        </Grid>
    );
}

export default ResearcherForm;