import OrganizationItems from "./OrganizationItems";
import classes from "../../css/style.module.css";

export default function Organizations() {
  return (
    <div className={classes.organisation}>
      <p className={classes.organisationFirstText}>ORGANISATIONS</p>
      <h3 className={classes.organisationHeader}>OUR ORGANISATIONS</h3>
      <div className={classes.organisationContainer}>
        <OrganizationItems />
        <OrganizationItems />
        <OrganizationItems />

        {/* <div className={classes.womenUnion union">
          <div className={classes.womenUnionImg unionImg" />
          <h5 className={classes.womwnUnionHeader unionHeader">
            Men's Missionary Union
          </h5>
          <p className={classes.womenUnionText unionText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            aliquam expedita antium architecto, est quae voluptatibus deleniti
            totam. Molestias atque nihil cque voluptates esse deleniti voluptas,
            quae laborum architecto fuga modi quas nisi? Culpa illo ipsam fugit,
            non ullam ukkad kliad neid buramk miksea losuy veatis..
          </p>
          <p>
            <a href="#" className={classes.youthUnionDetails unionDetails">
              Read More
            </a>
          </p>
        </div>
        <div className={classes.youthUnion union">
          <div className={classes.youthUnionImg unionImg" />
          <h5 className={classes.youthUnionHeader unionHeader">
            Men's Missionary Union
          </h5>
          <p className={classes.youthUnionText unionText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            aliquam expedita antium architecto, est quae voluptatibus deleniti
            totam. Molestias atque nihil cque voluptates esse deleniti voluptas,
            quae laborum architecto fuga modi quas nisi? Culpa illo ipsam fugit,
            non ullam ukkad kliad neid buramk miksea losuy veatis..
          </p>
          <p>
            <a href="#" className={classes.youthUnionDetails unionDetails">
              Read More
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
}
