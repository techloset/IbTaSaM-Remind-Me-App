import Button from "@/app/(components)/button/button";
import Image from "next/image";
import img1 from "@/public/images/svg/Ellipse 12.svg";
import img2 from "@/public/images/svg/Ellipse 11.svg";

const Download = () => {
  return (
    <div
      id="download"
      className="xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] w-full relative "
    >
      <div className="w-full h-[469px] xl:w-[1240px] xl:h-[500px] bg-[#2D76F9] relative md:py-[70px] lg:py-[100px] flex flex-col content-center items-center justify-center rounded-[25px] md:rounded-[50px] lg:rounded-[50px] overflow-hidden">
        <div className="w-[276px] sm:w-[500px] pb-14 md:pb-8 lg:pb-20 text-center xl:w-[756px] z-[1]">
          <p className="text-[24px] sm:text-[30px] xl:text-[36px] text-white font-[600] leading-[36px] md:leading-[65px]">
            Download an app now and the various benefits you will get
            immediately
          </p>
        </div>
        <div className="mx-auto flex md:flex-row flex-col content-center z-[1]">
          <Button
            btnTitle="Download App"
            btnClass="bg-_white w-[250px] h-[75px] text-[18px] font-[500] rounded-full text-[#2D76F9] hover:text-_white hover:bg-_blue  hover:outline hover:outline border border-_white"
          />
          <Button
            btnTitle="About App"
            btnClass="md:ms-8 mt-7 md:mt-0 bg-_blue w-[250px] h-[75px] text-[18px] font-[500] rounded-full text-white hover:text-_dark hover:bg-_white border-2"
          />
        </div>

        <Image
          src={img1}
          alt="img1"
          className="max-w-[160px] max-h-[160px] md:max-w-[404px] md:max-h-[404px] absolute top-[0%] bottom-[-0%] left-0 z-[0]"
        />
        <Image
          src={img2}
          alt="img2"
          className="max-w-[160px] max-h-[160px] md:max-w-[404px] md:max-h-[404px] absolute right-[0%] bottom-[0%] z-[0]"
        />
      </div>
    </div>
  );
};
export default Download;
