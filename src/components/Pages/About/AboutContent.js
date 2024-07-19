import classes from "../../../css/about.module.css";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
export default function AboutContent(props) {
  const about = {
    types: {
      block: ({ value }) => {
        return (
          <p className={classes.aboutContentMainText}>
            {value.children[0].text}
          </p>
        );
      },
    },
  };
  const heading = {
    types: {
      block: ({ value }) => {
        return (
          <h3 className={classes.aboutContentSecondText}>
            {value.children[0].text}
          </h3>
        );
      },
    },
  };
  return (
    props.aboutData &&
    props.aboutData.map((item, index) => (
      <div className={classes.aboutContent} key={index}>
        <div className={classes.aboutContentContainer}>
          <motion.div
            className={classes.aboutContentImg}
            style={{
              background: `url(${item.image.asset.url}) center/cover no-repeat`,
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.div
            className={classes.aboutContentText}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className={classes.aboutContentFirstText}>ABOUT US</p>
            <PortableText value={item.heading} />
            <PortableText value={item.description} />
          </motion.div>
        </div>
      </div>
    ))
  );
}
