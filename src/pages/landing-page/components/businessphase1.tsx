import { useState } from "react"; // Import useState hook
import FeedContent from "./FeedContent";
import FarmContent from "./FarmContent";
import FoodContent from "./FoodContent";


function BusinessSection1() {
  // State to track selected section
  const [selectedSection, setSelectedSection] = useState("FarmOperations");

  return (
    <div id="Business" className="h-fit flex flex-col items-center justify-center md:mt-10 mt-5 mb-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center">Our Businesses</h2>

      {/* Buttons to switch between sections */}
      <div className="mb-6">
        <button
          onClick={() => setSelectedSection("FarmOperations")}
          className={`px-4 py-2 font-semibold text-xl ${ 
            selectedSection === "FarmOperations" ? " text-orange-500 underline" : "text-gray-400"}`}
        >
          Farm
        </button>
        <button
          onClick={() => setSelectedSection("Feed")}
          className={`ml-4 px-4 py-2 font-semibold text-xl  ${
            selectedSection === "Feed" ? " text-orange-500 underline" : "text-gray-400"}`}
        >
          Feed
        </button>

        <button
          onClick={() => setSelectedSection("Food")}
          className={`ml-4 px-4 py-2 font-semibold text-xl  ${
            selectedSection === "Food" ? " text-orange-500 underline" : "text-gray-400"}`}
        >
          Food
        </button>
      </div>


      {/* Conditionally render the selected section */}
        <div  className={`${selectedSection === "FarmOperations" ? "opacity-100" : "opacity-0 max-h-0"} 
            transition-opacity duration-700 ease-in-out overflow-hidden`}>
            <FarmContent/>

        </div>
    
          {/* Hatchery Section */}
        <div className={`${selectedSection === "Feed" ? "opacity-100" : "opacity-0 max-h-0"}
            transition-opacity duration-700 ease-in-out overflow-hidden`}>
            <FeedContent/>
            
        </div>
        
        {/* Food Section */}
        <div className={`${selectedSection === "Food" ? "opacity-100" : "opacity-0 max-h-0"}
            transition-opacity duration-700 ease-in-out overflow-hidden`}>
            <FoodContent/>
            
        </div>
    </div>
  );
}

export default BusinessSection1;
