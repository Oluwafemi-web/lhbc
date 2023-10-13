import classes from "../../css/about.module.css";
import { FaCalendarPlus, FaLocationArrow, FaMapPin } from "react-icons/fa";
import { useTimer } from "react-timer-hook";
function getDayWithSuffix(day) {
  if (day >= 11 && day <= 20) {
    return day + "th";
  }
  switch (day % 10) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}

export default function NextEvent(props) {
  const time = new Date(props.date);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Janu",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  time.setSeconds(time.getSeconds());
  const expiryTimestamp = time.getTime();

  const {
    // totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    // isRunning,
    // start,
    // pause,
    // resume,
    // restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className={classes.event}>
      <h4 className={classes.eventHeader}>NEXT EVENT</h4>
      <div className={classes.eventContainer}>
        <div className={classes.eventDetails}>
          <div className={classes.eventMonthDate}>
            <p className={classes.day}>{getDayWithSuffix(time.getDate())}</p>
            <p className={classes.month}>{`${
              months[time.getMonth()]
            } ${time.getFullYear()}`}</p>
          </div>
          <div className={classes.eventDetailsContent}>
            <h5 className={classes.eventName}>{props.title}</h5>
            <p className={classes.eventDate}>
              <FaCalendarPlus className={classes["fa-calendar-plus"]} />
              {time.toDateString()}
            </p>
            <p className={classes.eventLocation}>
              <FaLocationArrow
                className={classes["fa-location-arrow"]}
                style={{ rotate: "270deg" }}
              />
              LHBC, Elelenwo
            </p>
            <p className={classes.eventAddress}>
              <FaMapPin className={classes["fa-map-pin"]} />
              High Tension Pole Road, Port Harcourt
            </p>
          </div>
        </div>

        <div className={classes.timerContainer}>
          <p className={classes.days}>{days}</p>
          <p className={classes.hours}>{hours}</p>
          <p className={classes.minutes}>{minutes}</p>
          <p className={classes.seconds}>{seconds}</p>
        </div>
      </div>
    </div>
  );
}
