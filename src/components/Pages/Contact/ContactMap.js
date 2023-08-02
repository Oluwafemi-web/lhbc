import classes from "../../../css/contact.module.css";
export default function ContactMap() {
  return (
    <div className={classes.locateUs}>
      <div className={classes.locateUsContainer}>
        <h4 className={classes.locateUsFirstText}>Locate US</h4>
        <div className={classes.map}>
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height={500}
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Living%20Hope%20Baptist%20Church%20Elelenwo%20PHC,%20Rumurolu,%20Nigeria+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            >
              &lt;a href="https://www.maps.ie/population/"&gt;Population
              calculator map&lt;/a&gt;
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
