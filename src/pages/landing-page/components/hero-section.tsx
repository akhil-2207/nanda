import { CEO, HERO_IMAGE } from "@/assets/images";


function HeroSection() {
  return (
    <div className=" flex flex-col max-h-[100vh] justify-start p-10 relative -mt-16 md:pt-40 pt-20 gap-10 h-fit z-20 text-left">
      <div className=" font-semibold text-4xl md:w-[60%]">
        A Pioneering, Vertically Integrated Poultry & Meat Company
      </div>
      <div className=" font-medium text-xl md:w-[60%]">
        With processing units, manufacturing facilities for ready to eat & ready
        to cook, retail outlets & last but not the least, insect farming.
      </div>
      <div className="container md:-ml-8 p-0 ">
        <img src={HERO_IMAGE} className="md:h-[250px] h-20 " alt="" />
      </div>
      <img src={CEO} alt="" className="absolute bottom-0 md:h-[650px] right-0 h-48  " />
    </div>
  );
}

export default HeroSection;
