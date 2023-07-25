import Upcoming from "./Upcoming";
import { FaHeart, FaBible } from "react-icons/fa";
export default function IndexAbout() {
  return (
    <div className="about">
      <Upcoming />
      <div className="aboutContainer">
        <div className="aboutImg" />
        <div className="aboutContent">
          <p className="about_us">ABOUT US</p>
          <h1 className="aboutHeader">
            <i>The Earth is the Lord's and the fullness thereof</i>
          </h1>
          <p className="aboutText">
            On behalf of the members of Living Hope Baptist Church (Testimony
            Ground), Port Harcourt, I welcome you to the official website of the
            Church. We are using this website to introduce you to our church
            family and the various ministries we engage in...
          </p>
          <div className="messageContainer">
            <div className="shortMessage1">
              <FaHeart className="fa-heart" />
              <h5 className="shortMessageHeader">Love One Another</h5>
              <p className="message">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Libero, quasi!
              </p>
            </div>
            <div className="shortMessage2">
              <FaBible className="fa-book-bible" />
              <h5 className="shortMessageHeader">The Word of God</h5>
              <p className="message">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Libero, quasi!
              </p>
            </div>
          </div>
          <button className="aboutButton">
            <a href="#" className="aboutButton">
              LEARN MORE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
