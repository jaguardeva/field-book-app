import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  return (
    <section className="w-full py-6">
      <div className="w-full max-w-[1240px] px-4 md:px-0 mx-auto">
        <HeroCarousel />
      </div>
    </section>
  );
}
