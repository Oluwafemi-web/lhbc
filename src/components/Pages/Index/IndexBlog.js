import classes from "../../../css/style.module.css";
import BlogItem from "../../UI/BlogItem";
export default function IndexBlog() {
  return (
    <div className={classes.blog}>
      {/* use slider for blog */}
      <p className={classes.blogFirstText}>OUR BLOG</p>
      <h3 className={classes.blogHeader}>CATCH OUR LATEST UPDATES</h3>
      {/* underline icon here */}
      <div className={classes.blogPosts}>
        <BlogItem />
        <BlogItem />
        <BlogItem />

        {/* <div className={classes.post1">
          <div className={classes.blogImg">
            <p className={classes.postDate">Oct 16, 2020</p>
          </div>
          <h5 className={classes.postHeader">
            <i>Giving to God - Active ways to get blessed</i>
          </h5>
          <p>
            <a href="#" className={classes.postDetails">
              Read More
            </a>
          </p>
        </div>
        <div className={classes.post2">
          <div className={classes.blogImg">
            <p className={classes.postDate">Oct 16, 2020</p>
          </div>
          <h5 className={classes.postHeader">
            <i>Giving to God - Active ways to get blessed</i>
          </h5>
          <p>
            <a href="#" className={classes.postDetails">
              Read More
            </a>
          </p>
        </div>
        <div className={classes.post3">
          <div className={classes.blogImg">
            <p className={classes.postDate">Oct 16, 2020</p>
          </div>
          <h5 className={classes.postHeader">
            <i>Giving to God - Active ways to get blessed</i>
          </h5>
          <p>
            <a href="#" className={classes.postDetails">
              Read More
            </a>
          </p>
        </div> */}
        {/* slider button here */}
      </div>
    </div>
  );
}
