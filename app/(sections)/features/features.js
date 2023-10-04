import Image from "next/image";
import featureImage from "@/public/images/features.png";

const Features = () => {
  return (
    <section id="features" className="xl:max-w-[1440px] mx-auto w-full">
      <div className="h-full my-16">
        <div className="grid md:grid-cols-2 gap-5">
          <Image
            src={featureImage}
            alt="Feature image"
            className="w-full h-full md:rounded-r-[10%]"
          />
          <div className="h-full flex items-center">
            <div className="px-8 lg:ps-32 lg:pe-24">
              <h1 className="text-lg sm:text-2xl lg:text-3xl mb-4 md:mb-7 lg:mb-10 font-semibold text-_dark">
                Set up task and schedule <br />
                with a best features
              </h1>
              <p className="text-sm sm:text-md md:text-lg lg:text-xl text-_gray leading-6 lg:leading-10">
                The best feature makes you better, with the latest technology to
                meet your needs. Of course, with such features as organizing
                schedules and leading assignments, it will make you easier, So
                get the application now !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
