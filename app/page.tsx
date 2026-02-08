import TripSection from "@/components/feature trip/TripSection";
import HeroSection from "@/components/hero/HeroSection";
import PopularSection from "@/components/popular/popularSection";
import TrendingSection from "@/components/trending/TrendingSection";
import WhyChooseUs from "@/components/whyChoose";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="p-20 space-y-10">
        <TrendingSection />
        <TripSection />
      </div>
      <WhyChooseUs />
      <PopularSection />
    </main>
  );
}