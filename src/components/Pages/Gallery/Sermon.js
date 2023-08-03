import BannerImg from "./BannerImg";
import LatestMessage from "./LatestMessage";
import MessageList from "./MessageList";
import NextEvent from "../../UI/NextEvent";
import SideBar from "./SideBar";
import classes from "../../../css/gallery.module.css";
import sanityClient from "../../../client";
import { useLoaderData } from "react-router-dom";
import parse from "date-fns/parse";
import format from "date-fns/format";

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
          image{
            asset->{
              url
            }
          },
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

  //get the dates from the sermons array
  const dates = sermons.map((item) => item.date);

  //parse dates into computer format
  const parsedDate = dates.map((element) => {
    const formattedInput = element.replace(/(\d+)(st|nd|rd|th)/, "$1"); // Remove the 'st', 'nd', 'rd', or 'th' suffix.

    return parse(formattedInput, "d MMMM yyyy", new Date());
  });

  //add parsed dates to the objects
  var sermonsParsed = sermons.map((item, index) => {
    parsedDate.forEach((parsed) => {
      item.parsedDate = parsed;
    });
    return item;
  });

  // get the latest sermon from the parsed sermon array
  sermonsParsed = sermons.map((item, index) => {
    return {
      ...item,
      parsedDate: parsedDate[index], // Assign the parsedDate to each sermon item
    };
  });

  // Sort sermonsParsed array in descending order based on parsedDate
  sermonsParsed.sort((a, b) => b.parsedDate - a.parsedDate);

  // Get the latest item from the sorted array

  const latestSermon = sermonsParsed[0];
  console.log(latestSermon);
  return (
    <>
      <BannerImg bannerDetails={banner} />
      <div className={classes.mainContainer}>
        <SideBar />
        <LatestMessage
          title={latestSermon.title}
          preacher={latestSermon.preacher}
          date={latestSermon.date}
          description={latestSermon.description}
          audio={latestSermon.audioURL}
        />
        <MessageList message={sermonsParsed} />
      </div>
      <NextEvent />
    </>
  );
}
