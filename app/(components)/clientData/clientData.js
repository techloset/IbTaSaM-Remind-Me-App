import Image from "next/image";

const ClientData = (props) => {
  return (
    <div className="mx-w-[540%]">
      <h1 className="text-2xl font-bold text-dark">{props.heading}</h1>
      <div className="flex my-10">
        <Image src={props.profile} width={80} height={80} />
        <div className="ms-5 my-2">
          <h1 className="mb-4 text-_dark text-md font-bold">{props.name}</h1>
          <h3 className="text-_gray text-xs">{props.edu}</h3>
        </div>
      </div>
      <p className="lg:pe-14 leading-8 text-_dark">{props.description}</p>
    </div>
  );
};
export default ClientData;
