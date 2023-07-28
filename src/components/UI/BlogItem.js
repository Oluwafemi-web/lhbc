import classes from "../../css/style.module.css";
export default function BlogItem() {
  return (
    <div className={classes.post1}>
      <div className={classes.blogImg}>
        <p className={classes.postDate}>Oct 16, 2020</p>
      </div>
      <h5 className={classes.postHeader}>
        <i>Giving to God - Active ways to get blessed</i>
      </h5>
      <p>
        <a href="#" className={classes.postDetails}>
          Read More
        </a>
      </p>
    </div>
  );
}
