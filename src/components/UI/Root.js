import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import classes from "../../css/style.module.css";

export default function RootLayout() {
  return (
    <>
      <Header />
      <div className={classes.main}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
