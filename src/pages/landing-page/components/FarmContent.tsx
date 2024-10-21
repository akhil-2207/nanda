import { FEEDINGCHICKENIMG,NATURALMATINGICON,OPENCAGEICON,ADVANCEMACHIERYICON,CONTRACTFARMINGIMG,
        STATEOFARTHATCHERYICON,BIOSECURITYICON,HATCHERYIMG,VACCINATEDCHICKSICON }from "@/assets/images";


function FarmContent()
{
    return(  
        <div>
            {/* Breeder section */}
            <div className="container flex flex-col sm:px-8 px-3">
                <h2 className="md:text-3xl font-semibold text-2xl">Breeder Operations:</h2>
                {/* Top section of breeder operations */}
                <div className="flex lg:flex-row flex-col justify-between mt-5 lg:gap-10 gap-5">
                    <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                        <img src={BIOSECURITYICON} className="size-20 p-1" alt="icon" />
                        <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl "></div>
                        <p className="md:text-2xl text-xl md:font-medium font-semibold">Bio-Secure Farms</p>
                    </div>
                    <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                        <img src={OPENCAGEICON} className="size-20 p-1" alt="" />
                        <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                        <p className="md:text-2xl text-xl md:font-medium font-semibold">Cage Free Farms</p>
                    </div>
                    <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                        <img src={NATURALMATINGICON} className="size-20 p-1" alt="" />
                        <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                        <p className="md:text-2xl text-xl md:font-medium font-semibold">Natural Mating Process</p>
                    </div>
                </div>

                {/* Bottom part with image and content */}
                <div className="container flex lg:flex-row flex-col justify-between items-center p-0 lg:gap-28">
                    <img src={FEEDINGCHICKENIMG} className="sm:size-96 rounded-lg mt-10" alt="image" />
                    <p className="lg:text-xl text-base font-normal mt-12">
                        At our farms ecosystem seamlessly integrates superior breeders, or parent birds, with our state-of-the-art
                        hatcheries. <br /> <br />
                        These parent birds are specially bred in bio-secure environments, they receive optimal nutrition, and are
                        expertly managed to consistently produce high-quality hatching eggs. These eggs yield excellent Day-Old
                        Chicks (DOC). <br /><br />
                        Our entire end-to-end meticulous nurturing processes ensure that our chicken is known for its juicy taste,
                        excellent quality of protein and tenderness. <br /> <br />
                        Today our Breeder Farms has the capacity to produce 1.5 lakhs + birds every month.
                    </p>
                </div>

            </div>

            {/* Hatchery Section */}
            <div className="container flex flex-col sm:mt-20 mt-16 sm:px-8 px-3">
                <h2 className="md:text-3xl font-semibold text-2xl">Hatchery</h2>
                {/* Top section of hatchery */}
                <div className="flex lg:flex-row flex-col justify-between mt-5 lg:gap-10 gap-5">
                    <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                        <img src={STATEOFARTHATCHERYICON} className="size-20 p-1" alt="" />
                        <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                        <p className=" md:text-2xl text-xl md:font-medium font-semibold">State-of-the-art Hatcheries</p>
                    </div>
                    <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                        <img src={BIOSECURITYICON} className="size-20 p-1" alt="icon" />
                        <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                        <p className=" md:text-2xl text-xl md:font-medium font-semibold">Bio-Secure Farms</p>
                    </div>
                    <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                        <img src={VACCINATEDCHICKSICON} className="size-20 p-1" alt="" />
                        <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                        <p className=" md:text-2xl text-xl md:font-medium font-semibold">Vaccinated Chicks</p>
                    </div>
                </div>

                {/* Bottom part with image and content */}
                <div className="container flex lg:flex-row flex-col justify-between items-center p-0 lg:gap-28">
                    <img src={HATCHERYIMG} className="sm:size-96 rounded-lg mt-10" alt="image" />
                    <p className="lg:text-xl text-base font-normal mt-12 md:mt-8"> 
                        Our commitment to quality begins with the premium hatching eggs sourced from our Parent Farms. These eggs
                        then undergo a stringent and closely monitored incubation process in a highly Bio-secured environment.{" "}
                        <br />
                        <br />
                        A standard egg grading technology ensures that we select only the best eggs for incubation to maintain
                        optimal chicks quality fertility. These Day-Old Chicks (DOC), which are known for rapid growth as an and
                        exceptional genetic potential, receive global-standard vaccines for safety which also guarantees excellent
                        livability post-hatch in farms. <br />
                        <br />
                        Today, with hatcheries in Maharashtra and Karnataka, our total yield capacity is 1.3 million DOCs per
                        month.
                    </p>
                </div>

            </div>


            {/* Broiler Integration-contract-Farming */}
            <div className="container flex flex-col sm:mt-20 mt-16 sm:px-8 px-3">
                <h2 className="md:text-3xl font-semibold text-2xl">Integration-Contract Farming</h2>
                {/* Top section of Contract farming */}
                <div className="flex lg:flex-row flex-col justify-between mt-5 lg:gap-10 gap-5">
                    <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                        <img src={ADVANCEMACHIERYICON} className="size-20 p-1" alt="icon" />
                        <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                        <p className="md:text-2xl text-xl md:font-medium font-semibold">Advance Machinery</p>
                    </div>
                    <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                        <img src={OPENCAGEICON} className="size-20 p-1" alt="" />
                        <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                        <p className="md:text-2xl text-xl md:font-medium font-semibold">Cage Free Farms</p>
                    </div>
                    <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                        <img src={NATURALMATINGICON} className="size-20 p-1" alt="" />
                        <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                        <p className="md:text-2xl text-xl md:font-medium font-semibold">Natural Mating Process</p>
                    </div>
                </div>

                {/* Bottom part with image and content */}
                <div className="container flex lg:flex-row flex-col justify-between items-center p-0 lg:gap-28">
                    <img src={CONTRACTFARMINGIMG} className="sm:size-96 rounded-lg mt-10" alt="image" />
                    <p className="lg:text-xl text-base font-normal mt-12 md:mt-8">
                        At Nanda Group, we adopt a holistic approach to enhance mutual growth and increase revenue for our partner farmers. 
                        With a network of over 500 partner farmers across India, including 200+ in Maharashtra, 
                        we empower farmers through global technological support and together are shaping the future of poultry farming in India.
                        <br /> <br />
                        Nanda Group has took this initiative that educates, informs and connects farmers to the best in sustainable practices, 
                        bridging modern technology with traditional wisdom for stronger farmer-livestock relationships.
                    </p>
                </div>

            </div>


        </div>
            
    )
}
export default FarmContent;
