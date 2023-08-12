import classes from "../../css/style.module.css";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

export default function OrganizationItems(props) {
  const description = {
    types: {
      block: ({ value }) => {
        return <p className={classes["unionText"]}>{value.children[0].text}</p>;
      },
    },
  };
  return (
    <motion.div
      className={classes["union"]}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "linear", duration: props.duration }}
      viewport={{ once: true }}
    >
      <div
        className={classes["unionImg"]}
        style={{
          background: `url(${props.image}) center/cover no-repeat`,
        }}
      />
      <h5 className={classes["unionHeader"]}>{props.heading}</h5>
      <PortableText value={props.description} components={description} />
      <p>
        <a href="#" className={classes["unionDetails"]}>
          Read More
        </a>
      </p>
    </motion.div>
  );
}
