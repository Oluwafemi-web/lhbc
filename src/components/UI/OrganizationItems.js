import classes from "../../css/style.module.css";

export default function OrganizationItems() {
  return (
    <div className={classes["union"]}>
      <div className={classes["unionImg"]} />
      <h5 className={classes["unionHeader"]}>Men's Missionary Union</h5>
      <p className={classes["unionText"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam
        expedita antium architecto, est quae voluptatibus deleniti totam.
        Molestias atque nihil cque voluptates esse deleniti voluptas, quae
        laborum architecto fuga modi quas nisi? Culpa illo ipsam fugit, non
        ullam ukkad kliad neid buramk miksea losuy veatis...
      </p>
      <p>
        <a href="#" className={classes["unionDetails"]}>
          Read More
        </a>
      </p>
    </div>
  );
}
