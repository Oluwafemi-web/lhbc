import { FaStar } from "react-icons/fa";
export default function Donation() {
  return (
    <div className="donation">
      <FaStar className="fa-star" />
      {/* <i className="fa-solid fa-star" /> */}
      <h1 className="donationHeader">
        "Pray! and listen to God! You can do this alone, but find somebody to do
        it with you"
      </h1>
      <p className="donationText">
        As you give to God, he's going to bless you
      </p>
      <button className="donationButton1">
        <a href="#" className="donationButton">
          DONATE
        </a>
      </button>
    </div>
  );
}
