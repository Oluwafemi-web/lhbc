import classes from "../../../css/about.module.css";
import { motion } from "framer-motion";
export default function DiaconateItem(props) {
  return (
    <motion.div
      className={classes.deacon}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "linear", duration: props.duration }}
      viewport={{ once: true }}
    >
      <div
        className={classes.deaconImg}
        style={{
          background: `url(${props.image}) center/cover no-repeat`,
        }}
      />
      <p className={classes.deaconName}>{props.name}</p>
    </motion.div>
  );
}
