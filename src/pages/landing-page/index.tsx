import Header from "@/components/custom/header";
import App from "@/App";

import HeroSection from "./components/hero-section";
import WhatDoWeDo from "./components/what-do-we-do";
import CrewMembers from "./components/the-crew";
import Footer from "@/components/custom/footer";
import BusinessSection from "./components/business";
import { CarouselSpacing } from "./components/carousel";

function LandingPage() {
  return (
    <div className="bg-primary-foreground App ">
      <Header />
      <HeroSection />
      <WhatDoWeDo />
      <CrewMembers />
      <BusinessSection/>
      <div className="container px-40">
      <CarouselSpacing/>
      </div>
      
      <Footer />
  
    </div>
  );
}

export default LandingPage;
