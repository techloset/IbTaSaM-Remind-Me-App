"use client";
import Image from "next/image";
import reviewsImage from "@/public/images/reviews.png";
import ClientSlider from "@/app/(components)/Slider/ClientSlider";
const Client = () => {
  return (
    <section className="max-w-[100%]  mx-auto w-full">
      <div className="h-full md:my-28">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="hidden md:block">
            <Image
              src={reviewsImage}
              alt="Client image"
              className="w-full h-full md:rounded-r-[10%]"
            />
          </div>
          <div className="w-72 sm:w-96 md:w-full mx-auto px-3 sm:px-10 lg:px-20 md:py-20">
            <ClientSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Client;
