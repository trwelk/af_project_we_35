import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';
const useStyles = makeStyles((theme) => ({
    par: {
        height: "400px"
    },
    heroh1: {
        color: 'white',
        textAlign: "center",
        fontSize: "70px",
        fontFamily: "system-ui"
    },
    outerContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    },
    contentCover: {
        width: "60%",
        height: "300px",
        marginTop: "80px"

    }
}))

function HeroWithContent(props) {
    const classes = useStyles();

    return (
        <Parallax blur={1} className={classes.par} bgImage={require('/assets/images/pinkBg3.jpg')} bgImageAlt="the cat" strength={200}>
            <div className={classes.outerContainer}>
                <div className={classes.contentCover}>
                    <h1 className={classes.heroh1}>
                        BrainCONN
                    </h1>
                </div>
            </div>
        </Parallax>
    );
}



export default HeroWithContent;