import Item from "@/app/(sections)/client/item"

import Image from "next/image"

const ClientData = (props) => {
    return (
        <>
            <Item>
                <h1 className='text-2xl font-bold text-[#212121]'>{props.heading}</h1>

                <div className='flex my-10'>

                    <Image src={props.profile} width={80} height={80} />

                    <div className='ms-5 my-2'>
                        <h1 className='mb-4 text-[#212121] text-md font-bold'>{props.name}</h1>
                        <h3 className='text-[#747474] text-xs'>{props.edu}</h3>
                    </div>
                </div>

                <p className=' sm:w-[75%] md:w-full lg:pe-14 leading-8 text-[#212121]'>{props.description}</p>
            </Item>

        </>
    )
}
export default ClientData