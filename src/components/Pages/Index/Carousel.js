import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa";
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
    <Slider {...settings} className="hero">
      {/* <div className="hero"> */}
      <div className="banner">
        <h3 className="bannerFirstText">WE HELP GET THINGS DONE</h3>
        <h1 className="bannerSecondText">GOD GIVES US POWER</h1>
        <p className="bannerThirdText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut tempore
          recusandae doloribus exercitationem nam cum nihil iure voluptatum
          officia ratione eveniet eum, dolorem enim quaerat incidunt debitis
          maiores modi! Error?
        </p>
        <button className="bannerButton">
          <a href="#" className="bannerButton">
            CONTACT US
          </a>
        </button>
      </div>
      {/* </div> */}
      {/* <div className="hero"> */}
      <div className="banner">
        <h3 className="bannerFirstText">WE HELP GET THINGS DONE</h3>
        <h1 className="bannerSecondText">GOD GIVES US POWER</h1>
        <p className="bannerThirdText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut tempore
          recusandae doloribus exercitationem nam cum nihil iure voluptatum
          officia ratione eveniet eum, dolorem enim quaerat incidunt debitis
          maiores modi! Error?
        </p>
        <button className="bannerButton">
          <a href="#" className="bannerButton">
            CONTACT US
          </a>
        </button>
      </div>
      {/* </div> */}
      {/* <div className="hero"> */}
      <div className="banner">
        <h3 className="bannerFirstText">WE HELP GET THINGS DONE</h3>
        <h1 className="bannerSecondText">GOD GIVES US POWER</h1>
        <p className="bannerThirdText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut tempore
          recusandae doloribus exercitationem nam cum nihil iure voluptatum
          officia ratione eveniet eum, dolorem enim quaerat incidunt debitis
          maiores modi! Error?
        </p>
        <button className="bannerButton">
          <a href="#" className="bannerButton">
            CONTACT US
          </a>
        </button>
      </div>
      {/* </div> */}
    </Slider>
  );
}
