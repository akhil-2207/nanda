import { CEO, HERO_IMAGE } from "@/assets/images";


function HeroSection() {
  return (
    <div className="flex flex-col min-h-[100vh] relative -mt-16 pt-40 gap-10 h-fit z-20 text-left">
      <div className="container font-semibold text-4xl md:w-[60%]">
        A Pioneering, Vertically Integrated Poultry & Meat Company
      </div>
      <div className="container font-medium text-xl md:w-[60%]">
        With processing units, manufacturing facilities for ready to eat & ready
        to cook, retail outlets & last but not the least, insect farming.
      </div>
      <div className="container">
        <img src={HERO_IMAGE} className="md:h-[300px] md:-ml-8 md:-mt-20" alt="" />
      </div>
      <img src={CEO} alt="" className="absolute bottom-0 h-[700px] right-0 md:block hidden" />
    </div>
  );
}

export default HeroSection;
