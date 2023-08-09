import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import classes from "../../css/style.module.css";
import sanityClient from "../../client";
import { useLoaderData } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import PreLoader from "./PreLoader";

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
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [navigation.state]);
  console.log(navigation);
  const test = useLoaderData();
  const { quicklinks, aboutus, updates } = test;
  return navigation.state === "loading" || loading ? (
    <PreLoader />
  ) : (
    <>
      <Header />
      <div className={classes.main}>
        <Outlet />
      </div>
      <Footer aboutus={aboutus} quicklinks={quicklinks} updates={updates} />
    </>
  );
}
