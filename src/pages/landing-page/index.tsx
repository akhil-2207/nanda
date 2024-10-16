import Header from "@/components/custom/header";
import HeroSection from "./components/hero-section";
import WhatDoWeDo from "./components/what-do-we-do";
import CrewMembers from "./components/the-crew";
import Footer from "@/components/custom/footer";
import BusinessSection from "./components/business";
import { CarouselSpacing } from "./components/carousel";
import LocationSection from "./components/our-locations";
import IndustryConnects from "./components/Industry-Connects";


function LandingPage() {
  return (
    <div className="App ">
      <Header />
      <HeroSection />
      <WhatDoWeDo />
      <CrewMembers />
      <IndustryConnects/>
      <BusinessSection/> 
      <div className="container px-14 md:mt-28 mt-16">
      <CarouselSpacing/>
      </div>
      <LocationSection/>
      <Footer />
  
    </div>
  );
}

export default LandingPage;
