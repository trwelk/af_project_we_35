import React from "react";
// react component for creating beautiful carousel
import Slider from "react-slick";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import {Grid} from "@material-ui/core";
import {Card} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    gridItem: {
        position: "relative",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        flexBasis: "auto",
        marginLeft: "auto !important",
        marginRight: "auto !important",
      },
      gridCont: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "auto",
      },
      section: {
        padding: "70px 0",
      },
      marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important",
      },
}));

export default function ImageCarousell() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Grid className={classes.gridCont}>
          <Grid item xs={12} sm={12} md={8} className={classes.gridItem}>
              <Slider {...settings}>
                <div>
                  <img src={require('../../assets/bg3.jpg')} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={require('../../assets/bg3.jpg')}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src={require('../../assets/bg3.jpg')} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
