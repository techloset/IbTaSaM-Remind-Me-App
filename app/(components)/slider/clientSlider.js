"use client";
import profile from "@/public/images/profile-images/Profile.png";
import profile1 from "@/public/images/profile-images/Profile1.png";
import ClientData from "../clientData/clientData";
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
    <div className="absolute bottom-[-60px] cursor-pointer inline-block">
      <BsArrowLeft
        className="w-[42px] h-[42px] text-_blue ml-28 md:ml-0 "
        onClick={onClick}
      />
    </div>
  );
};

const NextIcon = ({ onClick }) => {
  return (
    <div className="absolute bottom-[-60px] cursor-pointer inline-block ms-48 md:ms-20">
      <BsArrowRight className="w-[42px] h-[42px] text-_blue" onClick={onClick} />
    </div>
  );
};
export default ClientSlider;
