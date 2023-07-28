import classes from "../../../css/about.module.css";
import DiaconateItem from "./DiaconateItem";
export default function Diaconate() {
  return (
    <div className={classes.diaconate}>
      <div className={classes.diaconateContainer}>
        <p className={classes.diaconateFirstText}>Diaconate</p>
        <h3 className={classes.diaconateHeader}>CHURCH DEACONS</h3>
        <div className={classes.deaconsList}>
          {/* use slider for the deacons list */}
          <DiaconateItem />
          <DiaconateItem />
          <DiaconateItem />

          {/* slider buttons */}
        </div>
      </div>
    </div>
  );
}