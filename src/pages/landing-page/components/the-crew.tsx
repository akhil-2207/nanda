import { JAYAKUMAR, NARENDRA, NAVNEEN, PATTHABHI, PSNANDA, SETTY } from "@/assets/images";

// Dummy data for crew members
const crewMembers = [
    {
        name: "P S Nanda Kumar",
        position: "Founder, Mentor & First generation Entrepreneur",
        image: PSNANDA, // Correctly assign the image path
    },
    {
        name: "Naveen Pasuparthy",
        position: "Chief Farmer",
        image: NAVNEEN,
    },
    {
        name: "Narendra Pasuparthy",
        position: "Chief Farmer",
        image: NARENDRA,
    },
    {
        name: "A. N. Setty",
        position: "livestock operations",
        image: SETTY,
    },
    {
        name: "Dr. Jaya Kumar",
        position: "Breeder Operations",
        image: JAYAKUMAR,
    },
    {
        name: "Dr. Pattabhi",
        position: "Chief Nutritionist",
        image: PATTHABHI,
    },
    {   name: "Venkat Rao",
        position: "Business Head",
        image: PATTHABHI,
        

    },
];

function CrewSection() {
    return (
        <div id="our-group" className="h-fit px-4 bg-primary-foreground container">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 text-center">
                    Meet Our Team
                </h2>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full md:w-2/3 lg:w-1/2 p-4 mb-10">
                        <div className="flex flex-col items-center">
                            <img
                                src={crewMembers[0].image}
                                alt={crewMembers[0].name}
                                className="w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold mt-4">
                                {crewMembers[0].name}
                            </h3>
                            <p className="text-md md:text-lg font-normal text-gray-600">
                                {crewMembers[0].position}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:gap-10 md:w-[100%]">
                        {crewMembers.slice(1).map((member, index) => (
                            <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 p-4">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-32 h-32 md:w-40 md:h-40 object-cover shadow-lg border-primary border"
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
