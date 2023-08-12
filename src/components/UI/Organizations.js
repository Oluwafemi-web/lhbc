import OrganizationItems from "./OrganizationItems";
import classes from "../../css/style.module.css";

export default function Organizations(props) {
  return (
    <div className={classes.organisation}>
      <p className={classes.organisationFirstText}>ORGANISATIONS</p>
      <h3 className={classes.organisationHeader}>OUR ORGANISATIONS</h3>
      <div className={classes.organisationContainer}>
        {props.organizationDetails &&
          props.organizationDetails.map((item, index) => (
            <OrganizationItems
              key={index}
              duration={index * 0.5}
              image={item.image.asset.url}
              heading={item.organization}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
}
