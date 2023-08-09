import AboutContent from "./AboutContent";
import BannerImg from "./BannerImg";
import Diaconate from "./Diaconate";
import Organizations from "../../UI/Organizations";
import NextEvent from "../../UI/NextEvent";
import sanityClient from "../../../client";
import { useLoaderData } from "react-router-dom";

export async function AboutData() {
  try {
    const response = await sanityClient.fetch(
      `*[_type == 'about'] {
        banner[]{
          pagetitle,
          image {
            asset->{
              url
            }
          }
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
        diaconate[]{
          image{
            asset->{
              url
            }
          },
          name,
        },
        sermon[]{
          title,
          preacher,
          date
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
        nextevent[]{
          title,
          date,
          image {
            asset->{
              url
            }
          }
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

export default function About() {
  const test = useLoaderData(AboutData);
  const [main, event] = test;
  const { banner, nextevent, organizations, sermon, aboutus, diaconate } = main;
  return (
    <>
      <BannerImg banner={banner} />
      <AboutContent aboutData={aboutus} featured={sermon} />
      <Diaconate deaconDetails={diaconate} />
      <Organizations organizationDetails={organizations} />
      <NextEvent date={event.date} title={event.name} />
    </>
  );
}
