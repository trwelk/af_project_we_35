import React from 'react';
import Chart from '../components/dashboard/Chart';
import { makeStyles } from '@material-ui/core/styles';
import ResearchChart from '../components/dashboard/ResearchChart';
import AdminNavbar from '../components/views/AdminNavBar';

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
        <div>
            <AdminNavbar/>
        <div style={{ padding: "20px",marginTop:"100px" }}>
        <div className={classes.chartContainer}>
            <div className={classes.chartCover}>
                <Chart/>
            </div>
            <div className={classes.chartCover}>
                <ResearchChart/>
            </div>
        </div>
        </div>
        </div>

    );
}

export default Dashboard;
