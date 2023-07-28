import AboutContent from "./AboutContent";
import BannerImg from "./BannerImg";
import Diaconate from "./Diaconate";
import Organizations from "../../UI/Organizations";
import NextEvent from "../../UI/NextEvent";

export default function About() {
  return (
    <>
      <BannerImg />
      <AboutContent />
      <Diaconate />
      <Organizations />
      <NextEvent />
    </>
  );
}
