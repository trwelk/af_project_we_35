import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AssignWorkShopTimeForm from './AssignWorkShopTimeForm';

    const useStyles = makeStyles((theme) => ({
        root: {
            width:"100%",
        },
        Paper: {
            backgroundColor:"#1798ff2b",
            '&:hover': {
                background: "#1798ffba",
             },
             height:"100px",
             borderRadius: "0px",

            
        }
    }));
function ScheduleAtom(props) {


      const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper className={classes.Paper} variant="outlined"> 
            <AssignWorkShopTimeForm/>
        </Paper>
    </div>
  );
}

export default ScheduleAtom;
