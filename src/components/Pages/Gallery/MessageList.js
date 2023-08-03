import classes from "../../../css/gallery.module.css";
import MessageItems from "./MessageItems";
export default function MessageList(props) {
  return (
    <div className={classes.galleryMessageList}>
      <div className={classes.galleryMessageListContainer}>
        <input
          type="checkbox"
          name=""
          id="gridAndFlex"
          className={classes.messageDisplayType}
        />
        <label htmlFor="gridAndFlex" className={classes.gridAndFlex}>
          <span className={classes.displayToggle} />
        </label>
        <div className={classes.messageGallery}>
          {props.message &&
            props.message.map((item, index) => (
              <MessageItems
                key={index}
                title={item.title}
                date={item.date}
                description={item.description}
                preacher={item.preacher}
                audio={item.audio.asset.url}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
