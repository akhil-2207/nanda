import { FEEDSIMG,CONSISTENTICON,PREMIUMRAWMATERIALICON,STATEOFARTICON}from "@/assets/images";

function FeedContent ()
{
    return(
        <div className="container flex flex-col ">
            <h2 className="md:text-3xl font-semibold text-2xl">Nanda Feeds: </h2>
            {/* Top section of hatchery */}
            <div className="flex md:flex-row flex-col justify-between mt-5 gap-10">
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={CONSISTENTICON} className="size-20 p-1" alt="icon" />
                    <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                    <p className="text-2xl font-medium">Consistent 24/7 Quality</p>
                </div>
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={PREMIUMRAWMATERIALICON} className="size-20 p-1" alt="" />
                    <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                    <p className="text-2xl font-medium">Premium Raw Material Sourcing</p>
                </div>
                <div className="container border-gray-300 border rounded-2xl flex-row flex items-center p-3">
                    <img src={STATEOFARTICON} className="size-20 p-1" alt="" />
                    <div className="border-primary border h-12 ml-5 mr-5 rounded-2xl"></div>
                    <p className="text-2xl font-medium">State of the art feed mills</p>
                </div>
            </div>

            {/* Bottom part with image and content */}
            <div className="container flex md:flex-row flex-col justify-between items-center p-0 gap-28">
                <img src={FEEDSIMG} className="size-96 rounded-lg mt-10" alt="image" />
                <p className="text-xl font-normal">
                    <br />
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
    )

}
export default FeedContent;