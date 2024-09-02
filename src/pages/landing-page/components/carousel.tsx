import { MEDIA1, MEDIA3, MEDIA4,BADMINTONSPONSORMEDIA, BADMINTONSPONSORMEDIA2,
       USSECMEDIA1, USSECMEDIA2 } from "@/assets/images"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  des:string;
  
}

export function CarouselSpacing() {
  const [selectedImage, setSelectedImage] = useState<CarouselImage | null>(null);
  const couroselimg = 
  [
    { id: 1, 
      src: BADMINTONSPONSORMEDIA2, alt: "Image 1", 
      des:"Badminton Acadedmy "},
    { id: 2, 
      src: BADMINTONSPONSORMEDIA, alt: "Image 2",
      des:"Badminton Academy" },
    { id: 3, 
      src: USSECMEDIA1, alt: "Image 3",
      des:"USSEC-24 meet " }, // Add your image paths here
    { id: 4, 
      src: USSECMEDIA2, alt: "Image 4",
      des:"USSEC-24 meet" }, // Add your image paths here
    { id: 5, 
      src: MEDIA4, alt: "Image 5",
      des:"Abdycdbhsbbcsbhbvjknksdjovhsjndv ksjnkvnkjd knk    dvsd sdsdc sdc sd cd sc s" }, // Add your image paths here
    { id: 6, 
      src: MEDIA3, alt: "Image 6",
      des:"lorem ipsum" },
    { id: 7, 
      src: MEDIA1, alt: "Image 7",
      des:"lorem ipsum" }, 
  ];
    const handleImageClick = (image: CarouselImage) => {
    setSelectedImage(image);

    // Disable scroll
    document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
    setSelectedImage(null);
    
    // Enable scroll
    document.body.style.overflow = 'auto';
    };

    useEffect(() => {
      return () => {
        // Reset scroll behavior when component unmounts
        document.body.style.overflow = 'auto';
      };
    }, []);

  return (
  <div>  
    <Carousel id="carousel" className="w-full">
    <div className="text-center mb-7 mt-5  font-semibold text-2xl md:text-4xl"> Media</div>
      <CarouselContent className="-ml-0.5 ">
        {couroselimg.map((couroselimg) => (
          <CarouselItem key={couroselimg.id} className="pl-1 md:basis-1/2 xl:basis-1/3  ">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-auto items-center justify-center p-3 cursor-pointer"
                 onClick={() => handleImageClick(couroselimg)}>
                  <img src ={couroselimg.src} alt={couroselimg.alt} 
                    className="lg:h-64 opacity-100 hover:opacity-70 transition-opacity duration-500" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext  />
    </Carousel>

    {selectedImage && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
        <div className=" bg-white p-4 rounded-lg md:max-w-xl lg:max-w-2xl w-full">
          <img src ={selectedImage.src} alt={selectedImage.src} className="w-full h-auto" />
            <div className=" items-center text-wrap flex flex-col ">
              <p className="xl:text-lg md:text-md text-sm font-semibold  ">
                {selectedImage.des}
              </p>
            </div>
          <button
            className="mt-2 bg-red-500 text-white font-normal py-2 px-4 rounded"
            onClick={closeModal}>
            Close 
          </button>
        </div>
      </div>
    )}
  </div>
  )
}
