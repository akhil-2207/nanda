import { useState, useEffect } from "react";
import { storage, ref, getDownloadURL } from "@/firebase";


const crewMembers = [
    { name: "P S Nanda Kumar", position: "Founder, Mentor & First generation Entrepreneur", image: "PS_nanda_kumar" },
    { name: "Naveen Pasuparthy", position: "Chief Farmer", image: "Naveen_pasuparthy" },
    { name: "Narendra Pasuparthy", position: "Chief Farmer", image: "narendre sir pic updated" },
    { name: "A. N. Setty", position: "COO", image: "setty" },
    { name: "Venkat Rao", position: "Business Head", image: "venkat sir" },
    { name: "Dr. R JayaKumar", position: "Breeder Operations", image: "DR-R.JAYAKUMAR" },
    { name: "Dr. Pattabhi", position: "Group Nutritionist", image: "patabi" },
    { name: "Dr. Kiran T S", position: "Broiler Integration", image: "Dr. Kiran pic" },
];

function CrewSection() {
    const [crewWithImages, setCrewWithImages] = useState(crewMembers);

    useEffect(() => {
        const fetchImages = async () => {
            const updatedCrew = await Promise.all(
                crewMembers.map(async (member) => {
                    const imageRef = ref(storage, `Crew/${member.image}.png`); // Use proper path
                    const imageUrl = await getDownloadURL(imageRef);
                    return { ...member, image: imageUrl };
                })
            );
            setCrewWithImages(updatedCrew);
        };

        fetchImages();
    }, []);

    return (
        <div id="The-Team" className="h-fit p-0 sm:px-4 md:mt-6 container">
            <div className="container mx-auto p-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 mt-8 text-center">
                    Meet Our Team
                </h2>
                
                {/* Div for 1st image of the founder */}
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full md:w-2/3 lg:w-1/2 p-4 mb-10">
                        <div className="flex flex-col items-center">
                            <img
                                src={crewWithImages[0].image}
                                alt={crewWithImages[0].name}
                                className="w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold mt-4">
                                {crewWithImages[0].name}
                            </h3>
                            <p className="text-md md:text-lg font-normal text-gray-600 text-center">
                                {crewWithImages[0].position}
                            </p>
                        </div>
                    </div>

                    {/* Div for rest of the crew members starting from index 1 */}
                    <div className="flex flex-wrap justify-center lg:gap-10 md:gap-1 md:w-[100%] md:justify-around">
                        {crewWithImages.slice(1).map((member, index) => (
                            <div key={index} className="w-1/2 md:w-1/3 lg:w-1/5 md:p-4 pb-10">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-40 md:w-40 md:h-48 object-cover shadow-lg border-primary border"
                                    />
                                    <h3 className="text-sm md:text-xl text-center font-semibold mt-4">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm md:text-md text-gray-600 font-normal text-center">
                                        {member.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrewSection;
