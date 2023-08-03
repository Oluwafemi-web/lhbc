import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import classes from "../../css/Header.module.css";
export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.headerSocialContainer}>
          <p className={classes.headerChurchName}>
            <FaMapMarkerAlt className={classes["fa-location-dot"]} />
            LHBC Elelenwo Port Harcourt
          </p>
          <div className={classes.headerSocials}>
            <FaFacebook className={classes.headerFacebook} />
            <FaTwitter className={classes.headerTwitter} />
            <FaYoutube className={classes.headerYoutube} />
            <FaInstagram className={classes.headerInstagram} />
          </div>
        </div>
        <div className={classes.navbar}>
          <div className={classes.headerLogo} />
          <input
            type="checkbox"
            name=""
            id="hamburger"
            className={classes.hamburger}
          />
          <label htmlFor="hamburger" className={classes.hamburgerMenu}>
            <span className={classes.hamburgerLine} />
          </label>
          <ul className={classes.navMenu}>
            <li className={classes.headerUl}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${classes.headerHome} active` : classes.headerHome
                }
                end
              >
                HOME
              </NavLink>
            </li>
            <li className={classes.headerUl}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.headerAbout} active`
                    : classes.headerAbout
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li className={classes.headerUl}>
              <NavLink
                to="/sermon"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.headerGallery} active`
                    : classes.headerGallery
                }
              >
                SERMON
              </NavLink>
            </li>
            <li className={classes.headerUl}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.headerContact} active`
                    : classes.headerContact
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li className={classes.headerUl}>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? `${classes.headerBlog} active` : classes.headerBlog
                }
              >
                BLOG
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
