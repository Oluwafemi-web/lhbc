import classes from "../../../css/about.module.css";
export default function BannerImg(props) {
  return (
    props.banner &&
    props.banner.map((item, index) => (
      <div
        className={classes.hero}
        key={index}
        style={{
          background: `linear-gradient(#011635be, #011635be), url(${item.image.asset.url}) fixed`,
        }}
      >
        <h1 className={classes.heroMainText}>{item.pagetitle}</h1>
      </div>
    ))
  );
}
