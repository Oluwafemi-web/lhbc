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

    return response[0]; // Assuming the response is an array, you may want to access the first element.
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default function Home() {
  const test = useLoaderData(HomeData);
  const { carousel } = test;
  const { upcomingevents } = test;
  const { aboutus } = test;
  const { aboutkeys, getintouch, blog, donate, sermon } = test;
  return (
    <>
      <Carousel carouselData={carousel} />
      <IndexAbout
        eventDetails={upcomingevents}
        aboutDetails={aboutus}
        keyPoints={aboutkeys}
      />
      <Donation donationDetails={donate} />
      <Sermon sermonDetails={sermon} />
      <Organizations />
      <IndexContact contactDetails={getintouch} />
      <IndexBlog blogDetails={blog} />
    </>
  );
}
