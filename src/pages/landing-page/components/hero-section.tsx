import { CEO, HERO_IMAGE } from "@/assets/images";


function HeroSection() {
  return (
    <div className=" flex flex-col max-h-[100vh] justify-start p-10 relative -mt-16 lg:pt-40 pt-20 gap-5 lg:gap-10 h-fit z-20 text-left">
      <div className=" font-semibold text-4xl lg:w-[60%] md:w-[50%] ">
        A Pioneering, Vertically Integrated Poultry & Meat Company
      </div>
      <div className=" font-medium text-xl lg:w-[60%] md:w-[50%]">
        With processing units, manufacturing facilities for ready to eat & ready
        to cook, retail outlets & last but not the least, insect farming.
      </div>
      <div className="container md:-ml-8 p-0 ">
        <img src={HERO_IMAGE} className="xl:h-[230px] md:h-[100px] lg:h-[120px] lg:-mt-10 xl:mt-0 h-20 " alt="" />
      </div>
      <img src={CEO} alt="" className="absolute bottom-0 xl:h-[650px] md:h-[500px] right-0 h-44  " />
    </div>
  );
}

export default HeroSection;
