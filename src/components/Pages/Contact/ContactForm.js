import classes from "../../../css/contact.module.css";
// import { FaPhone, FaLocationArrow, FaEnvelope } from "react-icons/fa";
export default function ContactForm() {
  return (
    <div className={classes.feedback}>
      <div className={classes.feedbackContainer}>
        <div className={classes.feedbackImg} />
        <form action="" className={classes.feedbackForm}>
          <input
            type="text"
            name=""
            id=""
            className={classes.contactName}
            placeholder="Name"
          />
          <input
            type="email"
            name=""
            id=""
            className={classes.contactEmail}
            placeholder="Email Address"
          />
          <input
            type="tel"
            name=""
            id=""
            className={classes.contactPhoneNumber}
            placeholder="Phone Number"
          />
          <textarea
            name=""
            id=""
            className={classes.contactFeedback}
            placeholder="Your Message"
            defaultValue={""}
          />
          <button type="submit" className={classes.feedbackSubmitButton}>
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
}
