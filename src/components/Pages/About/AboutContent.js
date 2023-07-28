import classes from "../../../css/about.module.css";
import { FaPlay } from "react-icons/fa";
export default function AboutContent() {
  return (
    <div className={classes.aboutContent}>
      <div className={classes.aboutContentContainer}>
        <div className={classes.aboutContentImg} />
        <div className={classes.aboutContentText}>
          <p className={classes.aboutContentFirstText}>ABOUT US</p>
          <h3 className={classes.aboutContentSecondText}>
            The Earth is the Lord's and it's fullness thereof
          </h3>
          <p className={classes.aboutContentMainText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            id illo est molestias, libero accusamus similique, iure doloribus
            nobis consequuntur repellendus autem atque. Alias beatae vitae,
            animi, expedita quo voluptates delectus aliquam quae fugiat sapiente
            accusantium itaque dignissimos exercitationem, quisquam eveniet
            explicabo sit voluptas quas in consequatur placeat molestias.
            Officiis quae aperiam autem aliquam iste rem tempore nesciunt?
            Corporis, quibusdam. Illo labore, qui, maxime totam quo repellendus
            rerum voluptatum est veniam quidem dolore accusamus iste quisquam,
            tenetur adipisci ipsam excepturi eos esse nobis eveniet praesentium
            harum a voluptate
          </p>
        </div>
        <div className={classes.message}>
          <div className={classes.message1}>
            <div className={classes.playIcon}>
              <FaPlay className={classes["fa-play"]} />
              {/* <i className={classes.fa-solid fa-play} /> */}
            </div>
            <div className={classes.messageContent}>
              <h4 className={classes.messageHeader}>Activating Goodnews</h4>
              <p className={classes.preacherName}>- Rev'd Steve Ayorinde</p>
              <p className={classes.sermonDate}>27th October 2020</p>
            </div>
          </div>
          <div className={classes.message2}>
            <div className={classes.playIcon}>
              <FaPlay className={classes["fa-play"]} />

              {/* <i className={classes.fa-solid fa-play} /> */}
            </div>
            <div className={classes.messageContent}>
              <h4 className={classes.messageHeader}>Activating Goodnews</h4>
              <p className={classes.preacherName}>- Rev'd Steve Ayorinde</p>
              <p className={classes.sermonDate}>27th October 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
