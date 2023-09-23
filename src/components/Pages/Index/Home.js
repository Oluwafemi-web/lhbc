import Carousel from "./Carousel";
import IndexAbout from "./IndexAbout";
// import Donation from "./Donation";
import Sermon from "./Sermon";
import Organizations from "../../UI/Organizations";
import IndexContact from "./IndexContact";
// import IndexBlog from "./IndexBlog";
import parse from "date-fns/parse";

import { useLoaderData } from "react-router-dom";
import sanityClient from "../../../client";

export async function HomeData() {
  try {
    const response = await sanityClient.fetch(
      `*[_type == 'home'] {
        carousel[]{
          heading,
          subheading,
          description,
          image {
            asset->{
              url
            }
          }
        },
        upcomingevents[]{
          date,
          time,
          name
        },
        aboutus[]{
          image {
            asset->{
              url
            }
          },
          heading,
          description,
        },
        aboutkeys[]{
          heading,
          description
        },
        donate[]{
          image {
            asset->{
              url
            }
          },
          heading,
          description
        },
        sermon[]{
          title,
          minister,
          date,
          description,
          image {
            asset->{
              url
            }
          }
        },
        organizations[]{
          image {
            asset->{
              url
            }
          },
          organization,
          description
        },
        getintouch[]{
          number,
          email,
          address,
          heading,
          description,
          image {
            asset->{
              url
            }
          }
        },
        blog[]{
          image {
            asset->{
              url
            }
          },
          heading,
          date,
        }
      }`
    );

    const today = await sanityClient.fetch(
      `*[_type == 'gallery'] {
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
        },
      }`
    );

    return [response[0], today[0]]; // Assuming the response is an array, you may want to access the first element.
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default function Home() {
  const test = useLoaderData(HomeData);
  const [main, sermon] = test;

  const { sermons } = sermon;

  console.log(sermons);
  const {
    carousel,
    organizations,
    upcomingevents,
    aboutus,
    aboutkeys,
    getintouch,
    blog,
    donate,
    // sermon,
  } = main;

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

  return (
    <>
      <Carousel carouselData={carousel} />
      <IndexAbout
        eventDetails={upcomingevents}
        aboutDetails={aboutus}
        keyPoints={aboutkeys}
      />
      {/* <Donation donationDetails={donate} /> */}
      <Sermon sermonDetails={latestSermon} />
      <Organizations organizationDetails={organizations} />
      <IndexContact contactDetails={getintouch} />
      {/* <IndexBlog blogDetails={blog} /> */}
    </>
  );
}
