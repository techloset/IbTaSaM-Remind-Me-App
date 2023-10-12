import Image from "next/image";
import Button from "@/app/(components)/button/Button";
import img from "@/public/images/hero-image.png";

const Header = () => {
  return (
    <section className="xl:max-w-[1440px] mx-auto w-full md:absolute top-0">
      <div className="grid md:grid-cols-2">
        <div className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] my-8">
          <h1 className="text-[48px] md:text-[56px] lg:text-[63px] font-bold mt-14 md:mt-20">
            Manage Schedule and Task Easy
          </h1>
          <p className="text-[16px] md:text-[18px] text-_gray leading-[36px] mt-7">
            Create and organize schedule and task deadline become better, easy
            manage and certainly no longer lagging behind schedule of activities
            and task
          </p>
          <Button
            btnTitle="Download App"
            btnClass="my-8 bg-_blue px-6 py-3 rounded-full text-_white hover:bg-_white hover:text-_blue border-2 border-_blue transition all ease"
          />
        </div>
        <div className="flex md:justify-end">
          <Image
            src={img}
            className="w-full xl:w-[80%] h-full xl:h-[100vh] md:rounded-bl-[10%]"
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
