import classes from "../../../css/blog.module.css";
import { FaCalendarDay } from "react-icons/fa";
export default function PopularPostItems() {
  return (
    <div className={classes.firstPost}>
      <div className={classes.popularPostImg} />
      <div className={classes.postContent}>
        <h5 className={classes.postHeader}>
          Giving to God - Active ways to get blessed
        </h5>
        <p className={classes.popularPostDate}>
          <FaCalendarDay className={classes["fa-calendar-days"]} />
          {/* <i className={classes.fa-solid fa-calendar-days} /> */}
          0ct 16th, 2020
        </p>
      </div>
    </div>
  );
}
