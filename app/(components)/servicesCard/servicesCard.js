

import Image from "next/image"

const ServicesCard = (props) => {
    return (
        <>
            <div className="text-center md:text-left sm:w-[50%] md:w-full mx-auto md:mt-0 hover:shadow-lg rounded-lg transition-all ease-in hover:-translate-y-1 hover:scale-100 duration-300 hover:cursor-default p-2">

                <div className="bg-[#EEF4FF] p-3 rounded-full inline-block hover:-translate-y-1 hover:scale-125 duration-700">
                    <Image src={props.imgSrc} width={40} height={40} />
                </div>

                <h3 className="text-[#212121] sm:text-xl md:text-lg lg:text-xl font-bold my-5">{props.title}</h3>

                <p className="text-[#747474]">{props.description}</p>

            </div>
        </>
    )
}

export default ServicesCard