import Image from "next/image";
import notificationImage from "@/public/images/notification.png";

const Notification = () => {
  return (
    <section className="xl:max-w-[1440px] mx-auto w-full">
      <div className="h-full">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="md:hidden">
            <Image src={notificationImage} alt="" className="w-full h-full" />
          </div>
          <div className="h-full flex items-center">
            <div className="px-[1.5rem] md:px-[3rem] lg:pl-[6rem] lg:pr-0 leading-relaxed">
              <h1 className="text-2xl md:text-3xl lg:text-4xl py-5 md:py-8 font-semibold text-_dark">
                Get the highest priority
                <span className="md:my-5 block">application notification</span>
              </h1>
              <p className="text-[18px] text-_gray leading-[40px] lg:w-[493px]">
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
