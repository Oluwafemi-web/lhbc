import { FaPhone } from "react-icons/fa";
export default function IndexContact() {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="contactCard">
          <FaPhone className="fa-phone-volume" />
          {/* <i className="fa-solid fa-phone-volume" /> */}
          <h3 className="callUs">Call Us</h3>
          {/* underline icon here */}
          <p className="phoneNumber">+2348033770288</p>
          <p className="gmail">lhbcportharcourt@gmail.com</p>
          <p className="contactAddress">
            Living Hope Baprist Church, High Tension Pole Road, Elelenwo, Port
            Harcourt, Nigeria.
          </p>
        </div>
        <div className="contactContent">
          <p className="getInTouch">GET IN TOUCH</p>
          <p className="contactContentHeader">You can always reach out to us</p>
          {/* undeerline icon here */}
          <p className="contactContentText">
            Lorem, ipsum dolor sit amet contetur adipising elit. Nemo nostrum
            consntur aliquid error aspor molestias hic lare voluptatum qui,
            itaque ea nitatibus commodi explicabo odio sint cum squi, fugiat
            provident!
          </p>
          <button className="contactButton">
            <a href="#" className="contactButton1">
              CONTACT US
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
