import classes from "../../css/style.module.css";
import { PortableText } from "@portabletext/react";
export default function BlogItem(props) {
  const heading = {
    types: {
      block: ({ value }) => {
        return (
          <h5 className={classes.postHeader}>
            <i>{value.children[0].text}</i>
          </h5>
        );
      },
    },
  };
  return (
    <div className={classes.post1}>
      <div className={classes.blogImg}>
        <p className={classes.postDate}>{props.date}</p>
      </div>

      <PortableText value={props.heading} components={heading} />
      <p>
        <a href="#" className={classes.postDetails}>
          Read More
        </a>
      </p>
    </div>
  );
}
