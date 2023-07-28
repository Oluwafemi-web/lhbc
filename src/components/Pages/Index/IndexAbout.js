import Upcoming from "./Upcoming";
import { FaHeart, FaBible } from "react-icons/fa";
import classes from "../../../css/style.module.css";

export default function IndexAbout() {
  return (
    <div className={classes.about}>
      <Upcoming />
      <div className={classes.aboutContainer}>
        <div className={classes.aboutImg} />
        <div className={classes.aboutContent}>
          <p className={classes.about_us}>ABOUT US</p>
          <h1 className={classes.aboutHeader}>
            <i>The Earth is the Lord's and the fullness thereof</i>
          </h1>
          <p className={classes.aboutText}>
            On behalf of the members of Living Hope Baptist Church (Testimony
            Ground), Port Harcourt, I welcome you to the official website of the
            Church. We are using this website to introduce you to our church
            family and the various ministries we engage in...
          </p>
          <div className={classes.messageContainer}>
            <div className={classes.shortMessage1}>
              <FaHeart className={classes["fa-heart"]} />
              <h5 className={classes.shortMessageHeader}>Love One Another</h5>
              <p className={classes.message}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Libero, quasi!
              </p>
            </div>
            <div className={classes.shortMessage2}>
              <FaBible className={classes["fa-book-bible"]} />
              <h5 className={classes.shortMessageHeader}>The Word of God</h5>
              <p className={classes.message}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Libero, quasi!
              </p>
            </div>
          </div>
          <button className={classes.aboutButton}>
            <a href="#" className={classes.aboutButton}>
              LEARN MORE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
