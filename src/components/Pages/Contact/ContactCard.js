import classes from "../../../css/contact.module.css";
import { FaPhone, FaLocationArrow, FaEnvelope } from "react-icons/fa";
export default function ContactCard(props) {
  return (
    <div className={classes.contactCard}>
      <div className={classes.contactCardContainer}>
        <div className={classes.location}>
          <FaLocationArrow className={classes["fa-location-dot"]} />
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
          {props.numbers &&
            props.numbers.map((item, index) => (
              <p className={classes.phoneNumber1}>{item.number}</p>
            ))}
        </div>
        <div className={classes.emailAddress}>
          <FaEnvelope className={classes["fa-envelope"]} />
          <h5 className={classes.emailAddressFirstText}>Email Address</h5>
          <p className={classes.churchEmail}>{props.email}</p>
        </div>
      </div>
    </div>
  );
}
