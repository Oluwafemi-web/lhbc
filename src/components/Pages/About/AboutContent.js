import classes from "../../../css/about.module.css";
import { PortableText } from "@portabletext/react";
import { FaPlay } from "react-icons/fa";
import FeaturedSermon from "./FeaturedSermon";
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
          <div
            className={classes.aboutContentImg}
            style={{
              background: `url(${item.image.asset.url}) center/cover no-repeat`,
            }}
          />
          <div className={classes.aboutContentText}>
            <p className={classes.aboutContentFirstText}>ABOUT US</p>
            <PortableText value={item.heading} />
            <PortableText value={item.description} />
          </div>
          <div className={classes.message}>
            {props.featured &&
              props.featured.map((item, index) => (
                <FeaturedSermon
                  name={`message${index + 1}`}
                  title={item.title}
                  minister={item.preacher}
                  date={item.date}
                />
              ))}
          </div>
        </div>
      </div>
    ))
  );
}
