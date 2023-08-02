import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import classes from "../../css/style.module.css";
import sanityClient from "../../client";
import { useLoaderData } from "react-router-dom";

export async function GeneralData() {
  try {
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

    return footer[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default function RootLayout() {
  const test = useLoaderData();
  const { quicklinks, aboutus, updates } = test;
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
