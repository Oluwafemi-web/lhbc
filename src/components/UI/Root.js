import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import classes from "../../css/style.module.css";
import sanityClient from "../../client";
import { useLoaderData } from "react-router-dom";

export async function GeneralData() {
  try {
    const organization = await sanityClient.fetch(
      `*[_type == 'organizations']{
        organizations[]{
          image {
            asset->{
              url
            }
          },
          organization,
          description
        }
      }`
    );

    const footer = await sanityClient.fetch(
      `*[_type == 'footer']{
        aboutus[]{
          description
        },
        quicklinks[]{
          title
        },
        updates[]{
          heading,
          date,
          image {
            asset->{
              url
            }
          },
          
        }
      }`
    );

    const nextevent = await sanityClient.fetch(
      `*[_type == 'nextevent']{
        organizations[]{
          image,
          organization,
          description
        }
      }`
    );

    return [organization[0], footer[0], nextevent[0]];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default function RootLayout() {
  const test = useLoaderData();
  const [organization, footer, nextevent] = test;
  const { quicklinks, aboutus, updates } = footer;
  console.log(updates);
  return (
    <>
      <Header />
      <div className={classes.main}>
        <Outlet />
      </div>
      <Footer aboutus={aboutus} quicklinks={quicklinks} updates={updates} />
    </>
  );
}
