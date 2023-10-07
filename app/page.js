import Header from "./(sections)/Header/Header";
import Navbar from "./(components)/Navbar/Navbar";
import Services from "./(sections)/Services/Services";
import Features from "./(sections)/Features/Features";
import Notification from "./(sections)/Notification/Notification";
import Download from "./(sections)/Download/Download";
import Client from "./(sections)/Client/Client";
import Footer from "./(components)/Footer/Footer";

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
