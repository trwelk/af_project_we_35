import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import backgroundImage from '../../../assets/images/productCurvyLines.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: "#fff5f8",
    },
    container: {
        marginTop: "20px",
        marginBottom: "20px",
        display: 'flex',
        position: 'relative',
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
    },
    paraH3: {
        fontSize: "20px",
        fontFamily: "monospace",
        fontWeight: "300",
        lineHeight: 1.334,
        paddingTop: '30px',
        paddingBottom: '30px'

    }
});

function Footer(props) {
    const classes = useStyles();
    const text = props.text
    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <div>                        
                    <Link className={classes.link} to="/login">Admin</Link>
                </div>
            </Container>
        </section>
    );
}


export default Footer;