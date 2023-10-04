import Image from "next/image";
import notificationImage from "@/public/images/notification.png";

const Notification = () => {
  return (
    <section className="xl:max-w-[1440px] mx-auto w-full">
      <div className="h-full my-16">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="md:hidden">
            <Image src={notificationImage} alt="" className="w-full h-full" />
          </div>
          <div className="h-full flex items-center">
            <div className="px-8 lg:ps-32 lg:pe-24">
              <h1 className="text-lg sm:text-2xl lg:text-3xl mb-4 md:mb-7 lg:mb-10 font-semibold text-_dark">
                Get the highest priority <br />
                application notification
              </h1>
              <p className="text-sm sm:text-md md:text-lg lg:text-xl text-_gray leading-6 lg:leading-10">
                The best feature makes you better, with the latest technology to
                meet your needs. Of course, with such features as organizing
                schedules and leading assignments, it will make you easier, So
                get the application now !
              </p>
            </div>
          </div>
          <div className="hidden md:inline">
            <Image
              src={notificationImage}
              alt="Notification image"
              className="w-full h-full md:rounded-l-[10%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Notification;
