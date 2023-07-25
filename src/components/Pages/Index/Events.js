import { FaCalendarDay } from "react-icons/fa";
export default function Events(props) {
  return (
    <div className={props.name}>
      <div className="askDate">
        <FaCalendarDay
          style={{ color: "#ac0909" }}
          className="fa-calendar-days"
        />
        {/* <i className="fa-solid fa-calendar-days" /> */}
        <p className="askDay">Mar 4</p>
        <p className="askTime">7:00am</p>
      </div>
      <div className="askText">
        <h4 className="askHeader">Operation ASK: 100 Days of seeking God</h4>
        <p>
          <a href="#" className="askDetails">
            Event Details
          </a>
        </p>
      </div>
    </div>
  );
}
