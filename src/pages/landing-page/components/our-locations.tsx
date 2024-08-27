import { LOCATION } from "@/assets/images"
import { NANDUIMG } from "@/assets/images";
import { NANDUIMGMOBILE } from "@/assets/images";

function LocationSection(){
    return(
            <div id="our locations" className="container h-fit px-4 md:mt-24 mt-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 mt-8 text-center ">
                    Nanda Group FootPrint
                </h2>
                <div className="flex flex-col items-center md:mt-8 ">
                    <img className="mt-4 md:min-h-[80vh]  " src={LOCATION} alt="our locations" />

                    {/* desktop image for desktop view only */}
                    <img className="mt-10 hidden md:block " src={NANDUIMG} alt="" />

                    {/* mobile image for mobile view only */}
                    <img className="mt-10 block md:hidden" src={NANDUIMGMOBILE} alt="" />

                    <button onClick={() => window.open("https://www.nandus.com/home", "_blank")}
                    className="items-center md:py-2 md:px-4 bg-red-600 hover:bg-red-800 transition rounded font-normal md:text-lg text-sm py-1 px-2  text-white mt-2"> Order Now!</button>
                </div>
            </div>
            
    )
}
export default LocationSection;