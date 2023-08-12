import { Link } from "react-router-dom";
import classes from "../../css/style.module.css";
import Header from "../UI/Header";
export default function ErrorPage() {
  return (
    <>
      <Header />
      <div
        className={classes.main}
        style={{ position: "relative", top: "30vh", fontSize: "20px" }}
      >
        <h1>An error occured</h1>
        <p>Could not find this page!</p>
        <p className={classes.homelink}>
          Back to <Link to="/">Homepage</Link>
        </p>
      </div>
    </>
  );
}
