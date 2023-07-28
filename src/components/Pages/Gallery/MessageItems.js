import classes from "../../../css/gallery.module.css";
export default function MessageItems() {
  return (
    <div className={classes.message1}>
      <div className={classes.messageImg} />
      <div className={classes.messageContentContainer}>
        <h5 className={classes.messageHeader}>Activating Good news Part 1</h5>
        <p className={classes.messagePreacher}>
          - Rev'd Steve Ayorinde{" "}
          <span className={classes.messageDateAndMonth}>27th October 2020</span>
        </p>
        <p className={classes.messageContent}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          inventore obcaecati ex beatae eos ducimus repudiandae fuga, quaerat
          vel quidem, architecto, nulla qui? Error perferendis cumque doloremque
          minima, nesciunt natus. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Sed praesentium ad saepe optio ipsam? Soluta at
          ipsam explicabo iusto minima!
        </p>
        <button className={classes.messageReadmoreBtn}>
          <a href="#" className={classes.messageReadmore}>
            Read More
          </a>
        </button>
      </div>
    </div>
  );
}
