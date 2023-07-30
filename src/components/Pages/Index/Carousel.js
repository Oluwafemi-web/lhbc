import React from "react";
import Slider from "react-slick";
import SliderItems from "./SliderItems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../css/slick.css";
import "../../../css/style.module.css";
import classes from "../../../css/style.module.css";

export default function Carousel(props) {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={classes.hero}>
      {props.carouselData &&
        props.carouselData.map((item, index) => (
          <SliderItems
            key={index} // Use a unique key for each SliderItems component
            img={item.image.asset.url}
            // heading={item.heading[0]?.children[0]?.text || ""} // Access nested structure safely
            heading={item.heading}
            subheading={item.subheading}
            description={item.description}
          />
        ))}
    </Slider>
  );
}
