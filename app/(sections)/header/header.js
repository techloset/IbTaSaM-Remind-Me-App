
import Button from "../../(components)/button/button"

import img from '@/public/images/hero-image.png'

const Header = () => {
    return (
        <>

            <section id="header" className="">
                <div className="container mx-auto px-[5%] md:px-[10%]">
                    <div className="grid lg:grid-cols-2">
                        <div className="py-16">
                            <h1 className="md:text-6xl font-semibold md:leading-[75px] mt-5 text-[#212121] ">Manage Schedule and Task Easy</h1>
                            <p className="text-[#747474] leading-8 my-7 md:me-16">Create and organize schedule and task deadline become better, easy manage and certainly no longer lagging behind schedule of activities and task</p>
                            <Button
                                btnTitle="Download App"
                                btnClass="bg-[#2D76F9] px-6 py-3 rounded-full text-white hover:bg-white hover:text-[#2D76F9] border-2 border-[#2D76F9] transition all ease"
                            />
                        </div>
                        <div className="heroImagerounded-bl-[50px]">
                            <img src={img} alt="" className="h-64"/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Header