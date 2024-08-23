import { LOCATION } from "@/assets/images";

function LocationSection(){
    return(
            <div id="our locations" className="container h-fit px-4 md:mt-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 mt-8 text-center ">
                    Nanda Group FootPrint
                </h2>
                <div className="flex flex-col items-center md:mt-8 ">
                    <img className="mt-4 md:min-h-[80vh]  " src={LOCATION} alt="our locations" />
                </div>
                
            </div>
    )
}
export default LocationSection;