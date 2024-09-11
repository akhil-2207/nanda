import { CEO, HERO_IMAGE } from "@/assets/images";


function HeroSection() {
  return (
    <div className=" flex flex-col max-h-[100vh] justify-start md:p-10 p-5 relative -mt-16 lg:pt-40 pt-20 gap-5 lg:gap-10 h-fit z-20 text-left">
      <div className=" font-semibold text-4xl lg:w-[60%] md:w-[50%] md:mt-20 lg:mt-0 ">
      A Trusted Name in Farm-to-Fork Poultry in India

      </div>
      <div className=" font-medium text-xl lg:w-[60%] md:w-[50%] w-[85%]">
        Since 1963, we've been dedicated to excellence in poultry. From breeder farms, feed mills, hatcheries to broiler farms, processing units, and retail outlets,
        we ensure, every step of the journey from farm to table is managed with excellence and care.
      </div>
      <div className="container md:-ml-8 p-0 ">
        <img src={HERO_IMAGE} className="xl:h-[200px] md:h-[100px] lg:h-[120px] lg:-mt-10 xl:mt-0 h-20 opacity-80 " alt="" />
      </div>
      <img src={CEO} alt="" className="absolute bottom-0 xl:h-[650px] md:h-[550px] lg:h-[500px] right-0 h-44 " />
    </div>
  );
}

export default HeroSection;
