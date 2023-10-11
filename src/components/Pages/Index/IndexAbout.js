import Upcoming from "./Upcoming";
import { Link } from "react-router-dom";
import { FaHeart, FaBible } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import classes from "../../../css/style.module.css";
import { motion } from "framer-motion";

export default function IndexAbout(props) {
  const heading = {
    types: {
      block: ({ value }) => {
        return (
          <h1 className={classes.aboutHeader}>{value.children[0].text}</h1>
        );
      },
    },
  };
  const description = {
    types: {
      block: ({ value }) => {
        return <p className={classes.aboutText}>{value.children[0].text}</p>;
      },
    },
  };
  const keydescription = {
    types: {
      block: ({ value }) => {
        return <p className={classes.message}>{value.children[0].text}</p>;
      },
    },
  };
  return (
    props.aboutDetails &&
    props.aboutDetails.map((item, index) => (
      <div className={classes.about} key={index}>
        <Upcoming eventDetails={props.eventDetails} />
        <motion.div
          className={classes.aboutContainer}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "linear", duration: 1 }}
          // viewport={{ once: true }}
        >
          <div className={classes["about-im"]}>
            <div
              className={classes.aboutImg}
              style={{
                background: `url(${item.image.asset.url}) top center/cover no-repeat`,
              }}
            />
            <h2 className={classes["pastor-name"]}>Revd Dr Steve Ayorinde</h2>
            <p className={classes["pastor-title"]}>Church pastor</p>
          </div>
          <div className={classes.aboutContent}>
            <p className={classes.about_us}>ABOUT US</p>
            <PortableText value={item.heading} components={heading} />
            <PortableText value={item.description} components={description} />
            {/* <div className={classes.messageContainer}>
              {props.keyPoints &&
                props.keyPoints.map((item, index) => (
                  <div
                    className={classes[`shortMessage${index + 1}`]}
                    key={index}
                  >
                    <FaHeart className={classes["fa-heart"]} />
                    <h5 className={classes.shortMessageHeader}>
                      {item.heading}
                    </h5>
                    <PortableText
                      value={item.description}
                      components={keydescription}
                    />
                  </div>
                ))}

            </div> */}
            <button className={classes.aboutButton}>
              <Link to="/about" className={classes.aboutButton}>
                LEARN MORE
              </Link>
            </button>
          </div>
        </motion.div>
      </div>
    ))
  );
}
