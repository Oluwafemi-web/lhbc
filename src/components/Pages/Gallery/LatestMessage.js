import classes from "../../../css/gallery.module.css";
import MediaIcons from "./MediaIcons";
import { PortableText } from "@portabletext/react";
export default function (props) {
  const description = {
    types: {
      block: ({ value }) => {
        return <p className={classes.message}>{value.children[0].text}</p>;
      },
    },
  };
  return (
    <div className={classes.galleryMessage}>
      <div className={classes.galleryMessageContainer}>
        <h4 className={classes.messageFirstText}>LATEST SERMON</h4>
        <div className={classes.currentMessage}>
          <h4 className={classes.currentMessageFirstText}>{props.title}</h4>
          <p className={classes.preacher}>
            - {props.preacher}
            <span className={classes.messageDate}>{props.date}</span>
          </p>
          <PortableText value={props.description} components={description} />

          <MediaIcons audio={props.audio} />
        </div>
        <button>
          <a href="#" className={classes.sermonButton}>
            Previous Sermons
          </a>
        </button>
      </div>
    </div>
  );
}
