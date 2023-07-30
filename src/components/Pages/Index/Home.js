import Carousel from "./Carousel";
import IndexAbout from "./IndexAbout";
import Donation from "./Donation";
import Sermon from "./Sermon";
import Organizations from "../../UI/Organizations";
import IndexContact from "./IndexContact";
import IndexBlog from "./IndexBlog";
import { useLoaderData } from "react-router-dom";
import sanityClient from "../../../client";

export async function HomeData() {
  const response = await sanityClient
    .fetch(
      `*[type == home]{
      carousel[]{
        heading,
        subheading,
        description,
        image{
          asset->{
            url
          }
        }

      }
    }`
    )
    .then((data) => data[0]);
  return response;
}

export default function Home() {
  const test = useLoaderData();
  const { carousel } = test;
  console.log(carousel);
  return (
    <>
      <Carousel carouselData={carousel} />
      <IndexAbout />
      <Donation />
      <Sermon />
      <Organizations />
      <IndexContact />
      <IndexBlog />
    </>
  );
}
