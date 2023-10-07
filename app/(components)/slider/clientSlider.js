"use client";
import profile from "@/public/images/profile-images/Profile.png";
import profile1 from "@/public/images/profile-images/Profile1.png";
import ClientData from "../ClientData/ClientData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function ClientSlider() {
  const settings = {
    className: "center",
    infinite: false,
    slidesToShow: 1,
    swipeToSlide: true,
    nextArrow: <NextIcon />,
    prevArrow: <PrevIcon />,
  };
  return (
    <div className="App">
      <Slider {...settings}>
        <ClientData
          heading="What do they think"
          profile={profile}
          name="Samantha Sench"
          edu="Student at University"
          description="“ Hi, it’s Samantha. After using it made me a lot of benefits, starting with convenience of setting a deadline of tasks and schedule after that the app is very simple using. “"
        />
        <ClientData
          heading="What do they think"
          profile={profile1}
          name="Muhammad IbTaSaM"
          edu="Student at University"
          description="“ Hi, it’s Muhammad IbTaSaM. Computer Scientist: Fast learner, goal-oriented and focusing on my problem-solving skills. Love to build projects to improve my skillset. “"
        />
      </Slider>
    </div>
  );
}

const PrevIcon = ({ onClick }) => {
  return (
    <div className="absolute bottom-[-60px] text-3xl cursor-pointer inline-block md:ms-4">
      <BsArrowLeft
        className=" hover:-translate-x-2 saturate-150 duration-700 text-_dark hover:text-_blue"
        onClick={onClick}
      />
    </div>
  );
};
const NextIcon = ({ onClick }) => {
  return (
    <div className="absolute bottom-[-60px] text-3xl cursor-pointer inline-block ms-20">
      <BsArrowRight
        className="hover:translate-x-2 saturate-150 duration-700 text-_dark hover:text-_blue"
        onClick={onClick}
      />
    </div>
  );
};
export default ClientSlider;
