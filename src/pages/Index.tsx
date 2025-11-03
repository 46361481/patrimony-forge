import { TopBar } from "@/components/sections/TopBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { QualificationSection } from "@/components/sections/QualificationSection";
import { TruthSection } from "@/components/sections/TruthSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { MechanismsSection } from "@/components/sections/MechanismsSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { MentorSection } from "@/components/sections/MentorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <TopBar />
      <HeroSection />
      <QualificationSection />
      <TruthSection />
      <ComparisonSection />
      <MechanismsSection />
      <ScheduleSection />
      <MentorSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
