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
      },
      upcomingevents[]{
        date,
        time,
        name
      },
      aboutus[]{
        image{
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
        image{
          asset->{
            url
          }
        },
        heading,
        description,
      },
      organizations[]{
        image{
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
        image{
          asset->{
            url
          }
        }
      },
      blog[]{
        image{
          asset->{
            url
          }
        },
        heading,
        date,
      }
    }`
    )
    .then((data) => data[0]);
  return response;
}

export default function Home() {
  const test = useLoaderData();
  const { carousel } = test;
  const { upcomingevents } = test;
  const { aboutus } = test;
  const { aboutkeys, organizations, getintouch, blog, donate } = test;
  console.log(carousel, donate);
  return (
    <>
      <Carousel carouselData={carousel} />
      <IndexAbout
        eventDetails={upcomingevents}
        aboutDetails={aboutus}
        keyPoints={aboutkeys}
      />
      <Donation donationDetails={donate} />
      <Sermon />
      <Organizations organizationDetails={organizations} />
      <IndexContact contactDetails={getintouch} />
      <IndexBlog blogDetails={blog} />
    </>
  );
}
