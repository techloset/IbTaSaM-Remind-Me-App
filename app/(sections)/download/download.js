import Button from "@/app/(components)/button/Button";
import Image from "next/image";
import img1 from "@/public/images/svg/Ellipse 12.svg";
import img2 from "@/public/images/svg/Ellipse 11.svg";

const Download = () => {
  return (
    <div
      id="download"
      className="xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] mx-auto w-full relative"
    >
      <div className="bg-_blue py-[50px] hover:shadow-2xl hover:transition-all hover:delay-100 md:py-[70px] lg:py-[100px] flex flex-col flex-wrap content-center rounded-[35px] md:rounded-[50px] lg:rounded-[50px] overflow-hidden">
        <div className="text-xl sm:text-2xl md:text-3xl px-10 lg:px-24 pb-6 md:pb-8 lg:pb-20 font-semibold text-center text-_white max-w-[756px] z-[1]">
          <p className="leading-[150%]">Download an app now and the various benefits you will get immediately</p>
        </div>
        <div className="mx-auto flex md:flex-row flex-col content-center z-[1]">
          <Button
            btnTitle="Download App"
            btnClass="bg-_white px-10 py-3 rounded-full hover:text-_white hover:bg-_blue  hover:outline hover:outline border border-_white"
          />
          <Button
            btnTitle="About App"
            btnClass="md:ms-8 mt-5 md:mt-0 bg-_blue px-12 py-3 rounded-full text-white hover:text-_dark hover:bg-_white outline hover:outline-_blue"
          />
        </div>

        <Image
          src={img1}
          alt="img1"
          className="w-auto h-32 lg:h-[250px] absolute top-[0%] bottom-[-0%] z-[0]"
        />
        <Image
          src={img2}
          alt="img2"
          className="w-auto h-32 lg:h-[250px] absolute right-[6%] sm:right-[3.5%] md:right-[5%] lg:right-[7.2%] bottom-[-0%] z-[0]"
        />
      </div>
    </div>
  );
};
export default Download;
