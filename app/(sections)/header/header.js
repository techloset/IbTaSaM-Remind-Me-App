
import Image from "next/image"
import Button from "../../(components)/button/button"

import img from '@/public/images/hero-image.png'

const Header = () => {
    return (
        <>

            <section className="xl:max-w-[1440px] mx-auto w-full">

                <div className="">

                    <div className="grid md:grid-cols-2">

                        <div className="px-[1.5rem] md:px-[3rem] lg:px-[6rem]">

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-10 md:mt-20 text-[#212121]"><span className="mb-2 lg:mb-4 inline-block font-Poppins">Manage</span> <br /><span className="mb-2 lg:mb-4 inline-block">Schedule and </span> <br /> Task Easy</h1>

                            <p className="mt-8 leading-8 text-[#747474]">Create and organize schedule and task deadline become better, easy manage and certainly no longer lagging behind schedule of activities and task</p>

                            <Button
                                btnTitle="Download App"
                                btnClass="my-8 bg-[#2D76F9] px-6 py-3 rounded-full text-white hover:bg-white hover:text-[#2D76F9] border-2 border-[#2D76F9] transition all ease"
                            />

                        </div>

                        <div className="flex md:justify-end">

                            <Image src={img} className="w-full xl:w-[80%] h-full xl:h-[90vh] md:rounded-bl-[10%]" />

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
export default Header