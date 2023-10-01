// "use client"

// import Image from 'next/image'

// import Carousel from 'react-elastic-carousel'
// import { useRef } from "react";

// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

// import reviewsImage from '../../../public/images/reviews.png'
// import profile from '../../../public/images/profile-images/Profile.png'
// import profile1 from '../../../public/images/profile-images/Profile1.png'
// import ClientData from '@/app/(components)/clientData/clientData';

// const Client = () => {

//     const carouselRef = useRef(null);

//     return (
//         <>
//             <section className="xl:max-w-[1440px] mx-auto w-full">

//                 <div className="h-full md:my-28">

//                     <div className="grid md:grid-cols-2 gap-5">

//                         <div className='hidden md:block'>
//                             <Image src={reviewsImage} alt="" className="w-full h-full md:rounded-r-[10%]" />
//                         </div>

//                         <div className='px-3 sm:px-10 lg:px-20 md:py-20'>

//                             <Carousel pagination={false} showArrows={false} ref={carouselRef}>


//                                 <ClientData
//                                     heading="What do they think"
//                                     profile={profile}
//                                     name="Samantha Sench"
//                                     edu="Student at University"
//                                     description="“ Hi, it’s Samantha. After using it made me a lot of benefits, starting with convenience of setting a deadline of tasks and schedule after that the app is very simple using. “" />

//                                 <ClientData
//                                     heading="What do they think"
//                                     profile={profile1}
//                                     name="Muhammad IbTaSaM"
//                                     edu="Student at University"
//                                     description="“ Hi, it’s Muhammad IbTaSaM. Computer Scientist: Fast learner, goal-oriented and focusing on my problem-solving skills. Love to build projects to improve my skillset. “" />

//                             </Carousel>

//                             <div className='mt-2 md:mt-8 text-[#2D76F9] text-center md:text-start'>

//                                 <div className='text-3xl cursor-pointer inline-block md:ms-4'
//                                     onClick={() => carouselRef.current.slidePrev()}>
//                                     <BsArrowLeft className='hover:-translate-x-2 saturate-150 duration-700' />
//                                 </div>

//                                 <div className='text-3xl cursor-pointer inline-block ms-6'
//                                     onClick={() => carouselRef.current.slideNext()}>
//                                     <BsArrowRight className='hover:translate-x-2 saturate-150 duration-700' />
//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </section>
//         </>
//     )
// }
// export default Client