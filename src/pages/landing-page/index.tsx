import Header from "@/components/custom/header";


import HeroSection from "./components/hero-section";
import WhatDoWeDo from "./components/what-do-we-do";
import CrewMembers from "./components/the-crew";
import Footer from "@/components/custom/footer";

function LandingPage() {
  return (
    <div className="bg-primary-foreground App">
      <Header />
      <HeroSection />
      <WhatDoWeDo />
      <CrewMembers />
      <Footer />
    </div>
  );
}

export default LandingPage;
