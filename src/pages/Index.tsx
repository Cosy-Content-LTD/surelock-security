import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import MeetTheTeam from "@/components/MeetTheTeam";
import ReviewsSection from "@/components/ReviewsSection";
import AreasSection from "@/components/AreasSection";
import FooterSection from "@/components/FooterSection";
import MobileCTA from "@/components/MobileCTA";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <div id="reviews">
        <ReviewsSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="about">
        <MeetTheTeam />
      </div>
      <AreasSection />
      <FooterSection />
      <MobileCTA />
    </div>
  );
};

export default Index;