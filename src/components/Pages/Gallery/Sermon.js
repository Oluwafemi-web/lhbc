import BannerImg from "./BannerImg";
import LatestMessage from "./LatestMessage";
import MessageList from "./MessageList";
import NextEvent from "../../UI/NextEvent";
import SideBar from "./SideBar";
import classes from "../../../css/gallery.module.css";
import sanityClient from "../../../client";
import { useLoaderData } from "react-router-dom";

export async function SermonData() {
  try {
    const response = await sanityClient.fetch(
      `*[_type == 'gallery'] {
        banner[]{
         pagetitle,
          image {
            asset->{
              url
            }
          }
        },
        sermons[]{
          title,
          preacher,
          date,
          description,
          'audioURL': audio.asset->url
        },
      }`
    );

    return response[0]; // Assuming the response is an array, you may want to access the first element.
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export default function Sermon() {
  const test = useLoaderData();
  const { banner, sermons } = test;
  return (
    <>
      <BannerImg bannerDetails={banner} />
      <div className={classes.mainContainer}>
        <SideBar />
        <LatestMessage />
        <MessageList message={sermons} />
      </div>
      <NextEvent />
    </>
  );
}
