import classes from "../../../css/gallery.module.css";
import { PortableText } from "@portabletext/react";
import MediaIcons from "./MediaIcons";

export default function MessageItems(props) {
  const description = {
    types: {
      block: ({ value }) => {
        return (
          <p className={classes.messageContent}>{value.children[0].text}</p>
        );
      },
    },
  };
  return (
    <div className={classes.message1}>
      <div
        className={classes.messageImg}
        style={{ background: ` url(${props.image}) center/cover` }}
      />
      <div className={classes.messageContentContainer}>
        <h5 className={classes.messageHeader}>{props.title}</h5>
        <p className={classes.messagePreacher}>
          - {props.preacher}
          <span className={classes.messageDateAndMonth}>{props.date}</span>
        </p>
        <PortableText value={props.description} components={description} />
        <MediaIcons audio={props.audio} />
      </div>
    </div>
  );
}
