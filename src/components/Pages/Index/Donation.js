import { FaStar } from "react-icons/fa";
import classes from "../../../css/style.module.css";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

export default function Donation(props) {
  const donate = {
    types: {
      block: ({ value }) => {
        return (
          <h1 className={classes.donationHeader}>{value.children[0].text}</h1>
        );
      },
    },
  };
  const donatedetail = {
    types: {
      block: ({ value }) => {
        return <p className={classes.donationText}>{value.children[0].text}</p>;
      },
    },
  };
  return (
    props.donationDetails &&
    props.donationDetails.map((item, index) => (
      <div
        className={classes.donation}
        key={index}
        style={{
          background: `linear-gradient(#00000081, #00000081), url(${item.image.asset.url}) center/cover no-repeat`,
        }}
      >
        <FaStar className={classes["fa-star"]} />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
          // viewport={{ once: true }}
        >
          <PortableText value={item.heading} components={donate} />
          <PortableText value={item.description} components={donatedetail} />
        </motion.div>
        <button className={classes.donationButton1}>
          <a href="#" className={classes.donationButton}>
            DONATE
          </a>
        </button>
      </div>
    ))
  );
}
