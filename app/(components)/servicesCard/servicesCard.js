import Image from "next/image";

const ServicesCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-start sm:w-[50%] md:w-full mx-auto md:mt-0 hover:shadow-lg rounded-lg transition-all ease-in hover:-translate-y-1 hover:scale-100 duration-300 hover:cursor-default p-2">
      <div className="bg-_lightBlue p-3 w-[100px] h-[100px] rounded-full flex items-center justify-center hover:-translate-y-1 hover:scale-125 duration-700">
        <Image src={props.imgSrc} className="w-[56pxh-[56px]" />
      </div>
      <h3 className="text-_dark text-[24px] font-[700] my-7">
        {props.title}
      </h3>
      <p className="text-_gray text-[18px] font-[400] leading-[36px] text-center md:text-left">
        {props.description}
      </p>
    </div>
  );
};

export default ServicesCard;
