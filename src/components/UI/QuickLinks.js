import { FaStar } from "react-icons/fa";
import classes from "../../css/Footer.module.css";

export default function QuickLinks() {
  return (
    <p className={classes.link}>
      <a href="#" className={classes.link1}>
        <FaStar className={classes.footerStarIcon} />
        {/* <i className="fa-solid fa-star footerStarIcon" /> */}
        Who are we?
      </a>
    </p>
  );
}
