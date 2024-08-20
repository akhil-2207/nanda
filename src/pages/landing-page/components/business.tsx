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
    <div id="Business" className="max-h-[80vh] flex flex-col items-center justify-center md:mt-5 mt-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 text-center">
                  Our Businesses
          </h2>
    <BusinessMarquee
     items={items}
     direction='left'
     speed='normal'
    />
    </div>
  )
}

export default BusinessSection

