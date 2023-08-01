import classes from "../../../css/style.module.css";
import BlogItem from "../../UI/BlogItem";
export default function IndexBlog(props) {
  return (
    <div className={classes.blog}>
      {/* use slider for blog */}
      <p className={classes.blogFirstText}>OUR BLOG</p>
      <h3 className={classes.blogHeader}>CATCH OUR LATEST UPDATES</h3>
      {/* underline icon here */}
      <div className={classes.blogPosts}>
        {props.blogDetails &&
          props.blogDetails.map((item, index) => (
            <BlogItem
              key={index}
              image={item.image.asset.url}
              date={item.date}
              heading={item.heading}
            />
          ))}
        {/* <BlogItem />
        <BlogItem />
        <BlogItem /> */}

        {/* slider button here */}
      </div>
    </div>
  );
}
