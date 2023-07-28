import classes from "../../css/about.module.css";
import { FaCalendarPlus, FaLocationArrow, FaMapPin } from "react-icons/fa";

export default function NextEvent() {
  return (
    <div className={classes.event}>
      <h4 className={classes.eventHeader}>NEXT EVENT</h4>
      <div className={classes.eventContainer}>
        <div className={classes.eventDetails}>
          <div className={classes.eventMonthDate}>
            <p className={classes.day}>
              10<span>th</span>
            </p>
            <p className={classes.month}>Mar 2020</p>
          </div>
          <div className={classes.eventDetailsContent}>
            <h5 className={classes.eventName}>
              Operation ASK - 100 Days of Seeking God
            </h5>
            <p className={classes.eventDate}>
              <FaCalendarPlus className={classes["fa-calendar-plus"]} />
              {/* <i className={classes.fa-solid fa-calendar-plus} /> */}
              Thursday 10th March, 2020
            </p>
            <p className={classes.eventLocation}>
              <FaLocationArrow
                className={classes["fa-location-arrow"]}
                style={{ rotate: "270deg" }}
              />
              {/* <i className={classes.fa-solid fa-location-arrow fa-rotate-270} /> */}
              LHBC, Elelenwo
            </p>
            <p className={classes.eventAddress}>
              <FaMapPin className={classes["fa-map-pin"]} />
              {/* <i className={classes.fa-solid fa-map-pin} /> */}
              High Tension Pole Road, Port Harcourt
            </p>
          </div>
        </div>
        <div className={classes.timerContainer}>
          <p className={classes.days}>20</p>
          <p className={classes.hours}>16</p>
          <p className={classes.minutes}>32</p>
          <p className={classes.seconds}>09</p>
        </div>
      </div>
    </div>
  );
}
