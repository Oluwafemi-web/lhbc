import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaStar,
} from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import QuickLinks from "./QuickLinks";
import Updates from "./Updates";
import classes from "../../css/Footer.module.css";
export default function Footer(props) {
  const about = {
    types: {
      block: ({ value }) => {
        return (
          <p className={classes.footerAboutText}>{value.children[0].text}</p>
        );
      },
    },
  };
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        {props.aboutus &&
          props.aboutus.map((item, index) => (
            <div className={classes.footerAbout} key={index}>
              <h4 className={classes.footerAboutHeader}>About US</h4>
              <PortableText value={item.description} components={about} />
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
          ))}

        <div className={classes.footerLinks}>
          <h4 className={classes.footerLinksHeader}>Quick Links</h4>
          {props.quicklinks &&
            props.quicklinks.map((item, index) => (
              <QuickLinks quicklink={item.title} key={index} />
            ))}
        </div>
        <div className={classes.footerUpdates}>
          <h4 className={classes.footerUpdatesHeader}>Updates</h4>
          {props.updates &&
            props.updates.map((item, index) => (
              <>
                <Updates title={item.heading} date={item.date} key={index} />
                {/* <hr /> */}
              </>
            ))}
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
