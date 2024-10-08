import { useState, useEffect } from "react";
import { BADMINTONSPONSORMEDIA, BADMINTONSPONSORMEDIA2, USSECMEDIA1, USSECMEDIA2 } from "@/assets/images";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReactPlayer from "react-player";

interface CarouselImage {
  id: number;
  src?: string;
  alt?: string;
  des?: string;
  des2?: string;
  video?: string; // Add video key
}

export function CarouselSpacing() {
  const [selectedImage, setSelectedImage] = useState<CarouselImage | null>(null);

  const couroselimg: CarouselImage[] = [
    {
      id: 1,
      src: BADMINTONSPONSORMEDIA2,
      alt: "Image 1",
      des: "Collaboration with Anup Shridhar Badminton Academy.",
      des2: "Collaboration with Anup Shridhar Badminton Academy.",
    },
    {
      id: 2,
      src: BADMINTONSPONSORMEDIA,
      alt: "Image 2",
      des: "Partnered as Sponsors for Two Exceptionally Talented Players.",
      des2: "Partnered as Sponsors for Two Exceptionally Talented Players.",
    },
    {
      id: 3,
      src: USSECMEDIA1,
      alt: "Image 3",
      des: "Naveen Pasuparthy, President of KPFBA with USSEC’s CEO, Jim Sutter.",
      des2: "Naveen Pasuparthy, President of Karnataka Poultry Farmers & Breeders Association (KPFBA) with USSEC’s CEO, Jim Sutter.",
    },
    {
      id: 4,
      src: USSECMEDIA2,
      alt: "Image 4",
      des: "USSEC and KPFBA signing of MoU on 19-August-2024.",
      des2: "USSEC and KPFBA signing of MoU on 19-August-2024.",
    },
    {
      id: 5,
      video: "https://www.youtube.com/watch?v=UN-u2nRomyM",
      des: "Watch our collaboration video.",
      des2: "Collaboration Highlights Video",
    },
  ];

  const handleImageClick = (item: CarouselImage) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div>
      <Carousel id="carousel" className="w-full">
        <div className="text-center mb-7 mt-5 font-semibold text-2xl md:text-4xl">Media</div>
        <CarouselContent className="-ml-0.5">
          {couroselimg.map((item) => (
            <CarouselItem key={item.id} className="pl-1 md:basis-1/2 xl:basis-1/3">
              <div className="p-1 text-center">
                <Card>
                  <CardContent
                    className="flex aspect-auto items-center justify-center p-3 cursor-pointer"
                    onClick={() => handleImageClick(item)}
                  >
                    {item.src ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="lg:h-64 opacity-100 hover:opacity-70 transition-opacity duration-500"
                      />
                    ) : (
                      <div className="flex justify-center items-center lg:h-64 lg:w-96 md: h-40 md: w-64 ">
                        <ReactPlayer 
                          url={item.video} 
                          light={true}
                          width="100%"
                          height="100%"
                        />
                      </div>
                    )}
                  </CardContent>
                  <p className="xl:text-lg md:text-md text-sm font-semibold">{item.des}</p>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg md:max-w-xl lg:max-w-2xl w-full">
            {selectedImage.src ? (
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto" />
            ) : (
              <ReactPlayer classname="lg:h-64 w-96" url={selectedImage.video} controls width="100%" height="350px" />
            )}
            <div className="items-center text-wrap flex flex-col text-center">
              <p className="xl:text-lg md:text-md text-sm font-semibold">{selectedImage.des2}</p>
            </div>
            <button
              className="mt-2 bg-red-500 text-white font-normal py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
