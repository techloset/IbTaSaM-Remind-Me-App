import Image from "next/image";

const ClientData = (props) => {
  return (
    <div className="my-3">
      <h1 className="text-[24px] md:text-[36px] font-[600] leading-[40px] md:leading-[65px] text-dark">
        {props.heading}
      </h1>
      <div className="flex my-10">
        <Image src={props.profile} width={75} height={75} />
        <div className="ms-8 my-2">
          <h1 className="mb-4 text-_dark text-[18px] font-[600] leading-normal">
            {props.name}
          </h1>
          <h3 className="text-_gray text-[14px] font-[400] leading-normal">
            {props.edu}
          </h3>
        </div>
      </div>
      <p className="text-[18px] font-[400] lg:pe-14 leading-[36px] text-_dark py-4">
        {props.description}
      </p>
    </div>
  );
};
export default ClientData;
