import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "../../../css/style.module.css";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
export default function IndexContact(props) {
  const description = {
    types: {
      block: ({ value }) => {
        return (
          <p className={classes.contactContentText}>{value.children[0].text}</p>
        );
      },
    },
  };
  const address = {
    types: {
      block: ({ value }) => {
        return (
          <p className={classes.contactAddress}>{value.children[0].text}</p>
        );
      },
    },
  };
  return (
    props.contactDetails &&
    props.contactDetails.map((item, index) => (
      <div
        className={classes.contact}
        key={index}
        style={{
          background: `linear-gradient(#00000081, #00000081), url(${item.image.asset.url}) center/cover no-repeat`,
        }}
      >
        <div className={classes.contactContainer}>
          <motion.div
            className={classes.contactCard}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaPhone className={classes["fa-phone-volume"]} />
            {/* <i className={classes.fa-solid fa-phone-volume" /> */}
            <h3 className={classes.callUs}>Call Us</h3>
            {/* underline icon here */}
            <p className={classes.phoneNumber}>{item.number}</p>
            <p className={classes.gmail}>{item.email}</p>
            <PortableText value={item.address} components={address} />
          </motion.div>
          <motion.div
            className={classes.contactContent}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 1 }}
            viewport={{ once: true }}
          >
            <p className={classes.getInTouch}>GET IN TOUCH</p>
            <p className={classes.contactContentHeader}>{item.heading}</p>
            {/* undeerline icon here */}
            <PortableText value={item.description} components={description} />
            <button className={classes.contactButton}>
              <Link href="/contact" className={classes.contactButton1}>
                CONTACT US
              </Link>
            </button>
          </motion.div>
        </div>
      </div>
    ))
  );
}
