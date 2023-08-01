import classes from "../../css/style.module.css";
import { PortableText } from "@portabletext/react";

export default function OrganizationItems(props) {
  const description = {
    types: {
      block: ({ value }) => {
        return <p className={classes["unionText"]}>{value.children[0].text}</p>;
      },
    },
  };
  return (
    <div className={classes["union"]}>
      <div
        className={classes["unionImg"]}
        style={{
          background: `url(${props.image}) center/cover no-repeat`,
        }}
      />
      <h5 className={classes["unionHeader"]}>{props.heading}</h5>
      <PortableText value={props.description} components={description} />
      {/* <p className={classes["unionText"]}>{props.description}</p> */}
      <p>
        <a href="#" className={classes["unionDetails"]}>
          Read More
        </a>
      </p>
    </div>
  );
}
