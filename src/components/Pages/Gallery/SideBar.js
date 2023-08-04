import classes from "../../../css/gallery.module.css";
import { FaSearch, FaCaretDown, FaStar } from "react-icons/fa";
import { forwardRef } from "react";
import { useRef } from "react";

const SideBar = forwardRef((props, ref) => {
  return (
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
          </label>
          <form action="" className={classes.categoryItem}>
            <input
              type="checkbox"
              name=""
              id="faithful"
              className={classes.faithful}
            />
            <label htmlFor="faithful" className={classes.categoryLabelFaithful}>
              <FaStar className={classes["categoryIcon"]} />
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
              Sincerity
            </label>
            <button type="submit" className={classes.categorySubmitButton}>
              Apply
            </button>
          </form>
        </div>
        <form className={classes.searchBarContainer}>
          <select
            name="year"
            id="year"
            className={classes.yearBar}
            ref={ref}
            onChange={props.handleYearChange}
          >
            <option value="#">Year</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2020</option>
            <option value={2020}>2021</option>
          </select>
          <input
            type="search"
            name=""
            id=""
            className={classes.searchBar}
            placeholder="Search"
          />
          <button type="submit">
            <FaSearch className={classes["searchIcon"]} />
            {/* <i className={classes['fa-magnifying-glass searchIcon']} /> */}
          </button>
        </form>
      </div>
    </div>
  );
});

export default SideBar;
