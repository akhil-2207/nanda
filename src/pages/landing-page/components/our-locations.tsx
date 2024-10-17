import { useState, useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/firebase"; // Assuming Firebase is already initialized

function LocationSection() {
  const [locationImageUrl, setLocationImageUrl] = useState("");

  useEffect(() => {
    const fetchLocationImage = async () => {
      try {
        const url = await getDownloadURL(ref(storage, "OurLocations/nanda group location on map.png"));
        setLocationImageUrl(url);
      } catch (error) {
        console.error("Error fetching location image:", error);
      }
    };

    fetchLocationImage();
  }, []);

  return (
    <div id="our-locations" className="container h-fit px-4 mt-16 md:mt-24">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 mt-8 text-center">
        Nanda Group Footprint
      </h2>
      <div className="flex flex-col items-center mt-4 md:mt-8">
        {locationImageUrl && (
          <img className="md:h-[520px]" src={locationImageUrl} alt="Our Locations" />
        )}
      </div>
    </div>
  );
}

export default LocationSection;
