import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "../../../css/style.module.css";
import "../../../css/slick.css";
import "../../../css/style.module.css";

import img1 from "../../../images/Placeholder4.jpeg";
export default function Carousel() {
  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    // prevArrow: (
    //   <>
    //     <FaAngleRight />
    //   </>
    // ),
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className={classes.hero}>
      {/* <div className={classes.hero"> */}
      <div className={classes.banner}>
        <h3 className={classes.bannerFirstText}>WE HELP GET THINGS DONE</h3>
        <h1 className={classes.bannerSecondText}>GOD GIVES US POWER</h1>
        <p className={classes.bannerThirdText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut tempore
          recusandae doloribus exercitationem nam cum nihil iure voluptatum
          officia ratione eveniet eum, dolorem enim quaerat incidunt debitis
          maiores modi! Error?
        </p>
        <button className={classes.bannerButton}>
          <a href="#" className={classes.bannerButton}>
            CONTACT US
          </a>
        </button>
      </div>
      {/* </div> */}
      {/* <div className={classes.hero"> */}
      <div className={classes.banner}>
        <h3 className={classes.bannerFirstText}>WE HELP GET THINGS DONE</h3>
        <h1 className={classes.bannerSecondText}>GOD GIVES US POWER</h1>
        <p className={classes.bannerThirdText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut tempore
          recusandae doloribus exercitationem nam cum nihil iure voluptatum
          officia ratione eveniet eum, dolorem enim quaerat incidunt debitis
          maiores modi! Error?
        </p>
        <button className={classes.bannerButton}>
          <a href="#" className={classes.bannerButton}>
            CONTACT US
          </a>
        </button>
      </div>
      {/* </div> */}
      {/* <div className={classes.hero"> */}
      <div className={classes.banner}>
        <h3 className={classes.bannerFirstText}>WE HELP GET THINGS DONE</h3>
        <h1 className={classes.bannerSecondText}>GOD GIVES US POWER</h1>
        <p className={classes.bannerThirdText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut tempore
          recusandae doloribus exercitationem nam cum nihil iure voluptatum
          officia ratione eveniet eum, dolorem enim quaerat incidunt debitis
          maiores modi! Error?
        </p>
        <button className={classes.bannerButton}>
          <a href="#" className={classes.bannerButton}>
            CONTACT US
          </a>
        </button>
      </div>
      {/* </div> */}
    </Slider>
  );
}
