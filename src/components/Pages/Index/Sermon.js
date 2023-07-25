import { FaBible } from "react-icons/fa";
import image from "../../../images/sermonImage.jpeg";
export default function Sermon() {
  return (
    <div className="sermon">
      <h3 className="sermonHeader">
        <FaBible className="fa-book-bible sermonIcon" />
        {/* <i className="fa-solid fa-book-bible sermonIcon" /> */}
        TODAY'S SERMON
        <FaBible className="fa-book-bible sermonIcon" />
        {/* <i className="fa-solid fa-book-bible sermonIcon" /> */}
      </h3>
      <div className="sermonContainer">
        <img src={image} alt="" className="sermonImg" />
        <div className="sermonContent">
          <h4 className="sermonContentHeader">
            <i>Activating Goodnews</i>
          </h4>
          <p className="preacherName">
            <i>- Rev'd Steve Ayorinde</i>
          </p>
          <p className="sermonDate">
            <i>27th October 2020</i>
          </p>
          <p className="sermonContentText">
            Lorem ipsum dolor sit amet etur aisicing elit. Nemo laborum labore
            culpa fugiatias blanditiis doloribus a voluptate natur velit quaerat
            ipsum iste in, esse officia moitia, harum sit amet reprehenderit
            nihil facilis. Iure quia dicta ipsum nostrum nesciunt libero
            aliquid.
          </p>
        </div>
      </div>
    </div>
  );
}
