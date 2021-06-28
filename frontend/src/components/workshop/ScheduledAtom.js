import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { IconButton } from '@material-ui/core'
import {removeWorkshopSlot} from '../../redux/actions/Wokshop.action'

//********************************************Styling************************************************************* */

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    Paper: {
        backgroundColor: "#1798ffba",
        // '&:hover': {
        //     background: "#1798ffba",
        //  },
        height: "100px",
        borderRadius: "0px",
        display:'flex',
        flexDirection:'column'


    },
    btnCoverWoskshop:{
        height:"20%",
        display: "flex",
        justifyContent: "flex-end"
    },
    detailCover:{
        height:"80%"
    },
    h2:{
        margin:"0px",
        fontFamily:"-webkit-pictograph",
        marginLeft:"5px"
    },
    p:{
        margin:"0px",
        marginLeft:"5px"

    }

}));

function ScheduledAtom(props) {

    const dispatch = useDispatch();
    const classes = useStyles();
    const data = props.data

    //*********************************************Event Handlers************************************************************* */

    const handleRemoveWorkshop = (e) => {
        data.noOfHours = 0
        data.date = null
        data.startTime = null

        removeWorkshopSlot(dispatch,data)
    }

    //*********************************************Rendering elements************************************************************* */

    return (
        <div className={classes.root}>
            <Paper className={classes.Paper} variant="outlined" >
                <div className={classes.btnCoverWoskshop}>
                    <IconButton onClick={handleRemoveWorkshop} color="secondary" >
                        <RemoveCircleIcon />
                    </IconButton>
                </div>
                <div className={classes.detailCover}>
                    <h2 className={classes.h2}>{data.title}</h2>
                    <p className={classes.p}>{data.conductor}</p>
                </div>
            </Paper>
        </div>
    );
}

export default ScheduledAtom;
