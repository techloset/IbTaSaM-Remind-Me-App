

import Image from "next/image"

const ServicesCard = (props) => {
    return (
        <>
            <div className="text-center md:text-left  md:mt-0 border">
                <div className="bg-[#EEF4FF] p-3 rounded-full inline-block">
                    <Image src={props.imgSrc} width={40} height={40} />
                </div>
                <h3 className="text-[#212121] md:text-lg font-semibold my-5">{props.title}</h3>
                <p className="text-[#747474]">{props.description}</p>
            </div>
        </>
    )
}

export default ServicesCard