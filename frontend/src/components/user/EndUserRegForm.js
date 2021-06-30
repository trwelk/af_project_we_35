import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useDispatch } from 'react-redux';
import { validateEndUserReg } from '../../redux/actions/EndUser.action';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: 20, 
        height:'70vh', 
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
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function EndUserRegForm () {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [state, setState] = React.useState({ email: "", fName: "", lName: "", institution: "", contact: ""});
    const [fail, setFail] = React.useState({state: false, message: ""});

    //Event handlers
    const handleNext = () => {
        let result = validateEndUserReg(state,dispatch);
        if(result){
            setFail({state: true, message: result})
        }
    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setFail({state: false, message: ""})
      };

    return(
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <h2 className={classes.textStyle}><AssignmentIndIcon fontSize="large"/> User Details </h2>
                <TextField name="email" label="Email" placeholder="Enter Email" onChange={handleChange} fullWidth required className={classes.fieldStyle}/>
                <TextField name="fName" label="First Name" placeholder="Enter First Name" onChange={handleChange} fullWidth required className={classes.fieldStyle}/>
                <TextField name="lName" label="Last Name" placeholder="Enter Last Name" onChange={handleChange} fullWidth required className={classes.fieldStyle}/>
                <TextField name="institution" label="Institution" placeholder="Enter Institution" onChange={handleChange} fullWidth required className={classes.fieldStyle}/>
                <TextField type="number" name="contact" label="Contact" placeholder="Enter Contact Number" onChange={handleChange} fullWidth required className={classes.fieldStyle}/>
            </Paper>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.margin}
              >
                Next
            </Button>
            <Snackbar open={fail.state} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {fail.message}
                </Alert>
            </Snackbar>
        </Grid>
    );
}

export default EndUserRegForm;