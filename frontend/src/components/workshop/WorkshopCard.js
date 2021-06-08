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
    let { title, description, conductor, link } = props
    //////
    title = "This is the new Titlle";
    description = "Computational Fluid Dynamics (CFD) has now become a common tool for modelling heat and fluid flow applications in many engineering disciplines. Obtaining accurate results through proper use of CFD requires a solid understanding of underling modelling principles with technical know-how gained through experience. The proposed workshop aims to disseminate the required basic theoretical understanding and technical know-how among researches of various disciplines. The workshop is designed to be largely with hands on sessions solving several real-life engineering problems."
    conductor = "Mr A.K Abujann"


    /////
    return (
        <div className={classes.container}>
            <Paper className={classes.root} elevation={3}>
                <div className={classes.imgContainer} >
                    <img className={classes.image} src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
                </div>
                <div className={classes.contentContainer} >
                    <Typography variant="h5" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {description}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        {conductor}
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}
