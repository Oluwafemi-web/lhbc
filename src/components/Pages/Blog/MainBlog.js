import classes from "../../../css/blog.module.css";
import BlogPostItems from "./BlogPostItems";
import PopularPostItems from "./PopularPostItems";
import { FaSearch, FaCaretDown, FaStar } from "react-icons/fa";
export default function MainBlog() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.sideBar}>
        <div className={classes.sideBarContainer}>
          <div className={classes.categoryContent}>
            <input
              type="checkbox"
              name=""
              id="toggle"
              className={classes.toggle}
            />
            <label htmlFor="toggle" className={classes.category}>
              Category
              <FaCaretDown className={classes["caretBtn"]} />
              {/* <i className={classes['fa-caret-down caretBtn']} /> */}
            </label>
            <form action="" className={classes.categoryItem}>
              <input
                type="checkbox"
                name=""
                id="faithful"
                className={classes.faithful}
              />
              <label
                htmlFor="faithful"
                className={classes.categoryLabelFaithful}
              >
                <FaStar className={classes["categoryIcon"]} />
                {/* <i className={classes['fa-star categoryIcon']} /> */}
                Faithful
              </label>
              <input
                type="checkbox"
                name=""
                id="jesuslove"
                className={classes.jesuslove}
              />
              <label
                htmlFor="jesuslove"
                className={classes.categoryLabelJesuslove}
              >
                <FaStar className={classes["categoryIcon"]} />
                {/* <i className={classes.fa-solid fa-star categoryIcon} /> */}
                Jesus' Love
              </label>
              <input
                type="checkbox"
                name=""
                id="sincerity"
                className={classes.sincerity}
              />
              <label
                htmlFor="sincerity"
                className={classes.categoryLabelSincerity}
              >
                <FaStar className={classes["categoryIcon"]} />
                {/* <i className={classes.fa-solid fa-star categoryIcon} /> */}
                Sincerity
              </label>
              <button type="submit" className={classes.categorySubmitButton}>
                Apply
              </button>
            </form>
          </div>
          <form className={classes.searchBarContainer}>
            <input
              type="search"
              name=""
              id=""
              className={classes.searchBar}
              placeholder="Search"
            />
            <button type="submit">
              <FaSearch className={classes["fa-magnifying-glass searchIcon"]} />
              {/* <i className={classes['fa-magnifying-glass searchIcon']} /> */}
            </button>
          </form>
        </div>
      </div>
      <div className={classes.blogPost}>
        <div className={classes.blogPostContainer}>
          <BlogPostItems />
          <BlogPostItems />
          <BlogPostItems />
          <BlogPostItems />
          <BlogPostItems />
          <BlogPostItems />

          <div className={classes.blogNavigationButtons}>
            <button className={classes.previousButton}>Prev</button>
            <button className={classes.firstButton}>01</button>
            <button className={classes.secondButton}>02</button>
            <button className={classes.nextButton}>Next</button>
          </div>
        </div>
      </div>
      <div className={classes.popularPost}>
        <div className={classes.popularPostContainer}>
          <h5 className={classes.popularPostHeader}>Popular Posts</h5>
          <PopularPostItems />
          <PopularPostItems />
          <PopularPostItems />
          <PopularPostItems />
          <PopularPostItems />
        </div>
      </div>
    </div>
  );
}
