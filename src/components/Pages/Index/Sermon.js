import { FaBible } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import classes from "../../../css/style.module.css";
import { motion } from "framer-motion";

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
          <motion.img
            src={props.sermonDetails.image.asset.url}
            alt=""
            className={classes.sermonImg}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.div
            className={classes.sermonContent}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </div>
    )
  );
}
