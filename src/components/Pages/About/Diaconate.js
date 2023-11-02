import classes from "../../../css/about.module.css";
import DiaconateItem from "./DiaconateItem";
export default function Diaconate(props) {
  return (
    <div className={classes.diaconate}>
      <div className={classes.diaconateContainer}>
        <p className={classes.diaconateFirstText}>Diaconate</p>
        <h3 className={classes.diaconateHeader}>SERVING DEACONS</h3>
        <img src={props.img} alt="" className="" style={{ width: "100%" }} />

        {/* <div className={classes.deaconsList}>
          {props.deaconDetails &&
            props.deaconDetails.map((item, index) => (
              <DiaconateItem
                key={index}
                duration={index * 0.5}
                image={item.image.asset.url}
                name={item.name}
              />
            ))}
        </div> */}
      </div>
    </div>
  );
}
