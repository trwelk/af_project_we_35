import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Typography} from '@material-ui/core';
import backgroundImage from '../../../assets/images/productCurvyLines.png';

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
      paraH3:{
        fontSize: "20px",
        fontFamily: "monospace",
        fontWeight: "300",
        lineHeight: 1.334,
        paddingTop:'30px',
        paddingBottom:'30px'

      }
});

function ParagraphWithBackground(props) {
    const classes = useStyles();
    const text = props.text
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={backgroundImage}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <h3 className={classes.paraH3}>
        {text}
        </h3>
      </Container>
    </section>
  );
}


export default ParagraphWithBackground;