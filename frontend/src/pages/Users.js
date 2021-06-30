import React, { useEffect } from 'react';
import UserTable from '../components/user/UserTable';
import { makeStyles } from '@material-ui/core/styles';
import AdminNavbar from '../components/views/AdminNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        fontFamily: "Roboto",
        backgroundImage: "url(https://wallpaperaccess.com/full/446984.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh"
    }
}));

function Users() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AdminNavbar/>
            <UserTable/>
        </div>
    );
}

export default Users;