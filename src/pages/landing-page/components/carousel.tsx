import { MEDIA1, MEDIA2, MEDIA3, MEDIA4, MEDIA5 } from "@/assets/images"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSpacing() {
  const couroselimg = 
  [
    { id: 1, 
      src: MEDIA1, alt: "Image 1" },
    { id: 2, 
      src: MEDIA2, alt: "Image 2" },
    { id: 3, 
      src: MEDIA3, alt: "Image 3" }, // Add your image paths here
    { id: 4, 
      src: MEDIA4, alt: "Image 4" }, // Add your image paths here
    { id: 5, 
      src: MEDIA5, alt: "Image 5" }, // Add your image paths here
  ];
  return (
    <Carousel id="carousel" className="w-full bg-white">
      <CarouselContent className="-ml-0.5">
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
          

                <span className="text-2xl font-semibold">{index + 1}</span> 
                
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
        {couroselimg.map((couroselimg) => (
          <CarouselItem key={couroselimg.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <img src ={couroselimg.src} alt={couroselimg.alt} className="object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext  />
    </Carousel>
  )
}
