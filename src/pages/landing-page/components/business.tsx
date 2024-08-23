import { BLB,BBF_LOGO,BH,NFPL,KH, NANDUS } from "@/assets/images";
import BusinessMarquee from "@/components/custom/businesss";


const items = [
    {
        title: "Balkrishna Livestock Breeders ",
        image: BLB
    },
    {
        title: "Balkrishna Breeding Farms",
        image: BBF_LOGO
    },
    {
        title: "Balkrishna Hatcheries",
        image: BH
    },
    {
        title: "Nanda Feeds",
        image: NFPL
    },
    {
        title: "Komarla Hatcheries",
        image: KH
    },
    {
        title: "Nandus",
        image: NANDUS
    },

]

function BusinessSection() {
  return (
    <div id="Business" className="max-h-[80vh] md:min-h-[60vh] min-h-[50vh] h-fit flex flex-col items-center justify-center md:mt-5 mt-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10  text-center">
            Our Businesses
          </h2>
          {/* <p className=" flex flex-wrap lg:text-xl md:text-lg md:w-[80%] text-black font-normal  ">
          The group is 800 people strong. With entomolosists, Bachelors, Masters & Phd’s in Veterinary Science 
          (animal nutritionists, pathologists, animal health, qualified disease poultry disease diagnostics lab technicians), 
          MBA’s, Automation Engineers, Managers, qualified CA running operations across country & overseas.
          </p> */}
    <BusinessMarquee
     items={items}
     direction='left'
     speed='fast'
    />
    </div>
  )
}

export default BusinessSection

