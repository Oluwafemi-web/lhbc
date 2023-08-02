import NextEvent from "../../UI/NextEvent";
import BannerImg from "./BannerImg";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

export default function Contact() {
  return (
    <>
      <BannerImg />
      <ContactCard />
      <ContactForm />
      <ContactMap />
      <NextEvent />
    </>
  );
}
