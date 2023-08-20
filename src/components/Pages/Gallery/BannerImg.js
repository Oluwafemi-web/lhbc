import classes from "../../../css/gallery.module.css";
export default function BannerImg(props) {
  return (
    props.bannerDetails &&
    props.bannerDetails.map((item, index) => (
      <div
        className={classes.galleryBanner}
        key={index}
        style={{
          background: `linear-gradient(#00000081, #00000081), url(${item.image.asset.url})`,
        }}
      >
        <h3 className={classes.galleryBannerMainText}>{item.pagetitle}</h3>
      </div>
    ))
  );
}
