import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaStar,
} from "react-icons/fa";
import QuickLinks from "./QuickLinks";
import Updates from "./Updates";
import classes from "../../css/Footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerAbout}>
          <h4 className={classes.footerAboutHeader}>About US</h4>
          <p className={classes.footerAboutText}>
            We are a community of people loving each other and our Lord. Being
            completely humble gentle, patient and bearing with one another in
            love. We are a community of the Lord
          </p>
          <div className={classes.socials}>
            <div className={classes.socialIcon}>
              <FaFacebook className={classes.facebook} />
            </div>
            <div className={classes.socialIcon}>
              <FaTwitter className={classes.twitter} />
            </div>
            <div className={classes.socialIcon}>
              <FaYoutube className={classes.youtube} />
            </div>
            <div className={classes.socialIcon}>
              <FaInstagram className={classes.instagram} />
            </div>
          </div>
        </div>
        <div className={classes.footerLinks}>
          <h4 className={classes.footerLinksHeader}>Quick Links</h4>
          <QuickLinks />
          <QuickLinks />
          <QuickLinks />
          <QuickLinks />
          <QuickLinks />
          <QuickLinks />
          {/* <p className={classes.link">
            <a href="#" className={classes.link2">
              <i className={classes.fa-solid fa-star footerStarIcon" />
              Who are we?
            </a>
          </p>
          <p className={classes.link">
            <a href="#" className={classes.link3">
              <i className={classes.fa-solid fa-star footerStarIcon" />
              Who are we?
            </a>
          </p>
          <p className={classes.link">
            <a href="#" className={classes.link4">
              <i className={classes.fa-solid fa-star footerStarIcon" />
              Who are we?
            </a>
          </p>
          <p className={classes.link">
            <a href="#" className={classes.link5">
              <i className={classes.fa-solid fa-star footerStarIcon" />
              Who are we?
            </a>
          </p>
          <p className={classes.link">
            <a href="#" className={classes.link6">
              <i className={classes.fa-solid fa-star footerStarIcon" />
              Who are we?
            </a>
          </p> */}
        </div>
        <div className={classes.footerUpdates}>
          <h4 className={classes.footerUpdatesHeader}>Updates</h4>
          <Updates />
          <hr />
          {/* <div className={classes.secondUpdate">
            <div className={classes.updateImg" />
            <div className={classes.footerUpdatecontainer">
              <h5 className={classes.updateHeader">
                Giving To God - Active ways to get blessed
              </h5>
              <p className={classes.footerUpdateDate">
                <i className={classes.fa-solid fa-calendar-plus calendarIcon" /> October
                16, 2020
              </p>
            </div>
          </div> */}
          <Updates />
        </div>
        <div className={classes.footerNewsletter}>
          <h4 className={classes.footerNewsletterHeader}>Newsletter</h4>
          <p className={classes.footerNewsletterText}>
            Sign up to receive daily updates and live feeds.
            <span>
              Your Information is private and safe. We won't spam you.
            </span>
          </p>
          <div className={classes.subscribe}>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className={classes.newsletterEmail}
            />
            <button type="submit" className={classes.newsletterButton}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <dt />
      <div className={classes["copyright - Container"]}>
        <div className={classes.copyrightContainer}>
          <p className={classes.copyright}>
            Copyright | 2020 | Living Hope Baptist Church
          </p>
          <p className={classes.privacyAndTerms}>
            Privacy Policy | Terms &amp; Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
