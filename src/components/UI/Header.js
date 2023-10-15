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
          {/* <p > */}
          <a
            href="https://www.google.com/maps/dir//Living+Hope+Baptist+Church+Elelenwo+PHC+High+Tension+Pole+Road,+Off+Standard+Road,+Elelenwo+Elelenwo/@4.8328662,7.0669595,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1069cd2fd8bc0373:0x75074f3e5a94f997!2m2!1d7.067011!2d4.8328455?entry=ttu"
            target="_blank"
            className={classes.headerChurchName}
          >
            <FaMapMarkerAlt className={classes["fa-location-dot"]} />
            LHBC Elelenwo Port Harcourt
          </a>
          {/* </p> */}
          <div className={classes.headerSocials}>
            <a
              href="https://web.facebook.com/profile.php?id=100082955765174"
              target="_blank"
            >
              <FaFacebook className={classes.headerFacebook} />
            </a>
            <a href="" target="_blank">
              <FaTwitter className={classes.headerTwitter} />
            </a>
            <a href="" target="_blank">
              <FaYoutube className={classes.headerYoutube} />
            </a>
            <a href="https://www.instagram.com/lhbc_phc/" target="_blank">
              <FaInstagram className={classes.headerInstagram} />
            </a>
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
              <a
                href="https://www.instagram.com/lhbc_phc/"
                target="_blank"
                className={classes.headerGallery}
              >
                GALLERY
              </a>
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
            {/* <li className={classes.headerUl}>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? `${classes.headerBlog} active` : classes.headerBlog
                }
              >
                BLOG
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}
