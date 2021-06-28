import React from 'react';
import Chart from '../components/dashboard/Chart';
import { makeStyles } from '@material-ui/core/styles';
import ResearchChart from '../components/dashboard/ResearchChart';

const useStyles = makeStyles((theme) => ({
    chartCover:{
        width:"45%"
    },
    chartContainer:{
        display:"flex",
        flexDirection:'row',
        justifyContent:"space-around",
        marginTop:"100px"
    }
}));

function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.chartContainer}>
            <div className={classes.chartCover}>
                <Chart/>
            </div>
            <div className={classes.chartCover}>
                <ResearchChart/>
            </div>
        </div>
    );
}

export default Dashboard;
