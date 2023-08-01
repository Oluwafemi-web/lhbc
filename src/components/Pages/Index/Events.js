import { FaCalendarDay } from "react-icons/fa";
import classes from "../../../css/style.module.css";

export default function Events(props) {
  return (
    <div className={classes[`${props.name}`]}>
      <div className={classes.askDate}>
        <FaCalendarDay
          style={{ color: "#ac0909" }}
          className={classes["fa-calendar-days"]}
        />
        {/* <i className={classes.fa-solid fa-calendar-days" /> */}
        <p className={classes.askDay}>{props.date}</p>
        <p className={classes.askTime}>{props.time}</p>
      </div>
      <div className={classes.askText}>
        <h4 className={classes.askHeader}>{props.eventname}</h4>
        <p>
          <a href="#" className={classes.askDetails}>
            Event Details
          </a>
        </p>
      </div>
    </div>
  );
}
