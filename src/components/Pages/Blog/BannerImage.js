import classes from "../../../css/blog.module.css";
export default function BannerImg() {
  return (
    <div className={classes.blogBanner}>
      <p className={classes.blogBannerFirstText}>Blog</p>
      <h3 className={classes.blogBannerMainText}>Latest Posts</h3>
    </div>
  );
}
