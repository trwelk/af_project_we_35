import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { IconButton } from '@material-ui/core'
import { removeWorkshopSlot } from '../../redux/actions/Wokshop.action'

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
        display: 'flex',
        flexDirection: 'column'


    },
    btnCoverWoskshop: {
        height: "20%",
        display: "flex",
        justifyContent: "flex-end"
    },
    detailCover: {
        height: "80%",
        display: 'flex',
        flexDirection: 'column'
    },
    h2: {
        margin: "0px",
        fontFamily: "-webkit-pictograph",
        marginLeft: "5px",
        fontSize: "20px",
        fontWeight: 500
    },
    p: {
        margin: "0px",
        marginLeft: "5px",
        fontSize: "12px"

    },
    titleCover: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height:"40px"
    }

}));

function ScheduledAtom(props) {
    //*********************************************CONSTANTS************************************************************* */
    const dispatch = useDispatch();
    const classes = useStyles();
    const data = props.data

    //*********************************************Event Handlers************************************************************* */

    const handleRemoveWorkshop = (e) => {
        data.noOfHours = 0
        data.date = null
        data.startTime = null

        removeWorkshopSlot(dispatch, data)
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
                    <div className={classes.titleCover}>
                        <p className={classes.p}>Workshop Title: </p>
                        <h2 className={classes.h2}>{data.title}</h2>
                    </div>
                    <div className={classes.titleCover}>
                        <p className={classes.p}>Conductor: </p>
                        <h2 className={classes.h2}>{data.conductor}</h2>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default ScheduledAtom;
