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
            <div className="px-8 lg:ps-32 lg:pe-24">
              <h1 className="text-[24px] md:text-[36px] py-5 md:py-8 font-[600] leading-[40px] md:leading-[65px] text-_dark">
                Get the highest priority application notification
              </h1>
              <p className="text-[19px] md:text-[18px] font-[400] text-_gray leading-[40px]">
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
