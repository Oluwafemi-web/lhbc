import classes from "../../../css/about.module.css";
import { FaPlay } from "react-icons/fa";
export default function FeaturedSermon(props) {
  return (
    <div className={classes[`${props.name}`]}>
      <div className={classes.playIcon}>
        <FaPlay className={classes["fa-play"]} />
      </div>
      <div className={classes.messageContent}>
        <h4 className={classes.messageHeader}>{props.title}</h4>
        <p className={classes.preacherName}>- {props.minister}</p>
        <p className={classes.sermonDate}>{props.date}</p>
      </div>
    </div>
  );
}
