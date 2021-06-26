import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
// Styling the component
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        background: "#80808017",
        zIndex:1

    },
    headh2: {
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: "36px",
        fontFamily: 'Roboto Condensed',
        fontWeight: 700,
        lineHeight: 1.235,
        textTransform: "uppercase",
        zIndex:1

    },
    headSpan: {
        width: "55px",
        height: "4px",
        margin: "8px auto 0",
        display: "block",
        backgroundColor: " #ff3366",
        zIndex:1

    },
    head1container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        zIndex:1
    }
});

export default function Heading1(props) {
    const classes = useStyles();
    const data = props.data

    //************************Rendering UI Elements*************************************** */

    /*Check if news has been loaded ? Then render the Card component : else render a loading spinner */
    const dataDisplayElement = data ? (
        <div className={classes.head1container}>
            <h2 className={classes.headh2}>
                {data.heading}

            </h2>
            <span className={classes.headSpan}>

            </span>
        </div>
    ) : (
            <CircularProgress />
        )

    return (
        <div >
            {dataDisplayElement}
        </div>
    );
}
