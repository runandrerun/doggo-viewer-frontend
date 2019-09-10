import React, { Component } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Slider from "react-slick";
import { NextArrow, PrevArrow, styles } from "../styles/carouselStyling.js";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { withStyles } from "@material-ui/core/styles";


class Carousel extends Component {
  render() {
    const { classes } = styles;
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: dots => (
        <div style={{bottom: 10}}>
          <ul style={{ margin: "0px", padding: 0 }}> {dots} </ul>
        </div>
      ),
    };
    console.log("Inside Carousel", this.props)
    return (
      <div>
      {console.log(settings)}
        <Slider {...settings}>
          <div>
            <CardMedia
              component="img"
              className={this.props.classes.media}
              image={this.props.dog.image1}
            />
          </div>
          {this.props.dog.image2 && (
            <div>
              <CardMedia
                component="img"
                className={this.props.classes.media}
                image={this.props.dog.image2}
              />
            </div>
          )}
          {this.props.dog.image3 && (
            <div>
              <CardMedia
                component="img"
                className={this.props.classes.media}
                image={this.props.dog.image3}
              />
            </div>
          )}{" "}
        </Slider>
      </div>
    );
  }
};

export default withStyles(styles)(Carousel);
