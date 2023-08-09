import logo from "../../images/logo.png";
import classes from "../../css/preloader.module.css";
export default function PreLoader() {
  return (
    <div className={classes["preloader-wrapper"]}>
      <img src={logo} />
    </div>
  );
}
