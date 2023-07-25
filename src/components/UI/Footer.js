import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaStar,
} from "react-icons/fa";
import QuickLinks from "./QuickLinks";
import Updates from "./Updates";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerAbout">
          <h4 className="footerAboutHeader">About US</h4>
          <p className="footerAboutText">
            We are a community of people loving each other and our Lord. Being
            completely humble gentle, patient and bearing with one another in
            love. We are a community of the Lord
          </p>
          <div className="socials">
            <div className="socialIcon">
              <FaFacebook className="facebook" />
            </div>
            <div className="socialIcon">
              <FaTwitter className="twitter" />
            </div>
            <div className="socialIcon">
              <FaYoutube className="youtube" />
            </div>
            <div className="socialIcon">
              <FaInstagram className="instagram" />
            </div>
          </div>
        </div>
        <div className="footerLinks">
          <h4 className="footerLinksHeader">Quick Links</h4>
          <QuickLinks />
          <QuickLinks />
          <QuickLinks />
          <QuickLinks />
          <QuickLinks />
          <QuickLinks />
          {/* <p className="link">
            <a href="#" className="link2">
              <i className="fa-solid fa-star footerStarIcon" />
              Who are we?
            </a>
          </p>
          <p className="link">
            <a href="#" className="link3">
              <i className="fa-solid fa-star footerStarIcon" />
              Who are we?
            </a>
          </p>
          <p className="link">
            <a href="#" className="link4">
              <i className="fa-solid fa-star footerStarIcon" />
              Who are we?
            </a>
          </p>
          <p className="link">
            <a href="#" className="link5">
              <i className="fa-solid fa-star footerStarIcon" />
              Who are we?
            </a>
          </p>
          <p className="link">
            <a href="#" className="link6">
              <i className="fa-solid fa-star footerStarIcon" />
              Who are we?
            </a>
          </p> */}
        </div>
        <div className="footerUpdates">
          <h4 className="footerUpdatesHeader">Updates</h4>
          <Updates />
          <hr />
          {/* <div className="secondUpdate">
            <div className="updateImg" />
            <div className="footerUpdatecontainer">
              <h5 className="updateHeader">
                Giving To God - Active ways to get blessed
              </h5>
              <p className="footerUpdateDate">
                <i className="fa-solid fa-calendar-plus calendarIcon" /> October
                16, 2020
              </p>
            </div>
          </div> */}
          <Updates />
        </div>
        <div className="footerNewsletter">
          <h4 className="footerNewsletterHeader">Newsletter</h4>
          <p className="footerNewsletterText">
            Sign up to receive daily updates and live feeds.{" "}
            <span>
              Your Information is private and safe. We won't spam you.
            </span>
          </p>
          <div className="subscribe">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="newsletterEmail"
            />
            <button type="submit" className="newsletterButton">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <dt />
      <div className="copyright-Container">
        <div className="copyrightContainer">
          <p className="copyright">
            Copyright | 2020 | Living Hope Baptist Church
          </p>
          <p className="privacyAndTerms">
            Privacy Policy | Terms &amp; Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
