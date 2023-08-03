import classes from "../../../css/gallery.module.css";
import { FaPlay, FaPause, FaDownload, FaShare } from "react-icons/fa";
export default function MediaIcons(props) {
  return (
    <div className={classes.mediaIcons}>
      <div className={classes.mediaButton}>
        <a href={props.audio}>
          <FaPlay className={classes["fa-play"]} />
        </a>
      </div>
      <div className={classes.mediaButton}>
        <a href={`${props.audio}?dl=`}>
          <FaPause className={classes["fa-pause"]} />
        </a>
      </div>
      <div className={classes.mediaButton}>
        <a href={props.audio}>
          <FaDownload className={classes["fa-download"]} />
        </a>
      </div>
      <div className={classes.mediaButton}>
        <a href={props.audio}>
          <FaShare className={classes["fa-share-nodes"]} />
        </a>
      </div>
    </div>
  );
}
