import Button from "@/app/(components)/button/button";

const Download = () => {
  return (
    <div
      id="download"
      className="xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] mx-auto w-full my-16"
    >
      <div className="bg-_blue py-[50px] hover:shadow-2xl hover:transition-all hover:delay-100 md:py-[70px] lg:py-[100px] flex flex-col flex-wrap content-center rounded-[35px] md:rounded-[50px] lg:rounded-[50px] overflow-hidden">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl px-10 pb-6 md:pb-8 lg:pb-20 font-semibold text-center text-_white max-w-[756px] z-[1]">
          Download an app now and the various benefits you will get immediately
        </div>
        <div className="mx-auto flex md:flex-row flex-col content-center z-[1]">
          <Button
            btnTitle="Download App"
            btnClass="bg-_white px-10 py-3 rounded-full hover:text-_white hover:bg-_blue  hover:outline hover:outline border border-_white"
          />
          <Button
            btnTitle="Download App"
            btnClass="md:ms-8 mt-5 md:mt-0 bg-_blue px-10 py-3 rounded-full text-white hover:text-_dark hover:bg-_white outline hover:outline-_blue"
          />
        </div>
      </div>
    </div>
  );
};
export default Download;
