import React, { useRef, useCallback, useState } from "react";
import BannerImg from "./BannerImg";
import LatestMessage from "./LatestMessage";
import MessageList from "./MessageList";
import NextEvent from "../../UI/NextEvent";
import SideBar from "./SideBar";
import classes from "../../../css/gallery.module.css";
import sanityClient from "../../../client";
import { useLoaderData } from "react-router-dom";
import parse from "date-fns/parse";

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

    const event = await sanityClient.fetch(
      `*[_type == 'nextevent'] {
        date,
        name,
      }`
    );

    return [response[0], event[0]]; // Assuming the response is an array, you may want to access the first element.
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default function Sermon() {
  const [sermoninfo, event] = useLoaderData();
  const { banner, sermons, years, category } = sermoninfo;

  const yearRef = useRef(null);
  const categoryRef = useRef(null);

  const parsedDate = sermons.map((item) =>
    parse(
      item.date.replace(/(\d+)(st|nd|rd|th)/, "$1"),
      "d MMMM yyyy",
      new Date()
    )
  );

  const sermonsParsed = sermons.map((item, index) => ({
    ...item,
    parsedDate: parsedDate[index],
  }));

  sermonsParsed.sort((a, b) => b.parsedDate - a.parsedDate);
  const latestSermon = sermonsParsed[0];

  const handleYearHandler = useCallback(() => {
    const yearValue = yearRef.current.state.values[0]?.year || "all";
    if (yearValue === "#" || yearValue === "all") {
      setFilteredSermons([]);
      setIsFiltered(false);
    } else {
      const sermonFiltered = sermonsParsed.filter(
        (item) => item.parsedDate.getFullYear() === +yearValue
      );
      setFilteredSermons(sermonFiltered);
      setIsFiltered(true);
    }
  }, [sermonsParsed]);

  const categoryHandler = useCallback(() => {
    const categoryValue = categoryRef.current.state.values[0]?.category;
    if (categoryValue === "#" || categoryValue === "all") {
      setFilteredSermons([]);
      setIsFiltered(false);
    } else {
      const sermonFiltered = sermonsParsed.filter(
        (item) => item.category === categoryValue
      );
      setFilteredSermons(sermonFiltered);
      setIsFiltered(true);
    }
  }, [sermonsParsed]);

  const [filteredSermons, setFilteredSermons] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

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
        <MessageList message={isFiltered ? filteredSermons : sermonsParsed} />
      </div>
      <NextEvent date={event.date} title={event.name} />
    </>
  );
}
