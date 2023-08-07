import classes from "../../../css/gallery.module.css";
import { FaSearch } from "react-icons/fa";
import { forwardRef } from "react";

const SideBar = forwardRef((props, ref) => {
  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarContainer}>
        <select
          className={classes.categoryBar}
          ref={props.categoryRef}
          onChange={props.handleCategoryChange}
        >
          <option value="#" disabled selected hidden>
            Category
          </option>
          <option value="all">All</option>

          {props.category &&
            props.category.map((item, index) => (
              <option value={item.category} key={index}>
                {item.category}
              </option>
            ))}
        </select>
        <form className={classes.searchBarContainer}>
          <select
            name="year"
            id="year"
            className={classes.yearBar}
            ref={props.yearRef}
            onChange={props.handleYearChange}
          >
            <option value="#" disabled selected hidden>
              Year
            </option>
            <option value="all">All</option>
            {props.years &&
              props.years.map((item, index) => (
                <option value={item.year} key={index}>
                  {item.year}
                </option>
              ))}
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
          </button>
        </form>
      </div>
    </div>
  );
});

export default SideBar;
