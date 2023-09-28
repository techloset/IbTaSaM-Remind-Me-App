import Header from "./(sections)/header/header";
import Navbar from "./(components)/navbar/navbar";
import Services from "./(sections)/services/services";
import Features from "./(sections)/features/features";
import Notification from "./(sections)/notification/notification";
import Download from "./(sections)/download/download";

export default function page() {
  return (
    <>

      {/* 
      <Navbar />
      <Header /> */}
      {/* <Services /> */}
      <Features />
      <Notification />
      <Download />
    </>
  )
}
