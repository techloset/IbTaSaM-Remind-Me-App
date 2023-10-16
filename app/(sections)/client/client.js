import Image from "next/image";
import reviewsImage from "@/public/images/reviews.png";
import ClientSlider from "@/app/(components)/slider/clientSlider";
const Client = () => {
  return (
    <section className="xl:max-w-[1440px] mx-auto w-full">
      <div className="h-full md:mb-24">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="hidden md:block">
            <Image
              src={reviewsImage}
              alt="Client image"
              className="max-w-[700px] max-h-[600px] md:rounded-r-[100px]"
            />
          </div>
          <div className="max-w-[380px] md:max-w-full mx-auto px-3 sm:px-10 lg:px-20 md:py-20">
            <ClientSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Client;
