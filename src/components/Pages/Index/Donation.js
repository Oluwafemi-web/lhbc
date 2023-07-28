import { FaStar } from "react-icons/fa";
import classes from "../../../css/style.module.css";

export default function Donation() {
  return (
    <div className={classes.donation}>
      <FaStar className={classes["fa-star"]} />
      {/* <i className={classes.fa-solid fa-star} /> */}
      <h1 className={classes.donationHeader}>
        "Pray! and listen to God! You can do this alone, but find somebody to do
        it with you"
      </h1>
      <p className={classes.donationText}>
        As you give to God, he's going to bless you
      </p>
      <button className={classes.donationButton1}>
        <a href="#" className={classes.donationButton}>
          DONATE
        </a>
      </button>
    </div>
  );
}
