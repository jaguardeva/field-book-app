import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1240px] px-4 md:px-0 border mx-auto">
        <HeroCarousel />
      </div>
    </section>
  );
}
