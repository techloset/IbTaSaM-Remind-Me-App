import Image from "next/image";
import Button from "@/app/(components)/button/Button";
import img from "@/public/images/hero-image.png";

const Header = () => {
  return (
    <section className="xl:max-w-[1440px] mx-auto w-full">
      <div className="grid md:grid-cols-2">
        <div className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] flex flex-col justify-center">
          <p className="text-[48px] md:text-[56px] lg:text-[64px] font-[600] leading-[85px] mt-12 md:mt-24">
            Manage Schedule and Task Easy
          </p>
          <p className="text-[19px] font-[400] md:text-[18px] text-_gray leading-[36px] mt-8">
            Create and organize schedule and task deadline become better, easy
            manage and certainly no longer lagging behind schedule of activities
            and task
          </p>
          <div>
            <Button
              btnTitle="Download App"
              btnClass="my-10 bg-_blue w-[250px] h-[75px] text-[18px] font-[500] leading-normal rounded-full text-_white hover:bg-_white hover:text-_blue border-2 border-_blue transition all ease"
            />
          </div>
        </div>
        <div className="flex md:justify-end  md:absolute top-0 right-0">
          <Image
            src={img}
            className="w-full h-full md:w-[700px] md:h-[850px] md:rounded-bl-[10%]"
          />
        </div>
      </div>
    </section>
  );
};
export default Header;

{
  /* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-10 md:mt-20 text-_dark">
  <br />
  <span className="mb-2 lg:mb-4 inline-block">Schedule and</span>
  <br /> Task Easy
</h1>; */
}
