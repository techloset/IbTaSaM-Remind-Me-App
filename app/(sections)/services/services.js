import serviceImg1 from "@/public/images/services-images/serviceImg1.png";
import serviceImg2 from "@/public/images/services-images/serviceImg2.png";
import serviceImg3 from "@/public/images/services-images/serviceImg3.png";
import ServicesCard from "../../(components)/ServicesCard/ServicesCard";

const Services = () => {
  return (
    <section className="xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] mx-auto w-full mt-[245vh] sm:mt-[270vh] md:mt-[185vh] lg:mt-[180vh xl:mt-[105vh]">
      <div className="grid md:grid-cols-3 gap-5">
        <ServicesCard
          imgSrc={serviceImg1}
          title="Set a better deadline tasks"
          description="You can make your duty deadlines better and more orderly"
        />
        <ServicesCard
          imgSrc={serviceImg2}
          title="Manage the tasks so easily"
          description="You can manage the deadlines and the schedule becomes easy"
        />
        <ServicesCard
          imgSrc={serviceImg3}
          title="Wouldn’t miss notifications"
          description="Of course you will always get the tasks and schedule notifications"
        />
      </div>
    </section>
  );
};
export default Services;
