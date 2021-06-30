import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons'
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        flexGrow: 1
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
        backgroundColor: '#f500577d'
    },
    appBarSolid: {
        backgroundColor: '#fe3f83'
    },
    link:{
        textDecoration:'none',
        color: "white",
    fontSize: "larger",
    fontWeight: "bold"
    }
});

function NavBar(props) {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    })
    const text = props.text
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title} >

                    </Typography>
                    <Button color="black">
                        <Link className={classes.link} to="/news">News</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/workshops">Workshops</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/contactUs">Contact Us</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/papers">Research</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default NavBar;