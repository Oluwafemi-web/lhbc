import classes from "../../../css/gallery.module.css";
import { useMediaQuery } from "react-responsive";

export default function BannerImg(props) {
  const mobile = useMediaQuery({ maxWidth: 576 });

  return (
    props.bannerDetails &&
    props.bannerDetails.map((item, index) => (
      <div
        className={classes.galleryBanner}
        key={index}
        style={{
          background: mobile
            ? `linear-gradient(rgba(1, 22, 53, 0.745), rgba(1, 22, 53, 0.745)), url(${item.mobileimage.asset.url})`
            : `linear-gradient(rgba(1, 22, 53, 0.745), rgba(1, 22, 53, 0.745)), url(${item.image.asset.url})`,
        }}
      >
        <h3 className={classes.galleryBannerMainText}>{item.pagetitle}</h3>
      </div>
    ))
  );
}
