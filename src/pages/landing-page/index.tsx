import Header from "@/components/custom/header";
import HeroSection from "./components/hero-section";
import WhatDoWeDo from "./components/what-do-we-do";
import CrewMembers from "./components/the-crew";
import Footer from "@/components/custom/footer";
import BusinessSection from "./components/business";
import { CarouselSpacing } from "./components/carousel";
import LocationSection from "./components/our-locations";

function LandingPage() {
  return (
    <div className="App ">
      <Header />
      <HeroSection />
      <WhatDoWeDo />
      <CrewMembers />
      <BusinessSection/> 
      <div className="container px-14">
      <CarouselSpacing/>
      </div>
      <LocationSection/>

      <Footer />
  
    </div>
  );
}

export default LandingPage;
