/*
 * Design: Kinetic Minimalism
 * Unicara Corporate Site — Main Page
 * Brand color: #84CBC8, Charcoal: #1A1A2E
 * Font: Sora (display) + Noto Sans JP (body)
 */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ServiceSection from "@/components/sections/ServiceSection";
import CompanySection from "@/components/sections/CompanySection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SectionDivider />
        <MissionSection />
        <SectionDivider />
        <ServiceSection />
        <SectionDivider />
        <CompanySection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
