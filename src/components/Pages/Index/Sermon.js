import { FaBible } from "react-icons/fa";
import image from "../../../images/sermonImage.jpeg";
import classes from "../../../css/style.module.css";

export default function Sermon() {
  return (
    <div className={classes.sermon}>
      <h3 className={classes.sermonHeader}>
        <FaBible className={classes["fa-book-bible sermonIcon"]} />
        {/* <i className={classes.fa-solid fa-book-bible sermonIcon" /> */}
        TODAY'S SERMON
        <FaBible className={classes["fa-book-bible sermonIcon"]} />
        {/* <i className={classes.fa-solid fa-book-bible sermonIcon" /> */}
      </h3>
      <div className={classes.sermonContainer}>
        <img src={image} alt="" className={classes.sermonImg} />
        <div className={classes.sermonContent}>
          <h4 className={classes.sermonContentHeader}>
            <i>Activating Goodnews</i>
          </h4>
          <p className={classes.preacherName}>
            <i>- Rev'd Steve Ayorinde</i>
          </p>
          <p className={classes.sermonDate}>
            <i>27th October 2020</i>
          </p>
          <p className={classes.sermonContentText}>
            Lorem ipsum dolor sit amet etur aisicing elit. Nemo laborum labore
            culpa fugiatias blanditiis doloribus a voluptate natur velit quaerat
            ipsum iste in, esse officia moitia, harum sit amet reprehenderit
            nihil facilis. Iure quia dicta ipsum nostrum nesciunt libero
            aliquid.
          </p>
        </div>
      </div>
    </div>
  );
}
