"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import BannerA from "@/public/banner/banner1.png";
import BannerB from "@/public/banner/banner2.png";
import BannerC from "@/public/banner/banner3.png";
import BannerD from "@/public/banner/banner4.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Banner = [
  {
    title: "Banner 1",
    image: BannerA,
  },
  {
    title: "Banner 2",
    image: BannerB,
  },
  {
    title: "Banner 3",
    image: BannerC,
  },
  {
    title: "Banner 4",
    image: BannerD,
  },
];

export default function HeroCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Banner.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-lg max-h-[500px]">
                <Image
                  src={item.image || ""}
                  alt={item.title}
                  className="object-cover object-center w-full"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
