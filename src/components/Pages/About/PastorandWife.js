import classes from "../../../css/about.module.css";
export default function PastorandWife(props) {
  return (
    <div className={classes["pastor-and-wife"]}>
      <img src={props.img} alt="" className={classes["pastor-img"]} />
      <h3 className={classes["pastor-and-wife-text"]}>
        Revd Dr. Steve & Pst. Mrs. R.B Ayorinde
      </h3>
    </div>
  );
}
