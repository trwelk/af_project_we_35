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
        background:"#80808017"
    },
    media: {
        height: 140,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "18px",
        width: "77%",
    },
    bodyCover: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "77%",
        display: "flex",
        alignItems: "center",
        height: "134px",
        textOverflow: "ellipsis"
    },
    bodyH5: {
        textAlign: "left",
        height: "20%",

    },
    textCover:{
        display:"flex",
        flexDirection:"row"
    }
});

export default function NewsCard(props) {
    const classes = useStyles();
    const news = props.news

    //************************Rendering UI Elements*************************************** */
    
    /*Check if news has been loaded ? Then render the Card component : else render a loading spinner */
    const card = news ? (
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia
                    className={classes.media}
                    image={require('/assets/bg2.jpg')}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.bodyCover}>
                    <div style={{ height: "100%" }}>
                        <div className={classes.textCover}>
                            <Typography className={classes.bodyH5} gutterBottom variant="h5" component="h2">
                                {news.name}
                            </Typography>
                        </div>
                        <div className={classes.textCover}>
                            <Typography className={classes.bodyH5} gutterBottom variant="h6" component="h2">
                                {news.description}
                            </Typography>
                        </div>
                        <div className={classes.textCover}>
                            <Typography className={classes.bodyH5} variant="h6" component="p">
                                {news.amount} 
                            </Typography>
                        </div>
                    </div>

                </CardContent>
            </CardActionArea>
        </Card>
    ) : (
            <CircularProgress />
        )

    return (
        <div style={{width:"100%",    margin: "10%"    }}>
            {card}
        </div>
    );
}
