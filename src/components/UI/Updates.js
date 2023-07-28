import { FaCalendarPlus } from "react-icons/fa";
import classes from "../../css/Footer.module.css";
export default function Updates() {
  return (
    <div className={classes.firstUpdate}>
      <div className={classes.updateImg} />
      <div className={classes.footerUpdateContainer}>
        <h5 className={classes.updateHeader}>
          Giving To God - Active ways to get blessed
        </h5>
        <p className={classes.footerUpdateDate}>
          <FaCalendarPlus
            className={classes["fa-calendar-plus calendarIcon"]}
          />{" "}
          October 16, 2020
        </p>
      </div>
    </div>
  );
}
