"use client";

import profile from '@/public/images/profile-images/Profile1.png'
// import profile1 from '../../../public/images/profile-images/Profile1.png'
import ClientData from '@/app/(components)/clientData/clientData';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useState } from "react";

function App() {
  const [progressWidth, setProgressWidth] = useState(20);

  const settings = {
    className: "center",
    infinite: false,
    slidesToShow: 1,
    swipeToSlide: true,
    nextArrow: <NextIcon />,
    prevArrow: <PrevIcon />,
    afterChange: (index) => {
      setProgressWidth((100 / 5) * (index + 1));
    },
  };
  return (
    <div className="App">
      <Slider {...settings}>
        <div>
        <ClientData
            heading="What do they think"
            profile={profile}
            name="Samantha Sench"
            edu="Student at University"
            description="“ Hi, it’s Samantha. After using it made me a lot of benefits, starting with convenience of setting a deadline of tasks and schedule after that the app is very simple using. “"
          />
        </div>
        <div>
          <ClientData
            heading="What do they think"
            profile={profile}
            name="Samantha Sench"
            edu="Student at University"
            description="“ Hi, it’s Samantha. After using it made me a lot of benefits, starting with convenience of setting a deadline of tasks and schedule after that the app is very simple using. “"
          />
        </div>
        {/* <div>
          <img
            src="https://www.mrdustbin.com/en/wp-content/uploads/2021/03/Vikram.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.mrdustbin.com/en/wp-content/uploads/2021/03/Vikram.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.mrdustbin.com/en/wp-content/uploads/2021/03/Vikram.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.mrdustbin.com/en/wp-content/uploads/2021/03/Vikram.jpg"
            alt=""
          />
        </div> */}
      </Slider>
      {/* <div className="progress">
        <div
          style={{ width: `${progressWidth}%` }}
          className="progress--fill"
        ></div>
      </div> */}
    </div>
  );
}

const PrevIcon = ({ onClick }) => {
  return (
    <div className="slick-icons slick-icons--left ">
      <RiArrowLeftSLine className="slick-icons--left" onClick={onClick} />
    </div>
  );
};

const NextIcon = ({ onClick }) => {
  return (
    <div className="slick-icons slick-icons--right">
      <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
    </div>
  );
};

export default App;
