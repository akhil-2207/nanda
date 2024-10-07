import { FOODAFFORDABLEICON,FOODCONVENIENCEICON,FOODFRESHNESSICON,FOODIMG,NANDUIMG,NANDUIMGMOBILE,NANDUS } from "@/assets/images";

function FoodContent ()
{
    return(
        <div className="container flex flex-col ">
            <h2 className="md:text-3xl font-semibold text-2xl">Nandus: </h2>
            {/* Top section of hatchery */}
            <div className="flex md:flex-row flex-col justify-between mt-5 gap-10">
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={FOODAFFORDABLEICON} className="size-20 p-1" alt="icon" />
                    <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                    <p className="text-2xl font-medium">Affordable Pricing</p>
                </div>
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={FOODFRESHNESSICON} className="size-20 p-1" alt="" />
                    <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                    <p className="text-2xl font-medium">Fresshness Guaranteed</p>
                </div>
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={FOODCONVENIENCEICON} className="size-20 p-1" alt="" />
                    <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                    <p className="text-2xl font-medium">Convenience </p>
                </div>
            </div>

            {/* Bottom part with image and content */}
            <div className="container flex md:flex-row flex-col justify-between items-center p-0 gap-28 ">
                <img src={FOODIMG} className="size-96 w-1/3 rounded-lg mt-10" alt="image" />
                <p className="text-xl font-normal md:mt-9">
                Nandus' Ready-to-Cook (RTC) and Ready-to-Eat (RTE) products are crafted with exceptional care in state-of-the-art facilities, ensuring the highest standards of hygiene and freshness. 
                <br /><br />
                Sourced from our own farms, we deliver premium quality, farm-fresh chicken known for its tenderness and rich taste. 
                <br /><br />
                Every product is expertly seasoned and prepared to retain the authentic, juicy flavors that Nandus is renowned for, offering a gourmet experience right at your table. 
                From our farms to your fork, we guarantee delicious, wholesome meals every time.
                </p>
                
            </div>

            <div className="flex flex-col items-center md:mt- ">
                {/* nandus logo */}
                <img className="w-40 md:mt-10 mt-10" src={NANDUS} alt="logo" />
                {/* desktop image for desktop view only */}
                <img className="hidden md:block -mt-5 " src={NANDUIMG} alt="" />

                {/* mobile image for mobile view only */}
                <img className="mt-5 block md:hidden" src={NANDUIMGMOBILE} alt="" />
                <button onClick={() => window.open("https://www.nandus.com/home", "_blank")}
                className="items-center md:py-2 md:px-4 text-gray-900 bg-secondary hover:bg-red-800 transition rounded 
                font-normal md:text-lg text-sm py-1 px-2 shadow-md hover:text-white mt-2"> Nandus.com</button>
                <p className="mt-3 text-base md:text-lg font-medium">Check Out Our Products!</p>

            </div>


        </div>
    )

}
export default FoodContent;