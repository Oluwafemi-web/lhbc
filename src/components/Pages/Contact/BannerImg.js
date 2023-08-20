import classes from "../../../css/contact.module.css";
export default function BannerImg(props) {
  return (
    props.banner &&
    props.banner.map((item, index) => (
      <div
        className={classes.contactBanner}
        key={index}
        style={{
          background: `linear-gradient(#011635be, #011635be), url(${item.bannerimage.asset.url})`,
        }}
      >
        <h4 className={classes.contactBannerMainText}>Contact US</h4>
      </div>
    ))
  );
}
