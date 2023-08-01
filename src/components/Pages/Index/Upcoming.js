import Events from "./Events";
import classes from "../../../css/style.module.css";

export default function Upcoming(props) {
  return (
    <div className={classes.operationAskContainer}>
      {props.eventDetails &&
        props.eventDetails.map((item, index) => (
          <Events
            key={index}
            name={`ask${index + 1}`}
            date={item.date}
            time={item.time}
            eventname={item.name}
          />
        ))}
      {/* <Events name="ask1" />
      <Events name="ask2" /> */}
    </div>
  );
}
