import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles((theme) => ({
        root: {
            width:"100%",
        },
        Paper: {
            backgroundColor:"#1798ffba",
            // '&:hover': {
            //     background: "#1798ffba",
            //  },
             height:"100px",
             borderRadius: "0px"

            
        }
    }));
function ScheduledAtom(props) {


      const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper className={classes.Paper} variant="outlined" > 
            {props.data}
        </Paper>
    </div>
  );
}

export default ScheduledAtom;
