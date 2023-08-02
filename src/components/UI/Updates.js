import { FaCalendarPlus } from "react-icons/fa";
import classes from "../../css/Footer.module.css";
export default function Updates(props) {
  return (
    <div className={classes.firstUpdate}>
      <div className={classes.updateImg} />
      <div className={classes.footerUpdateContainer}>
        <h5 className={classes.updateHeader}>{props.title}</h5>
        <p className={classes.footerUpdateDate}>
          <FaCalendarPlus
            className={classes["fa-calendar-plus calendarIcon"]}
          />{" "}
          {props.date}
        </p>
      </div>
    </div>
  );
}
