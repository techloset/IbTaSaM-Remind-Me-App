import Header from "./(sections)/header/header";
import Navbar from "./(components)/navbar/navbar";
import Services from "./(sections)/services/services";
import Features from "./(sections)/features/features";
import Notification from "./(sections)/notification/notification";
import Download from "./(sections)/download/download";
import Client from "./(sections)/client/client";
import Footer from "./(components)/footer/footer";

export default function page() {
  return (
    <>
      <Navbar className="relative" />
      <div className="font-poppins flex flex-col gap-12 md:gap-16 lg:gap-36">
        <Header />
        <Services />
        <Features />
        <Notification />
        <Download />
        <Client />
      </div>
        <Footer />
    </>
  );
}
