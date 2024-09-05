import { COMPANY, MEDIA4 } from "@/assets/images";

function WhatDoWeDo() {
    return (
        <div id="who-we-are" className="h-fit md:mx-4 md:mt-14 mt-8 min-h-[70vh] flex items-center justify-center ">
            <div className="container flex md:flex-col flex-col p-2 ">
                <div className="mb-10 md:px-4 font-normal rounded-2xl border border-primary p-2 shadow-md
                    md:p-8 md:hover:bg-secondary md:hover:shadow-lg transition-all duration-500 ease-in-out md:min-h-[300px]">
                    <h2 className="text-2xl lg:w-1/2 md:text-3xl lg:text-2xl font-semibold -mb-2 mt-2 md:-mt-4 text-center">
                        What We Do
                    </h2>
                    <div className="flex gap-14 md:gap-4 lg:flex-row py-6 md:py-0 flex-col justify-between items-center">
                        <p className="text-base lg:w-[60%] md:text-lg lg:text-xl leading-relaxed flex h-fit text-justify md:mt-6  "> 
                        Today, we handle every facet of the industry, from breeding and hatcheries to feed manufacturing and broiler contract farming. 
                        We also create Ready To Eat (RTE) and Ready To Cook (RTC) products, and we have a robust online and offline retail presence. 
                        <br /> With over 40 retail outlets and omnichannel operations, supported by 200+ farms, 10 hatcheries, 3 feed mills, and 2 processing units, we ensure farm-fresh,
                         delicious chicken is delivered straight to your home, all with an unwavering commitment to quality and care.
                        </p>
                        <img src={COMPANY} alt="" className=" md:w-[400px] h-[250px] md:h-[260px] rounded-2xl -mt-10 md:mt-1 " />
                    </div>
                </div>
                <div className=" md:px-4 font-normal border rounded-2xl border-primary p-2 shadow-md
                    md:p-8 md:hover:bg-secondary md:hover:shadow-lg transition-all duration-500 ease-in-out md:min-h-[300px]">
                    <h2 className="text-2xl lg:w-1/2 md:text-3xl lg:text-2xl font-semibold -mb-2 mt-2 md:-mt-4 text-center">
                        Who Are We
                    </h2>
                    <div className="flex lg:flex-row gap-14 md:gap-4 md:py-0 py-6 flex-col justify-between items-center">
                        <p className="text-base md:text-lg lg:w-[60%] lg:text-xl leading-relaxed flex h-fit text-justify md:mt-6 2xl:mt-1 ">
                        With a legacy spanning over 60 years, Nanda Group began as a modest hand-mixing animal feed unit. 
                        As one of the oldest partners of Venkateshwara Hatcheries Pvt Ltd, Pune—Asia's largest poultry enterprise, 
                        our visionary founder, P.S Nandakumar, revolutionized poultry farming in India. 
                        <br /> Today, Nanda Group stands as a leader, producing 75,000 tons of poultry feed annually and 
                        partnering with 1,000+ farmers to deliver 60 million chickens annually.
                        </p>
                        <img src={MEDIA4} alt="" className=" md:w-[400px] h-[250px] md:h-[260px] rounded-2xl -mt-10 md:mt-1 " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatDoWeDo;
