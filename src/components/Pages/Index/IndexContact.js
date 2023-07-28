import { FaPhone } from "react-icons/fa";
import classes from "../../../css/style.module.css";
export default function IndexContact() {
  return (
    <div className={classes.contact}>
      <div className={classes.contactContainer}>
        <div className={classes.contactCard}>
          <FaPhone className={classes["fa-phone-volume"]} />
          {/* <i className={classes.fa-solid fa-phone-volume" /> */}
          <h3 className={classes.callUs}>Call Us</h3>
          {/* underline icon here */}
          <p className={classes.phoneNumber}>+2348033770288</p>
          <p className={classes.gmail}>lhbcportharcourt@gmail.com</p>
          <p className={classes.contactAddress}>
            Living Hope Baprist Church, High Tension Pole Road, Elelenwo, Port
            Harcourt, Nigeria.
          </p>
        </div>
        <div className={classes.contactContent}>
          <p className={classes.getInTouch}>GET IN TOUCH</p>
          <p className={classes.contactContentHeader}>
            You can always reach out to us
          </p>
          {/* undeerline icon here */}
          <p className={classes.contactContentText}>
            Lorem, ipsum dolor sit amet contetur adipising elit. Nemo nostrum
            consntur aliquid error aspor molestias hic lare voluptatum qui,
            itaque ea nitatibus commodi explicabo odio sint cum squi, fugiat
            provident!
          </p>
          <button className={classes.contactButton}>
            <a href="#" className={classes.contactButton1}>
              CONTACT US
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
