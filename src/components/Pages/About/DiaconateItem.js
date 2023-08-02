import classes from "../../../css/about.module.css";
export default function DiaconateItem(props) {
  return (
    <div className={classes.deacon}>
      <div
        className={classes.deaconImg}
        style={{
          background: `url(${props.image}) center/cover no-repeat`,
        }}
      />
      <p className={classes.deaconName}>{props.name}</p>
    </div>
  );
}
