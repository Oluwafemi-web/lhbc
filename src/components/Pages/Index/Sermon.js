import { FaBible } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import classes from "../../../css/style.module.css";

export default function Sermon(props) {
  const sermon = {
    types: {
      block: ({ value }) => {
        return (
          <p className={classes.sermonContentText}>{value.children[0].text}</p>
        );
      },
    },
  };
  return (
    props.sermonDetails && (
      <div className={classes.sermon}>
        <h3 className={classes.sermonHeader}>
          <FaBible className={classes["fa-book-bible sermonIcon"]} />
          TODAY'S SERMON
          <FaBible className={classes["fa-book-bible sermonIcon"]} />
        </h3>
        <div className={classes.sermonContainer}>
          <img
            src={props.sermonDetails.image.asset.url}
            alt=""
            className={classes.sermonImg}
          />
          <div className={classes.sermonContent}>
            <h4 className={classes.sermonContentHeader}>
              <i>{props.sermonDetails.title}</i>
            </h4>
            <p className={classes.preacherName}>
              <i>- {props.sermonDetails.preacher}</i>
            </p>
            <p className={classes.sermonDate}>
              <i>{props.sermonDetails.date}</i>
            </p>
            <PortableText
              value={props.sermonDetails.description}
              components={sermon}
            />
          </div>
        </div>
      </div>
    )
  );
}
