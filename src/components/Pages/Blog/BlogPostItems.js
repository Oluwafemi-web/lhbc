import classes from "../../../css/blog.module.css";
export default function BlogPostItems() {
  return (
    <div className={classes.blogPost1}>
      <div className={classes.blogPostImg}>
        <p className={classes.blogPostDate}>Oct 16, 2020</p>
      </div>
      <div className={classes.blogContent}>
        <h5 className={classes.blogPostHeader}>
          Giving to God - Active ways to get blessed
        </h5>
        <p>
          <a href="#" className={classes.blogPostDetails}>
            Read More
          </a>
        </p>
      </div>
    </div>
  );
}
