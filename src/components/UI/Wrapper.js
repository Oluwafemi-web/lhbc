import classes from "../../css/style.module.css";
export default function Wrapper(props) {
  return <div className={classes.container}>{props.children}</div>;
}
