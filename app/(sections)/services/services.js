import ServicesCard from "@/app/(components)/servicesCard/servicesCard"

import serviceImg1 from '../../../public/images/services-images/serviceImg1.png'
import serviceImg2 from '../../../public/images/services-images/serviceImg2.png'
import serviceImg3 from '../../../public/images/services-images/serviceImg3.png'


const Services = () => {
    return (
        <>
            <section>
                <div className="container mx-auto px-[5%]">
                    <div className="grid md:grid-cols-3 gap-5 my-20 border">

                        <ServicesCard
                            imgSrc={serviceImg1}
                            title="Set a better deadline tasks"
                            description="You can make your duty deadlines better and more orderly"
                        />

                        <ServicesCard
                            imgSrc={serviceImg2}
                            title="Manage the tasks so easily"
                            description="You can manage the deadlines and the schedule becomes easy"
                        />

                        <ServicesCard
                            imgSrc={serviceImg3}
                            title="Wouldn’t miss notifications"
                            description="Of course you will always get the tasks and schedule notifications"
                        />


                    </div>
                </div>
            </section>
        </>
    )
}
export default Services