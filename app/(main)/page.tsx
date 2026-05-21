import CardSection from "@/components/Home/Field/CardSection";
import FilterSection from "@/components/Home/Filter/FilterSection";
import HeroSection from "@/components/Home/Hero/HeroSection";

export default function Home() {
  return (
    <main className="w-full py-6">
      <HeroSection />
      <FilterSection />
      <CardSection />
    </main>
  );
}
