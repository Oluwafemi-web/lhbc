import classes from "../../../css/contact.module.css";
import { FaPhone, FaLocationArrow, FaEnvelope } from "react-icons/fa";
export default function ContactCard() {
  return (
    <div className={classes.contactCard}>
      <div className={classes.contactCardContainer}>
        <div className={classes.location}>
          <FaLocationArrow className={classes["fa-location-dot"]} />
          {/* <i className={classes.fa-solid fa-location-dot} /> */}
          <h5 className={classes.locationFirstText}>Our Location</h5>
          <p className={classes.locationAddress}>
            Living Hope Baptist Church,{" "}
            <span className={classes.locationFirstSpan}>
              High Tension Pole Road,
            </span>{" "}
            <span className={classes.locationSecondSpan}>
              Elelenwo, Port Harcourt,
            </span>{" "}
            <span className={classes.locationThirdSpan}>Nigeria.</span>
          </p>
        </div>
        <div className={classes.phoneNumbers}>
          {/* <i className={classes['fa-phone']} /> */}
          <FaPhone className={classes["fa-phone"]} />
          <h5 className={classes.phoneNumberFirstText}>Phone Numbers</h5>
          <p className={classes.phoneNumber1}>+234 8033770288</p>
          <p className={classes.phoneNumber2}>+234 8062709310</p>
        </div>
        <div className={classes.emailAddress}>
          <FaEnvelope className={classes["fa-envelope"]} />
          {/* <i className={classes.fa-solid fa-envelope} /> */}
          <h5 className={classes.emailAddressFirstText}>Email Address</h5>
          <p className={classes.churchEmail}>lhbcportharcourt@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
