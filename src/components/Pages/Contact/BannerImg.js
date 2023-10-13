import classes from "../../../css/contact.module.css";
import { useMediaQuery } from "react-responsive";

export default function BannerImg(props) {
  const mobile = useMediaQuery({ maxWidth: 576 });

  return (
    props.banner &&
    props.banner.map((item, index) => (
      <div
        className={classes.contactBanner}
        key={index}
        style={{
          background: mobile
            ? `linear-gradient(rgba(1, 22, 53, 0.745), rgba(1, 22, 53, 0.745)), url(${item.mobileimage.asset.url})`
            : `linear-gradient(rgba(1, 22, 53, 0.745), rgba(1, 22, 53, 0.745)), url(${item.bannerimage.asset.url})`,
        }}
      >
        <h4 className={classes.contactBannerMainText}>Contact US</h4>
      </div>
    ))
  );
}
