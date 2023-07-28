import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerSocialContainer">
          <p className="headerChurchName">
            <FaMapMarkerAlt className="fa-location-dot" />
            LHBC Elelenwo Port Harcourt
          </p>
          <div className="headerSocials">
            <FaFacebook className="headerFacebook" />
            <FaTwitter className="headerTwitter" />
            <FaYoutube className="headerYoutube" />
            <FaInstagram className="headerInstagram" />
          </div>
        </div>
        <div className="navbar">
          <div className="headerLogo" />
          <input type="checkbox" name="" id="hamburger" className="hamburger" />
          <label htmlFor="hamburger" className="hamburgerMenu">
            <span className="hamburgerLine" />
          </label>
          <ul className="navMenu">
            <li className="headerUl">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `headerHome ${isActive ? "active" : undefined}`
                }
                end
              >
                HOME
              </NavLink>
            </li>
            <li className="headerUl ">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `headerAbout ${isActive ? "active" : undefined}`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li className="headerUl ">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `headerGallery ${isActive ? "active" : undefined}`
                }
              >
                GALLERY
              </NavLink>
            </li>
            <li className="headerUl ">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `headerContact ${isActive ? "active" : undefined}`
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li className="headerUl ">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `headerBlog ${isActive ? "active" : undefined}`
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
