import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
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
              <a href="./index.html" className="headerHome">
                HOME
              </a>
            </li>
            <li className="headerUl ">
              <a href="./about.html" className="headerAbout">
                ABOUT
              </a>
            </li>
            <li className="headerUl ">
              <a href="./gallery.html" className="headerGallery">
                GALLERY
              </a>
            </li>
            <li className="headerUl ">
              <a href="./contact.html" className="headerContact">
                CONTACT
              </a>
            </li>
            <li className="headerUl ">
              <a href="./blog.html" className="headerBlog">
                BLOG
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
