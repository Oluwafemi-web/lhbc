import classes from "../../../css/gallery.module.css";
import { FaSearch } from "react-icons/fa";
import { forwardRef } from "react";
import Select from "react-dropdown-select";

const SideBar = forwardRef((props, ref) => {
  const options = props.category;
  const yearoptions = props.years;
  // console.log(options);
  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarContainer}>
        <Select
          style={{ width: "20rem", padding: "20px" }}
          ref={props.categoryRef}
          className={classes.categoryBar}
          onChange={props.handleCategoryChange}
          placeholder="Category"
          labelField="category"
          valueField="category"
          options={options}
          searchable
          clearable
        />
        {/* <select
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
        </select> */}
        <form className={classes.searchBarContainer}>
          <Select
            style={{ borderRadius: "0.3rem" }}
            className={classes.yearBar}
            ref={props.yearRef}
            onChange={props.handleYearChange}
            placeholder="Year"
            labelField="year"
            valueField="year"
            options={yearoptions}
            searchable
            clearable
          />
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
