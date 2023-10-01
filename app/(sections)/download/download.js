
import Button from '@/app/(components)/button/button'

import ellipse from '../../../public/images/svg/ellipse.svg'

const Download = () => {
    return (
        <>
            <div id='download' className="xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] mx-auto w-full my-16">

                <div className='bg-[#2D76F9] py-[50px] md:py-[70px] lg:py-[100px] flex flex-col flex-wrap content-center rounded-[35px] md:rounded-[50px] lg:rounded-[50px] overflow-hidden'>

                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl px-10 pb-6 md:pb-8 lg:pb-20 font-semibold text-center text-white max-w-[756px] z-[1]">
                        Download an app now and the various benefits you will get immediately
                    </div>

                    <div className="mx-auto flex md:flex-row flex-col content-center z-[1]">

                        <Button
                            btnTitle="Download App"
                            btnClass="bg-white px-10 py-3 rounded-full hover:text-white hover:bg-[#2D76F9]  hover:outline hover:outline border-2 border-white hover:animate-fade animate-once animate-duration-700 animate-delay-100 animate-ease-in animate-normal animate-fill-both"
                        />

                        <Button
                            btnTitle="Download App"
                            btnClass="md:ms-8 mt-5 md:mt-0 bg-[#2D76F9] px-10 py-3 rounded-full text-white hover:text-black hover:bg-white outline hover:outline-[#2D76F9] hover:animate-fade animate-once animate-duration-700 animate-delay-100 animate-ease-in animate-normal animate-fill-both"
                        />

                    </div>

                    <img src={ellipse} alt="" className='h-[300px] md:h-[350px] xl:h-[400px] w-auto absolute top-[-60%] left-[-27%] lg:left-[-15%] z-[0]' />
                    <img src={ellipse} alt="" className='h-[300px] md:h-[350px] xl:h-[400px] w-auto absolute bottom-[-60%] right-[-27%] lg:right-[-15%] z-[0]' />

                </div>

            </div>
        </>
    )
}
export default Download