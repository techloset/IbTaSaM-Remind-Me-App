import Header from "./(sections)/header/header";
import Navbar from "./(components)/navbar/navbar";
import Services from "./(sections)/services/services";
import Features from "./(sections)/features/features";
import Notification from "./(sections)/notification/notification";
import Download from "./(sections)/download/download";
import Client from "./(sections)/client/client";
import Footer from "./(components)/footer/footer";
import SimpleSlider from "./simpleSlider";

export default function page() {
  return (
    <>
      <SimpleSlider />
      {/* <Navbar /> */}
      {/* <Header />
      <Services />
      <Features />
      <Notification />
      <Download />
      <Client />
      <Footer /> */}
    </>
  );
}
