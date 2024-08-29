import { COMPANY } from "@/assets/images";

function WhatDoWeDo() {
    return (
        <div id="who-we-are" className="h-fit md:mx-4 md:mt-14 mt-4 min-h-[70vh] flex items-center justify-center ">
            <div className="container flex md:flex-col flex-col p-2 ">
                <div className="mb-10 md:px-4 font-normal rounded-2xl border border-primary p-2 
                    md:p-8 md:hover:bg-secondary md:hover:shadow-lg transition-all duration-500 ease-in-out md:min-h-[300px]">
                    <h2 className="text-2xl lg:w-1/2 md:text-3xl lg:text-xl font-semibold -mb-2 mt-2 md:-mt-4 text-center">
                        What We Do
                    </h2>
                    <div className="flex gap-14 md:gap-4 lg:flex-row py-6 md:py-0 flex-col justify-between items-center">
                        <p className="text-base lg:w-[60%] md:text-lg lg:text-xl leading-relaxed flex h-fit text-justify  ">
                            Off the ground in 1963, today we are into Poultry breeding, Hatcheries, Animal feed manufacturing, Broiler contract farming, 
                            Primary processing, manufacturing of Ready To Eat (RTE) & Ready To Cook (RTC) products & also Online & Offline retailing.
                            <br /> In a nutshell, we are a fully integrated, full stack, omni channel hyperlocal enterprise.
                            With over 15 farms, 3 feed mills, 5 hatcheries and 2 processing units, we bring healthy, tasty and farm-fresh chicken directly to your homes.
                        </p>
                        <img src={COMPANY} alt="" className=" md:w-[400px] h-[250px] md:h-[260px] rounded-2xl -mt-10 md:mt-1 " />
                    </div>
                </div>
                <div className=" md:px-4 font-normal border rounded-2xl border-primary p-2 
                    md:p-8 md:hover:bg-secondary md:hover:shadow-lg transition-all duration-500 ease-in-out md:min-h-[300px]">
                    <h2 className="text-2xl lg:w-1/2 md:text-3xl lg:text-xl font-semibold -mb-2 mt-2 md:-mt-4 text-center">
                        Who Are We
                    </h2>
                    <div className="flex lg:flex-row gap-14 md:gap-4 md:py-0 py-6 flex-col justify-between items-center">
                        <p className="text-base md:text-lg lg:w-[60%] lg:text-xl leading-relaxed flex h-fit text-justify  md:mt-8 ">
                        Nanda Group is 6 decades+ company. We started out with a small hand mixing animal feed manufacturing unit. 
                        We are one of the oldest franchisee & an associate of Venkateshwara Hatcheries Pvt Ltd, Pune, Asia’s largest Poultry Enterprise.
                        Our visionary founder P.S Nandakumar established Nanda Group in Bangalore, 
                        he redefined the standards of poultry farming and production by setting up 
                        state of the art facilities across southern and western parts of India, 
                        today Nanda Group produces 75,000 tones of poultry feed and collaborates with more than 3,000 farmers to produce 60 million chicken annually.
                        </p>
                        <img src={COMPANY} alt="" className=" md:w-[400px] h-[250px] md:h-[260px] rounded-2xl -mt-10 md:mt-1 " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatDoWeDo;
