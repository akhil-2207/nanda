// import { BLB,BBF_LOGO,BH,NFPL,KH, NANDUS } from "@/assets/images";
// import BusinessMarquee from "@/components/custom/businesss";
import { BIOSECURITYICON, HATCHERYIMG } from "@/assets/images";
import { OPENCAGEICON } from "@/assets/images";
import { NATURALMATINGICON } from "@/assets/images";
import { FEEDINGCHICKENIMG } from "@/assets/images";



// const items = [
//     {
//         title: "Balkrishna Livestock Breeders ",
//         image: BLB
//     },
//     {
//         title: "Balkrishna Breeding Farms",
//         image: BBF_LOGO
//     },
//     {
//         title: "Balkrishna Hatcheries",
//         image: BH
//     },
//     {
//         title: "Nanda Feeds",
//         image: NFPL
//     },
//     {
//         title: "Komarla Hatcheries",
//         image: KH
//     },
//     {
//         title: "Nandus",
//         image: NANDUS
//     },

// ]

function BusinessSection() {
  return (
    <div id="Business" className=" h-fit flex flex-col items-center justify-center md:mt-5 mt-5 mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10  text-center">
            Our Businesses
        </h2>
        <div className=" container flex flex-col">
            <h2 className=" md:text-3xl font-semibold text-2xl">
                Breeder Opertations
            </h2>
            {/* top section of breeder operation */}
            <div className="flex md:flex-row flex-col justify-between mt-5 gap-10">
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={BIOSECURITYICON} className="size-20 p-1" alt="icon" />
                    <div className=" border-primary border h-12 ml-5 mr-5 rounded-2xl "></div>
                    <p className="text-2xl font-medium ">Bio-Secure Farms</p>
                </div>
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={OPENCAGEICON} className="size-20 p-1" alt=""/>
                    <div className=" border-primary border h-12 ml-5 mr-5 rounded-2xl "></div>
                    <p className="text-2xl font-medium ">Cage Free Farms</p>
                </div>
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={NATURALMATINGICON} className="size-20 p-1" alt=""/>
                    <div className=" border-primary border h-12 ml-5 mr-5 rounded-2xl "></div>  
                    <p className="text-2xl font-medium ">Natural Mating Process</p>
                </div>
            </div>

            {/* Bottom Part with image and content */}

            <div className=" container flex md:flex-row flex-col justify-between items-center p-0 gap-28">
                <img src={FEEDINGCHICKENIMG} className="size-96 rounded-lg mt-10" alt="image" />
                <p className="text-xl font-normal mt-12 ">
                At our farms ecosystem seamlessly integrates superior breeders, or parent birds, with our state-of-the-art hatcheries. <br /> <br />
                These parent birds are specially bred in bio-secure environments, they receive optimal nutrition, and are expertly managed to consistently produce high-quality hatching eggs. 
                These eggs yield excellent Day-Old Chicks (DOC). <br /><br />
                Our entire end-to-end meticulous nurturing processes ensure that our chicken is known for its juicy taste, excellent quality of protein and tenderness. <br /> <br />
                Today our  Breeder Farms has the capacity to produce 1.5 lakhs + birds every month.
                </p>
            </div>
        </div>
        
        {/* Hatchery Section Start */ }
        <div className=" container flex flex-col mt-20">
            <h2 className=" md:text-3xl font-semibold text-2xl">
                Hatchery
            </h2>
            {/* top section of breeder operation */}
            <div className="flex md:flex-row flex-col justify-between mt-5 gap-10">
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={BIOSECURITYICON} className="size-20 p-1" alt="icon" />
                    <div className=" border-primary border h-12 ml-5 mr-5 rounded-2xl "></div>
                    <p className="text-2xl font-medium ">Bio-Secure Farms</p>
                </div>
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={OPENCAGEICON} className="size-20 p-1" alt=""/>
                    <div className =" border-primary border h-12 ml-5 mr-5 rounded-2xl "></div>
                    <p className="text-2xl font-medium ">Cage Free Farms</p>
                </div>
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={NATURALMATINGICON} className="size-20 p-1" alt=""/>
                    <div className=" border-primary border h-12 ml-5 mr-5 rounded-2xl "></div>  
                    <p className="text-2xl font-medium ">Natural Mating Process</p>
                </div>
            </div>
        
            {/* Bottom Part with image and content */}

            <div className=" container flex md:flex-row flex-col justify-between items-center p-0 gap-28">
                <img src={HATCHERYIMG} className="size-96 rounded-lg mt-10" alt="image" />
                <p className="text-xl font-normal">
                <br /> 
                Our commitment to quality begins with the premium hatching eggs sourced from our Parent Farms. 
                These eggs then undergo a stringent and closely monitored incubation process in a highly Bio-secured environment. <br /><br />
                A standard egg grading technology ensures that we select only the best eggs for incubation to maintain optimal chicks quality fertility. 
                These Day-Old Chicks (DOC), which are known for rapid growth as an and exceptional genetic potential, 
                receives global-standard vaccines for safety which also guarantees excellent livability post-hatch in farms. <br /><br />
                Today, with hatcheries in Maharashtra and Karnataka, our total yield capacity is 1.3 million DOCs per month.
                </p>
            </div>
        </div>

       
    </div>
    // <div id="Business" className="max-h-[80vh] md:min-h-[60vh] min-h-[50vh] h-fit flex flex-col 
    //         items-center justify-center md:mt-5 mt-5">
    //     <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10  text-center">
    //         Our Businesses
    //     </h2>
    // <BusinessMarquee
    //  items={items}
    //  direction='left'
    //  speed='fast'
    // />
    // </div>
  )
}

export default BusinessSection

