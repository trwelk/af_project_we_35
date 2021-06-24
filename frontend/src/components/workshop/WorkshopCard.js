import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "300px",
        width: "90%",
        display: "flex",
        flexDirection: "row"
    },
    container: {
        justifyContent: "center",
        display: "flex",
        paddingTop: "20px"
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
    }

}));

export default function WorkshopCard(props) {
    const classes = useStyles();
    let { workshop } = props
    console.log(workshop,props)
    const flexDirection = props.index % 2 == 0 ? "row" : "row-reverse"

    return (
        <div className={classes.container}>
            <Paper className={classes.root} style={{flexDirection:flexDirection}} elevation={1}>
                <div className={classes.imgContainer} >
                    <img className={classes.image} src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
                </div>
                <div className={classes.contentContainer} >
                    <Typography variant="h5" gutterBottom>
                        {workshop.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
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
