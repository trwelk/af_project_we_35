import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons'
import { Typography } from '@material-ui/core';
import { ActionTypes } from '../../redux/constants/action-types';
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: "10px",
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: '#232f3e'
    },
    appBarSolid: {
        backgroundColor: '#232f3e'
    },
    link:{
        textDecoration:'none',
        color: "white",
    fontSize: "larger",
    fontWeight: "300",
    }
});

function AdminNavbar(props) {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    const dispatch = useDispatch();

    navRef.current = navBackground
    const globalState = useSelector((state) => state);
    let history = useHistory();
    console.log(globalState)
    if(globalState.auth.logged){
        let user = globalState.auth.loggedUser;
       
    } else {
        history.push('/login');
        dispatch({
            type: ActionTypes.SUPERUSER_LOGOUT,
            payload: ""
          });

    }
    useEffect(() => {
        
    })
    const handleLogout = () => {
        history.push('/login');
        dispatch({
            type: ActionTypes.SUPERUSER_LOGOUT,
            payload: ""
          });
    }
    const text = props.text
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title} >
                    </Typography>
                    <Button color="black">
                        <Link className={classes.link} to="/editor/workshopAdmin">Workshop Managemnt</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/editor/research">Research Managemnt</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/editor/workshops">Workshop Schedule</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/editor/dashboard">Dashboard</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/users">User management</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/editor/conference">Conference </Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/editor/NewsTable">News</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/editor/keynote">Keynotes</Link>
                    </Button>
                    <Button color="black" onClick={handleLogout}>
                        <Link className={classes.link} to="/editor/keynote">logout</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default AdminNavbar;