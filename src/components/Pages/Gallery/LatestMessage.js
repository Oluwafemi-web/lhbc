import classes from "../../../css/gallery.module.css";
import MediaIcons from "./MediaIcons";
export default function () {
  return (
    <div className={classes.galleryMessage}>
      <div className={classes.galleryMessageContainer}>
        <h4 className={classes.messageFirstText}>LATEST SERMON</h4>
        <div className={classes.currentMessage}>
          <h4 className={classes.currentMessageFirstText}>
            Activating Goodnews Part 1
          </h4>
          <p className={classes.preacher}>
            - Rev'd Steve Ayorinde{" "}
            <span className={classes.messageDate}>27th October 2020</span>
          </p>
          <p className={classes.message}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            perferendis illum laudantium amet necessitatibus ut enim officia
            nulla nisi sapiente? Distinctio ex labore consectetur dicta possimus
            dolorem quia quibusdam sequi cupiditate ab porro, incidunt autem
            beatae provident excepturi. Repudiandae atque officia quaerat
            praesentium.
            <br />
            <br />
            Iure nobis architecto expedita consequuntur similique dignissimos
            vel magnam delectus itaque odio, autem iste corporis. Deleniti
            dolore cumque ad numquam iusto officiis ratione deserunt perferendis
            cupiditate doloremque rerum animi molestias officia assumenda
            corrupti, maxime blanditiis laboriosam alias voluptatum tenetur
            quisquam earum quis debitis ea! Nulla fugiat asperiores
            reprehenderit quaerat quidem, nobis eveniet. Libero est odit nobis
            autem!
            <br />
            <br />
          </p>
          <MediaIcons />
        </div>
        <button>
          <a href="#" className={classes.sermonButton}>
            Previous Sermons
          </a>
        </button>
      </div>
    </div>
  );
}
