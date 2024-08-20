import Header from "@/components/custom/header";


import HeroSection from "./components/hero-section";
import WhatDoWeDo from "./components/what-do-we-do";
import CrewMembers from "./components/the-crew";
import Footer from "@/components/custom/footer";
import BusinessSection from "./components/business";
import { CarouselSpacing } from "./components/carousel";

function LandingPage() {
  return (
    <div className="App ">
      <Header />
      <HeroSection />
      <WhatDoWeDo />
      <CrewMembers />
      <BusinessSection/> 
      <div className="text-center mb-5 -mt-10 font-semibold text-2xl md:text-4xl"> Media</div>
      <div className="container px-20">
      <CarouselSpacing/>
      </div>
      
      <Footer />
  
    </div>
  );
}

export default LandingPage;
