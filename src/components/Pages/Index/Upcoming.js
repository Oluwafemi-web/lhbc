import Events from "./Events";
import classes from "../../../css/style.module.css";

export default function Upcoming() {
  return (
    <div className={classes.operationAskContainer}>
      <Events name="ask1" />
      <Events name="ask2" />
    </div>
  );
}
