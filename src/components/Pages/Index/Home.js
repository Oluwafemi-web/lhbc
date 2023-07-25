import Carousel from "./Carousel";
import IndexAbout from "./IndexAbout";
import Donation from "./Donation";
import Sermon from "./Sermon";
import Organizations from "./Organizations";
import IndexContact from "./IndexContact";
import IndexBlog from "./IndexBlog";
export default function Home() {
  return (
    <div className="main">
      <Carousel />
      <IndexAbout />
      <Donation />
      <Sermon />
      <Organizations />
      <IndexContact />
      <IndexBlog />
    </div>
  );
}
