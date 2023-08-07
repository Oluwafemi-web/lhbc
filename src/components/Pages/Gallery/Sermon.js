import BannerImg from "./BannerImg";
import LatestMessage from "./LatestMessage";
import MessageList from "./MessageList";
import NextEvent from "../../UI/NextEvent";
import SideBar from "./SideBar";
import classes from "../../../css/gallery.module.css";
import sanityClient from "../../../client";
import { useLoaderData } from "react-router-dom";
import parse from "date-fns/parse";
import { useRef, useState } from "react";

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
          category,
          description,
          'audioURL': audio.asset->url
        },
        years[]{
          year,
        },
        category[]{
          category,
        }
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
  const { banner, sermons, years, category } = test;

  const [filtered, setIsFiltered] = useState(false);
  const [filteredSermons, setFilteredSermons] = useState([]);

  const yearRef = useRef(null);
  const categoryRef = useRef(null);
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

  const handleYearHandler = () => {
    const yearValue = yearRef.current.value;
    const filterCondition = (item) =>
      item.parsedDate.getFullYear() === +yearValue;

    if (yearValue === "#" || yearValue === "all") {
      return;
    } else {
      setIsFiltered(false);
      setIsFiltered(true);
      const sermonFiltered = (
        filteredSermons.length !== 0 ? filteredSermons : sermonsParsed
      ).filter(filterCondition);
      setFilteredSermons(sermonFiltered);
      // return sermonFiltered;
    }
  };

  const categoryHandler = () => {
    const categoryValue = categoryRef.current.value;
    console.log(categoryValue);
    const filterCondition = (item) => item.category === categoryValue;

    if (categoryValue === "#" || categoryValue == "all") {
      setIsFiltered(false);
      return;
    } else {
      setIsFiltered(true);
      const sermonFiltered = (
        filteredSermons.length !== 0 ? filteredSermons : sermonsParsed
      ).filter(filterCondition);
      setFilteredSermons(sermonFiltered);
    }
    console.log(filteredSermons);
  };
  const test2 = useLoaderData("root");
  console.log(test2);

  return (
    <>
      <BannerImg bannerDetails={banner} />
      <div className={classes.mainContainer}>
        <SideBar
          yearRef={yearRef}
          categoryRef={categoryRef}
          handleYearChange={handleYearHandler}
          handleCategoryChange={categoryHandler}
          category={category}
          years={years}
        />

        <LatestMessage
          title={latestSermon.title}
          preacher={latestSermon.preacher}
          date={latestSermon.date}
          description={latestSermon.description}
          audio={latestSermon.audioURL}
        />
        <MessageList message={filtered ? filteredSermons : sermonsParsed} />
      </div>
      <NextEvent />
    </>
  );
}
