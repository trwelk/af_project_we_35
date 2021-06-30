import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
        
    },
    paperCover: {
        background: "white",
        height: "500px",
        width: "100%",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        background:"#fff5f8"

    },
    keyHead: {
        height: "40%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    },
    keyImg: {
        width: "130px",
        height: "130px",
        borderRadius: "50%",
      
    },
    keyNody:{
        display:'flex',
        justifyContent:"start",
        flexDirection:"column",
        alignItems:'center',
        height:'15%'
    },
    keyFootText:{
        color:"#999",
        textAlign:'center',
        fontSize: "15px",
        fontFamily:"-webkit-pictograph",
        fontWeight: "300",
        lineHeight:"1.5em"
    },
    keyFoot:{
        display:'flex',
        alignItems:'center',
        height:'35%',
        width:'75%'
    },
    keyFootSocial:{
        display:'flex',
        justifyContent:'center',
        justifyContent:'space-evenly',
        width:'80%'
    },
    keyName:{
        fontWeight: "700",
        fontFamily:"-webkit-pictograph",
        textDecoration:'none',
        fontSize:"1.125rem",
        height:'inherit',
        marginTop:"0px"
    }

}));

function KeynoteCard(props) {
    const classes = useStyles();
    console.log(props)
    let {speaker,description,designation} = props
    if(props.data){
    return (
        <Container className={classes.root} component="section">
            <Paper elevation={0} className={classes.paperCover}>
                <div className={classes.keyHead}>
                    <img className={classes.keyImg} src="https://images.unsplash.com/photo-1531299204812-e6d44d9a185c" />
                </div>
                <div className={classes.keyNody}>
                    <h4 variant="h6" className={classes.keyName} >
                        {props.data.speaker}
                     </h4>
                    <Typography variant="caption" display="block" gutterBottom>
                        {props.data.designation}
                    </Typography>
                </div>
                <div className={classes.keyFoot}>
                <Typography className={classes.keyFootText} variant="body2" gutterBottom>
                    {props.data.description}
                </Typography>
                </div>
                <div className={classes.keyFootSocial}>
                <InstagramIcon/>
                <LinkedInIcon/>
                <FacebookIcon/>
                </div>
            </Paper>
        </Container>
    );
    }
    else{
        return(
            <div></div>
        )
    }
}



export default KeynoteCard;