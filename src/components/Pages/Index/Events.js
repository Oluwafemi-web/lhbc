import { FaCalendarDay } from "react-icons/fa";
import classes from "../../../css/style.module.css";
import { motion } from "framer-motion";

export default function Events(props) {
  return (
    <motion.div
      className={classes[`${props.name}`]}
      animate={{ x: 100 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
    >
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
    </motion.div>
  );
}
