import classes from "../../../css/style.module.css";
import { Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
export default function SliderItems(props) {
  const h3tags = {
    types: {
      block: ({ value }) => {
        return (
          <h3 className={classes.bannerFirstText}>{value.children[0].text}</h3>
        );
      },
    },
  };
  const h1tags = {
    types: {
      block: ({ value }) => {
        return (
          <h1 className={classes.bannerSecondText}>{value.children[0].text}</h1>
        );
      },
    },
  };
  const ptags = {
    types: {
      block: ({ value }) => {
        return (
          <p className={classes.bannerThirdText}>{value.children[0].text}</p>
        );
      },
    },
  };
  //   console.log(myPortableTextComponents);
  return (
    <div
      className={classes.banner}
      style={{
        background: `
          linear-gradient(rgba(1, 22, 53, 0.745), rgba(1, 22, 53, 0.745)),
          url(${props.img}) fixed
        `,
      }}
    >
      <PortableText value={props.heading} components={h3tags} />
      <PortableText value={props.subheading} components={h1tags} />
      <PortableText value={props.description} components={ptags} />

      {/* <h3 className={classes.bannerFirstText}>{props.heading}</h3> */}
      {/* <h1 className={classes.bannerSecondText}>{props.subheading}</h1> */}
      {/* <p className={classes.bannerThirdText}>{props.description}</p> */}
      <button className={classes.bannerButton}>
        <Link to="/contact" className={classes.bannerButton}>
          CONTACT US
        </Link>
      </button>
    </div>
  );
}