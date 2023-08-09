import NextEvent from "../../UI/NextEvent";
import BannerImg from "./BannerImg";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import { useLoaderData } from "react-router-dom";
import sanityClient from "../../../client";

export async function ContactData() {
  try {
    const response = await sanityClient.fetch(
      `*[_type == 'contacts'] {
        title,
        image{
          asset->{
            url
          }
        },
        numbers,
        email
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

export default function Contact() {
  const test = useLoaderData();
  const [main, event] = test;
  return (
    <>
      <BannerImg />
      <ContactCard />
      <ContactForm />
      <ContactMap />
      <NextEvent date={event.date} title={event.name} />
    </>
  );
}
