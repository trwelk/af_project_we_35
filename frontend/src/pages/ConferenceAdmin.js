import React from 'react';
import Chart from '../components/dashboard/Chart';
import { makeStyles } from '@material-ui/core/styles';
import ResearchChart from '../components/dashboard/ResearchChart';
import AdminNavbar from '../components/views/AdminNavBar';
import ConferenceDetails from '../components/conference/ConferenceDetails'
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

function ConferenceAdmin() {
    const classes = useStyles();

    return (
        <div>
            <AdminNavbar/>
        <div style={{ padding: "20px",marginTop:"100px" }}>
        <ConferenceDetails/>
        </div>
        </div>

    );
}

export default ConferenceAdmin;
