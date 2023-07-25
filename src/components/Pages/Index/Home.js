import Carousel from "./Carousel";
import IndexAbout from "./IndexAbout";
import Donation from "./Donation";
import Sermon from "./Sermon";
export default function Home() {
  return (
    <div className="main">
      <Carousel />
      <IndexAbout />
      <Donation />
      <Sermon />
    </div>
  );
}
