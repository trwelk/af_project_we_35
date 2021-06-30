import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { updateWorkshop } from '../../redux/actions/Wokshop.action'
import { AppConstants } from '../../redux/constants/constants'

//*********************************************Styling************************************************* */
const useStyles = makeStyles((theme) => ({
    dialog: {
        height: "600px",
    },
    field: {
        marginTop: "45px"
    },
    Paper: {
        backgroundColor: "#1798ff2b",
        '&:hover': {
            background: "#1798ffba",
        },
        height: "100px",
        borderRadius: "0px",
    }
}));

export const allocateSlot = (workshop,stat) => {
    workshop.startTime = stat.startTime
    workshop.noOfHours = stat.noOfHours
    workshop.state = AppConstants.STATE_APPROVED
    return workshop
}

export default function scheduleAtom(props) {
    const globalState = useSelector((state) => state);
    const dispatch = useDispatch();
    const { startTime, date } = props
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({ startTime: startTime, date: date, workshop: {}, noOfHours: 0 });
    const classes = useStyles();

    let wShops = globalState.workshop.workshops
    let workshops = []
    
    wShops.forEach(element => {
        if (element.state == AppConstants.STATE_REQUESTED) {
            workshops.push(element)
        }
    })
   
//*********************************************Event Handlers************************************************************* */

    // Event handlers
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

 
    const handleSubmit = () => {
        let workshop  = allocateSlot(state.workshop,state)
        // let workshop  = state.workshop
        // workshop.startTime = state.startTime
        // workshop.noOfHours = state.noOfHours
        // workshop.state = AppConstants.STATE_APPROVED
        workshop.date = new Date(2021,5,date);

        updateWorkshop(dispatch, workshop)
    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log(state)

    }

//*********************************************Rendering elements************************************************************* */


    return (
        <div>
            <Paper onClick={handleClickOpen} className={classes.Paper} variant="outlined">
                {props.timeSlot}
            </Paper>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Products</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <DialogContentText>
                        Add Product Details
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="startTime"
                        label="Start Time"
                        type="number"
                        fullWidth
                        value={startTime}
                        className={classes.field}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="noOfHours"
                        label="No Of Hours"
                        type="number"
                        fullWidth
                        onChange={handleChange}
                        className={classes.field}
                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        name="workshop"
                        value={state.workshop ? state.workshop.title : ""}
                        onChange={handleChange}
                        helperText="Please select your currency"
                        variant="outlined"
                    >
                        {workshops.map((workshop) => (
                            <MenuItem key={workshop.id} value={workshop}>
                                {workshop.title}
                            </MenuItem>
                        ))}
                    </TextField>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
