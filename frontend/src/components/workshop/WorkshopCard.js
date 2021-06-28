import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//*********************************************Styling************************************************************* */

const useStyles = makeStyles((theme) => ({
    root: {
        height: "300px",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        background:"#fff5f8",
        justifyContent:'center',

    },
    container: {
        justifyContent: "center",
        display: "flex",
        paddingTop: "20px",
        background:"#fff5f8"
    },
    imgContainer: {
        width: "25%",
        height: "80%",
        marginTop: "auto",
        marginLeft: "3%",
        marginTop: "2.5%"
    },
    contentContainer: {
        width: "75%",
        height: "80%",
        marginTop: "auto",
        marginLeft: "3%",
        marginTop: "2.5%"
    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%"
    },
    bodyCover:{
        fontSize: "16px",
        fontFamily: "system-ui",
        fontWeight: "300",
        lineHeight: 1.334,
        paddingTop:'30px',
        paddingBottom:'30px'
    }

}));

export default function WorkshopCard(props) {
    const classes = useStyles();
    let { workshop } = props
    const flexDirection = props.index % 2 == 0 ? "row" : "row-reverse"

    //*********************************************Rendering elements************************************************************* */

    return (
        <div className={classes.container}>
            <Paper className={classes.root} style={{flexDirection:flexDirection}} elevation={0}>
                <div className={classes.imgContainer} >
                    <img className={classes.image} src={require('/assets/images/prodSample.jpg')} />
                </div>
                <div className={classes.contentContainer} >
                    <Typography variant="h5" gutterBottom>
                        {workshop.title}
                    </Typography>
                    <Typography className={classes.bodyCover} variant="body1" gutterBottom>
                        {workshop.description}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        {workshop.conductor}
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}
